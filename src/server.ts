import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// Security headers for a static marketing site. Only two third parties are
// used: Google Fonts (stylesheet + font files) and the Google Maps embed
// (iframe). Everything else is same-origin, so the policy is least-privilege.
//
// 'unsafe-inline' notes:
//  - script-src: TanStack Start emits per-request inline hydration scripts
//    (dehydrated router/query state), whose content changes on every render,
//    so neither a static hash nor a build-time nonce can cover them. Inline
//    event-handler attributes are separately blocked via script-src-attr 'none'.
//  - style-src: React/Tailwind emit inline style attributes and the SSR
//    critical-CSS <style> tag. Styles cannot execute JS, so the residual risk
//    is limited to visual injection.
const LOVABLE_EDITOR_ANCESTORS =
  "https://lovable.dev https://*.lovable.dev https://*.lovable.app";

// The Lovable editor renders the app inside its own iframe, so preview hosts
// must allow it. The published site never needs to be framed by anyone.
function isEditorPreviewHost(hostname: string): boolean {
  if (hostname === "localhost" || hostname === "127.0.0.1") return true;
  // Preview/dev hosts always carry a "--" segment (id-preview--<id>.lovable.app,
  // project--<id>-dev.lovable.app); published hosts and custom domains do not.
  return hostname.endsWith(".lovable.app") && hostname.includes("--");
}

function buildCsp(isPreview: boolean): string {
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    // No forms exist on the site.
    "form-action 'none'",
    isPreview
      ? `script-src 'self' 'unsafe-inline' ${LOVABLE_EDITOR_ANCESTORS}`
      : "script-src 'self' 'unsafe-inline'",
    // Block inline on* handler attributes even though scripts allow inline.
    "script-src-attr 'none'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' data: https://fonts.gstatic.com",
    "img-src 'self' data: blob:",
    isPreview ? "connect-src 'self' ws: wss: https:" : "connect-src 'self'",
    // Google Maps embed only.
    "frame-src https://www.google.com",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    isPreview ? `frame-ancestors 'self' ${LOVABLE_EDITOR_ANCESTORS}` : "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

function withSecurityHeaders(request: Request, response: Response): Response {
  const headers = new Headers(response.headers);
  const isHtml = (headers.get("content-type") ?? "").includes("text/html");
  if (isHtml) {
    let hostname = "";
    try {
      hostname = new URL(request.url).hostname;
    } catch {
      hostname = "";
    }
    headers.set("content-security-policy", buildCsp(isEditorPreviewHost(hostname)));
  }
  headers.set("strict-transport-security", "max-age=31536000; includeSubDomains");
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "strict-origin-when-cross-origin");
  headers.set(
    "permissions-policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  );
  headers.set("cross-origin-opener-policy", "same-origin-allow-popups");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withSecurityHeaders(request, await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return withSecurityHeaders(
        request,
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
  },

    } catch (error) {
      console.error(error);
      return withSecurityHeaders(
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
  },
};

