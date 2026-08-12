import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  MapPin,
  Phone,
  Star,
  Truck,
  Wallet,
  Users,
  Layers,
  Instagram,
  Facebook,
  ArrowRight,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAPS_EMBED_URL,
  MAPS_REVIEWS_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
} from "@/lib/site";
import heroImg from "@/assets/hero-pintura.jpg";
import tintasImg from "@/assets/prod-tintas.jpg";
import acessoriosImg from "@/assets/prod-acessorios.jpg";
import coresImg from "@/assets/cores.jpg";

const TITLE = "H S Tintas | Loja de Tintas em Santa Rosa RS";
const DESCRIPTION =
  "Tintas, acessórios e produtos para pintura em Santa Rosa RS. Atendimento especializado, bons preços e orçamento pelo WhatsApp na H S Comércio de Tintas.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HardwareStore",
          name: "H S Comércio de Tintas",
          alternateName: "H S Tintas",
          description: DESCRIPTION,
          telephone: "+55 55 3512-1256",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Borges de Medeiros, 420 - Centro",
            addressLocality: "Santa Rosa",
            addressRegion: "RS",
            postalCode: "98780-001",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "30",
          },
          sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
          areaServed: "Santa Rosa - RS",
        }),
      },
    ],
  }),
});

const diferenciais = [
  {
    icon: Users,
    title: "Atendimento especializado",
    text: "Equipe preparada para ajudar o cliente a escolher os melhores produtos.",
  },
  {
    icon: Wallet,
    title: "Bons preços",
    text: "Produtos com ótimo custo-benefício para sua obra ou reforma.",
  },
  {
    icon: Layers,
    title: "Variedade de produtos",
    text: "Soluções para pintura residencial, comercial e profissional.",
  },
  {
    icon: Truck,
    title: "Entrega",
    text: "Facilidade para receber seus produtos com mais comodidade.",
  },
];

const produtos = [
  { name: "Tintas para paredes", img: tintasImg, tint: "oklch(0.585 0.192 35 / 0.55)" },
  { name: "Tintas para áreas externas", img: heroImg, tint: "oklch(0.48 0.09 205 / 0.6)" },
  { name: "Esmaltes", img: tintasImg, tint: "oklch(0.55 0.18 260 / 0.55)" },
  { name: "Vernizes", img: coresImg, tint: "oklch(0.5 0.12 70 / 0.6)" },
  { name: "Seladores", img: acessoriosImg, tint: "oklch(0.45 0.08 190 / 0.6)" },
  { name: "Massas", img: acessoriosImg, tint: "oklch(0.5 0.06 90 / 0.6)" },
  { name: "Texturas", img: coresImg, tint: "oklch(0.45 0.1 30 / 0.6)" },
  { name: "Rolos e pincéis", img: acessoriosImg, tint: "oklch(0.42 0.11 250 / 0.6)" },
  { name: "Fitas e acessórios", img: acessoriosImg, tint: "oklch(0.55 0.15 145 / 0.55)" },
  {
    name: "Produtos para preparação de superfícies",
    img: tintasImg,
    tint: "oklch(0.4 0.05 250 / 0.62)",
  },
];

const depoimentos = [
  "Ótimo atendimento, preço e entrega.",
  "Vendedores dedicados e super atenciosos.",
  "Bons preços comparados a outras lojas.",
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-primary-glow text-primary-glow" />
      ))}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-32 h-[26rem] w-[26rem] rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-[var(--shadow-soft)]">
                <Stars /> 4,9 no Google · Clientes satisfeitos em Santa Rosa
              </span>
              <h1 className="mt-6 text-4xl leading-[1.05] font-bold md:text-6xl">
                A cor certa para{" "}
                <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
                  transformar
                </span>{" "}
                seus ambientes
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                Tintas, produtos para pintura e atendimento especializado em Santa Rosa. Qualidade,
                bons preços e orientação para você escolher a melhor solução para sua obra.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="whatsapp" size="xl">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle /> Pedir orçamento no WhatsApp
                  </a>
                </Button>
                <Button asChild variant="ink" size="xl">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    <MapPin /> Como chegar
                  </a>
                </Button>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  ["4,9★", "Nota no Google"],
                  ["+30", "Avaliações"],
                  ["Centro", "Santa Rosa - RS"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-xl font-bold">{v}</dt>
                    <dd className="text-xs text-muted-foreground">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                <img
                  src={heroImg}
                  alt="Pintor aplicando tinta em parede de sala de estar renovada"
                  width={1600}
                  height={1200}
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)] md:left-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <Palette className="size-5" />
                </span>
                <span className="text-sm leading-tight">
                  <strong className="block">Consultoria de cores</strong>
                  <span className="text-muted-foreground">sem custo, na loja</span>
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Reveal>
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                Por que escolher a H S Tintas
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
                Uma loja de tintas em que o cliente é orientado do início ao fim
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {diferenciais.map((d, i) => (
                <Reveal key={d.title} delay={i * 90}>
                  <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <d.icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{d.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                  Produtos
                </p>
                <h2 className="mt-3 max-w-xl text-3xl font-bold md:text-4xl">
                  Tudo para pintar, preparar e finalizar
                </h2>
              </div>
              <Button asChild variant="ink">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Falar com a loja <ArrowRight />
                </a>
              </Button>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {produtos.map((p, i) => (
                <Reveal key={p.name} delay={(i % 3) * 90}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 mix-blend-multiply"
                        style={{ backgroundColor: p.tint }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-base font-semibold">{p.name}</h3>
                      <Button asChild variant="whatsapp" size="sm" className="mt-4 self-start">
                        <a
                          href={whatsappLink(
                            `Olá! Encontrei a H S Tintas pelo site e gostaria de consultar a disponibilidade de ${p.name}.`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle /> Consultar disponibilidade
                        </a>
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COR IDEAL */}
        <section className="py-8">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Reveal className="grid items-center gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] lg:grid-cols-2">
              <img
                src={coresImg}
                alt="Leque de amostras de cores de tinta sobre mesa de madeira"
                loading="lazy"
                width={1200}
                height={900}
                className="h-64 w-full object-cover lg:h-full"
              />
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold md:text-4xl">Não sabe qual cor escolher?</h2>
                <p className="mt-4 text-muted-foreground">
                  Nossa equipe ajuda você a encontrar a combinação ideal para seu ambiente,
                  considerando estilo, iluminação e acabamento desejado.
                </p>
                <Button asChild variant="brand" size="xl" className="mt-8">
                  <a
                    href={whatsappLink(
                      "Olá! Encontrei a H S Tintas pelo site e gostaria de ajuda para escolher as cores do meu ambiente.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Palette /> Falar com um especialista
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Reveal className="text-center">
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                Avaliações
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Quem compra, recomenda</h2>
              <p className="mt-4 inline-flex items-center gap-2 text-muted-foreground">
                <Stars /> <strong className="text-foreground">4,9/5</strong> no Google · cerca de 30
                avaliações
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {depoimentos.map((t, i) => (
                <Reveal key={t} delay={i * 90}>
                  <figure className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                    <Stars />
                    <blockquote className="mt-4 font-display text-lg leading-snug">“{t}”</blockquote>
                    <figcaption className="mt-4 text-xs text-muted-foreground">
                      Depoimento inspirado em avaliações públicas no Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 text-center">
              <Button asChild variant="ink" size="lg">
                <a href={MAPS_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                  <Star /> Ver avaliações no Google
                </a>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-4 md:px-6">
          <Reveal
            className="mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-14 text-center md:px-12 md:py-20"
            as="section"
          >
            <div
              className="rounded-3xl"
              style={{ background: "transparent" }}
              aria-hidden="true"
            />
            <div
              className="-m-6 rounded-3xl p-8 md:-m-12 md:p-16"
              style={{ backgroundImage: "var(--gradient-ink)" }}
            >
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Vai pintar, reformar ou renovar um ambiente?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
                Fale com a H S Tintas e encontre os produtos certos para seu projeto.
              </p>
              <Button asChild variant="whatsapp" size="xl" className="mt-8">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> Solicitar orçamento pelo WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                Localização
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Visite nossa loja em Santa Rosa</h2>
              <address className="mt-6 space-y-4 text-base not-italic">
                <p className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>
                    {ADDRESS_LINE1}
                    <br />
                    {ADDRESS_LINE2}
                  </span>
                </p>
                <p className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">
                    Telefone: {PHONE_DISPLAY}
                  </a>
                </p>
              </address>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="brand" size="lg">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    <MapPin /> Abrir no Google Maps
                  </a>
                </Button>
                <Button asChild variant="ink" size="lg">
                  <a href={`tel:${PHONE_TEL}`}>
                    <Phone /> Ligar para a loja
                  </a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
                <iframe
                  title="Mapa da H S Comércio de Tintas em Santa Rosa - RS"
                  src={MAPS_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full lg:h-full lg:min-h-[22rem]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* REDES */}
        <section id="contato" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <Reveal>
              <h2 className="text-3xl font-bold md:text-4xl">Siga a H S Tintas</h2>
              <p className="mt-3 text-muted-foreground">
                Novidades, dicas de pintura e lançamentos no dia a dia da loja.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="ink" size="lg">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <Instagram /> @hs.tintas
                  </a>
                </Button>
                <Button asChild variant="ink" size="lg">
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                    <Facebook /> HsTintas
                  </a>
                </Button>
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle /> WhatsApp
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-display text-lg font-bold">H S Comércio de Tintas</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {ADDRESS_LINE1}
              <br />
              Santa Rosa - RS
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-3 inline-block text-sm text-muted-foreground hover:text-primary"
            >
              Telefone: {PHONE_DISPLAY}
            </a>
          </div>
          <nav className="text-sm">
            <p className="font-semibold">Links</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Instagram
                </a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Facebook
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Google Maps
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="font-semibold">Atendimento</p>
            <p className="mt-3 text-muted-foreground">
              Orçamentos, dúvidas sobre produtos e consultoria de cores pelo WhatsApp.
            </p>
            <Button asChild variant="whatsapp" size="sm" className="mt-4">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Solicitar orçamento
              </a>
            </Button>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          © H S Comércio de Tintas. Todos os direitos reservados.
        </p>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] shadow-[var(--shadow-card)] transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
