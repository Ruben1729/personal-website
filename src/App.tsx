import { useState } from 'react'
import { Button, KIND, SIZE } from 'baseui/button'
import { Drawer, ANCHOR } from 'baseui/drawer'
import { Tag, HIERARCHY } from 'baseui/tag'
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Satellite,
  TerminalSquare,
  X,
} from 'lucide-react'

const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
]

const projects = [
  {
    number: '01',
    title: 'Kronos',
    type: 'Embedded systems / Space',
    description: 'A modular CubeSat flight-software framework built for FreeRTOS—small, pragmatic, and designed to make components talk cleanly.',
    tags: ['C++', 'FreeRTOS', 'CubeSat'],
    href: 'https://github.com/space-concordia-spacecraft/kronos',
    color: 'bg-coral',
    art: 'orbit',
  },
  {
    number: '02',
    title: 'AbacusLang',
    type: 'Language design / Tools',
    description: 'A stack-based programming language made from scratch to explore lexers, parsers, and the machinery beneath source code.',
    tags: ['Python', 'Parsers', 'Compilers'],
    href: 'https://github.com/Ruben1729/abacus-lang',
    color: 'bg-cyan',
    art: 'terminal',
  },
  {
    number: '03',
    title: 'Reach Loyalty',
    type: 'Product / Full stack',
    description: 'A digital rewards platform spanning a customer web app, an admin portal, and the backend architecture connecting the whole system.',
    tags: ['Full stack', 'Node.js', 'Product'],
    href: 'https://reachloyalty.app/',
    color: 'bg-cream',
    art: 'cards',
  },
]

const experience = [
  {
    company: 'LIGHTWAVE TECHNOLOGY',
    role: 'Senior Systems Designer CPI',
    date: 'May 2025—Present',
    detail: 'Led a 12-month prototype commercialization, built a firmware HIL regression platform, shipped React/TypeScript/Supabase traceability for 5,000+ units, and drove TÜV pre-compliance testing.',
  },
  {
    company: 'LIGHTWAVE TECHNOLOGY',
    role: 'Systems Designer CPI',
    date: 'May 2024—May 2025',
    detail: 'Prototyped and validated a low-power automotive system, extended an End-of-Line testing platform, and engineered custom diagnostic hardware.',
  },
  {
    company: 'Concordia University',
    role: 'Junior Developer',
    date: 'Aug 2023—May 2024',
    detail: 'Optimized a C++ radiosity calculator, refactored a React city simulator, migrated Nginx infrastructure, and decoupled a monolithic API into services.',
  },
  {
    company: 'Concordia University',
    role: 'Teaching Assistant',
    date: 'Sep 2021—Dec 2023',
    detail: 'Led interactive labs and workshops, coached students individually, assessed performance, and demonstrated professional software-debugging practices.',
  },
  {
    company: 'Space Concordia',
    role: 'Payload Lead',
    date: 'Aug 2023—Apr 2024',
    detail: 'Led a CubeSat forest-fire inference payload and yeast space capsule across architecture, CAD and UI work, pressure testing, and thermal analysis.',
  },
  {
    company: 'Space Concordia',
    role: 'Consultant',
    date: 'Jun 2022—Aug 2023',
    detail: 'Advised incoming leadership, supported satellite software and systems integration, and established practices to reduce the impact of team turnover.',
  },
  {
    company: 'Space Concordia',
    role: 'President',
    date: 'Jun 2021—Jun 2022',
    detail: 'Directed a 300+ member society across five technical divisions, represented the organization externally, and built durable operating and recruitment systems.',
  },
  {
    company: 'Space Concordia',
    role: 'C&DH Lead',
    date: 'Feb 2020—Jun 2022',
    detail: 'Led a 10+ person team building reusable CubeSat architecture, flight software, ground software, engineering standards, and battery-test tooling.',
  },
  {
    company: 'RLP Industries',
    role: 'Full-Stack Web Developer',
    date: 'Mar 2022—Dec 2022',
    detail: 'Built a responsive Nuxt/Node application, deployed it across iOS and Android with Capacitor, and introduced automated release testing.',
  },
  {
    company: 'Montreal Institute of Swimming',
    role: 'Private Swim Instructor',
    date: 'Aug 2016—Mar 2020',
    detail: 'Delivered private swimming instruction tailored to each student’s ability, pace, and confidence.',
  },
  {
    company: 'Eye-In Media',
    role: 'Junior Full-Stack Developer',
    date: 'Mar 2019—Dec 2019',
    detail: 'Led an experimental project into production, designed its data models and staff interface, and built Vue mobile applications with a Node.js API.',
  },
]

function ExternalButton({ href, children, kind = KIND.primary }: { href: string; children: React.ReactNode; kind?: typeof KIND[keyof typeof KIND] }) {
  return (
    <Button
      $as="a"
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      kind={kind}
      size={SIZE.large}
      overrides={{
        BaseButton: {
          style: {
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            borderTopWidth: '2px',
            borderBottomWidth: '2px',
            borderLeftWidth: '2px',
            borderRightWidth: '2px',
            borderTopStyle: 'solid',
            borderBottomStyle: 'solid',
            borderLeftStyle: 'solid',
            borderRightStyle: 'solid',
            borderTopColor: '#123d35',
            borderBottomColor: '#123d35',
            borderLeftColor: '#123d35',
            borderRightColor: '#123d35',
            fontWeight: 700,
            letterSpacing: '0.02em',
            paddingLeft: '20px',
            paddingRight: '20px',
          },
        },
      }}
    >
      {children}
    </Button>
  )
}

function ProjectArt({ type }: { type: string }) {
  if (type === 'orbit') {
    return (
      <div className="project-art halftone-art" aria-hidden="true">
        <div className="orbit-ring" />
        <Satellite className="relative z-10 h-16 w-16 -rotate-12 text-ink md:h-24 md:w-24" strokeWidth={1.4} />
        <div className="absolute bottom-5 right-5 font-mono text-xs uppercase tracking-[.2em]">Telemetry / online</div>
      </div>
    )
  }
  if (type === 'terminal') {
    return (
      <div className="project-art halftone-art" aria-hidden="true">
        <TerminalSquare className="relative z-10 h-24 w-24 text-ink md:h-32 md:w-32" strokeWidth={1.2} />
        <span className="absolute left-6 top-6 font-display text-5xl text-cream/80">{'>_'}</span>
        <span className="absolute bottom-6 right-6 font-mono text-xs uppercase tracking-[.2em]">push · pop · run</span>
      </div>
    )
  }
  return (
    <div className="project-art halftone-art gap-3" aria-hidden="true">
      <div className="ticket -rotate-6 bg-coral">+10</div>
      <div className="ticket translate-y-5 rotate-6 bg-cyan">★</div>
      <div className="ticket -rotate-3 bg-ink text-cream">R</div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <a href="#top" className="font-display text-xl tracking-[-.05em]" aria-label="Ruben Sanchez, home">RS<span className="text-coral">.</span></a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {nav.map((item) => <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>)}
            <a className="nav-link" href="https://www.linkedin.com/in/ruben-sanchez-3a643917a/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight className="inline h-4 w-4" /></a>
            <a className="nav-link" href="mailto:ruben.e.sanchez.a@gmail.com">Say hello <ArrowUpRight className="inline h-4 w-4" /></a>
          </nav>
          <button className="grid h-10 w-10 place-items-center border-2 border-ink md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open navigation">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <Drawer
        isOpen={menuOpen}
        autoFocus
        onClose={() => setMenuOpen(false)}
        anchor={ANCHOR.right}
        overrides={{
          DrawerBody: { style: { margin: '0', padding: '32px', backgroundColor: '#28aeb9' } },
          DrawerContainer: { style: { backgroundColor: '#28aeb9', width: '88vw' } },
          Close: { style: { display: 'none' } },
        }}
      >
        <div className="flex items-center justify-between border-b-2 border-ink pb-5">
          <span className="font-display text-xl">INDEX</span>
          <button className="grid h-10 w-10 place-items-center border-2 border-ink" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X /></button>
        </div>
        <nav className="mt-12 flex flex-col" aria-label="Mobile navigation">
          {nav.map((item, index) => (
            <a key={item.href} className="border-b-2 border-ink py-5 font-display text-4xl uppercase" href={item.href} onClick={() => setMenuOpen(false)}>
              <span className="mr-4 font-mono text-sm">0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex gap-3">
          <a className="social-link" href="https://github.com/Ruben1729" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a className="social-link" href="https://www.linkedin.com/in/ruben-sanchez-3a643917a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a className="social-link" href="mailto:ruben.e.sanchez.a@gmail.com" aria-label="Email"><Mail /></a>
        </div>
      </Drawer>

      <main id="top">
        <section className="relative mx-auto grid min-h-[860px] max-w-[1440px] border-x-0 border-ink pt-[72px] lg:grid-cols-[1.08fr_.92fr] lg:border-x-2">
          <div className="relative flex flex-col justify-between px-5 py-14 lg:px-12 lg:py-20">
            <div>
                <p className="mb-8 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[.16em] md:text-sm">
                <span className="h-3 w-3 rounded-full bg-coral ring-2 ring-ink ring-offset-2 ring-offset-cream" /> Senior systems designer & hardware tinkerer
              </p>
              <h1 className="max-w-4xl font-display text-[clamp(4rem,9vw,8.6rem)] uppercase leading-[.82] tracking-[-.075em]">
                Software<span className="text-coral">,</span><br />
                <span className="print-offset" data-text="systems">systems</span><br />
                & small<br />machines<span className="text-cyan">.</span>
              </h1>
            </div>
            <div className="mt-14 grid items-end gap-8 md:grid-cols-[1fr_auto]">
              <p className="max-w-lg text-lg leading-relaxed md:text-xl">
                I’m Ruben. I build thoughtful products for the web and occasionally disappear into a pile of boards, wires, and stubborn firmware.
              </p>
              <div className="flex flex-wrap gap-3">
                <ExternalButton href="#work">See the work <ArrowDownRight className="ml-2 h-5 w-5" /></ExternalButton>
                <ExternalButton href="https://github.com/Ruben1729" kind={KIND.secondary}><Github className="mr-2 h-5 w-5" /> GitHub</ExternalButton>
              </div>
            </div>
          </div>
          <div className="relative min-h-[560px] overflow-hidden border-t-2 border-ink bg-cyan lg:min-h-0 lg:border-l-2 lg:border-t-0">
            <div className="absolute inset-0 halftone" />
            <div className="absolute left-5 top-5 z-10 border-2 border-ink bg-cream px-3 py-2 font-mono text-[11px] uppercase tracking-[.18em] shadow-[4px_4px_0_#123d35]">Fig. 01 / At the bench</div>
            <img src="/images/workbench-hero-v3.png" alt="Screen-print portrait of Ruben holding satellite hardware in a cleanroom" className="h-full min-h-[560px] w-full object-cover object-center mix-blend-multiply" />
            <span className="absolute bottom-6 right-6 z-10 font-display text-8xl text-cream/70">RS</span>
          </div>
        </section>

        <div className="ticker border-y-2 border-ink bg-coral py-4" aria-label="Areas of practice">
          <div className="ticker-track font-display text-lg uppercase tracking-[-.02em]">
            <span>Web products ✦ Embedded systems ✦ TypeScript ✦ C++ ✦ Tiny computers ✦ Big ideas ✦&nbsp;</span>
            <span aria-hidden="true">Web products ✦ Embedded systems ✦ TypeScript ✦ C++ ✦ Tiny computers ✦ Big ideas ✦&nbsp;</span>
          </div>
        </div>

        <section id="work" className="scroll-mt-20 border-b-2 border-ink bg-paper py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="mb-14 flex flex-col justify-between gap-6 border-b-2 border-ink pb-8 md:flex-row md:items-end">
              <div>
                <p className="section-kicker">01 / Selected work</p>
                <h2 className="section-title">Things I’ve made.</h2>
              </div>
              <p className="max-w-md text-base leading-relaxed md:text-right">A few projects from the overlap of product thinking, systems programming, and curiosity.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="group flex min-h-[620px] flex-col border-2 border-ink bg-cream transition-transform duration-200 hover:-translate-y-1 hover:shadow-print">
                  <ProjectArt type={project.art} />
                  <div className="flex flex-1 flex-col border-t-2 border-ink p-6">
                    <div className="mb-8 flex items-center justify-between font-mono text-xs uppercase tracking-[.12em]">
                      <span>{project.number}</span><span>{project.type}</span>
                    </div>
                    <h3 className="mb-4 font-display text-4xl uppercase tracking-[-.04em]">{project.title}</h3>
                    <p className="mb-6 leading-relaxed">{project.description}</p>
                    <div className="mb-8 flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Tag key={tag} closeable={false} hierarchy={HIERARCHY.secondary} overrides={{ Root: { style: { borderColor: '#123d35', color: '#123d35', backgroundColor: 'transparent' } } }}>{tag}</Tag>
                      ))}
                    </div>
                    <a href={project.href} target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-between border-t-2 border-ink pt-5 font-bold uppercase tracking-wide">
                      View project <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-b-2 border-ink bg-ink text-cream">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <div className="relative min-h-[500px] overflow-hidden border-b-2 border-cream/40 p-8 lg:min-h-[760px] lg:border-b-0 lg:border-r-2 lg:p-12">
              <div className="absolute inset-0 dark-halftone" />
              <div className="relative z-10">
                <p className="section-kicker text-coral">02 / About me</p>
                <h2 className="max-w-xl font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[.88] tracking-[-.06em]">Between the browser and the bench.</h2>
              </div>
              <div className="absolute bottom-8 right-8 z-10 h-44 w-44 rounded-full border-[22px] border-coral md:h-64 md:w-64">
                <div className="absolute inset-6 rounded-full border-2 border-cyan" />
                <div className="absolute -left-8 top-1/2 h-2 w-[calc(100%+4rem)] -rotate-12 bg-cream" />
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 lg:p-12">
              <div className="max-w-xl space-y-6 text-xl leading-relaxed md:text-2xl">
                <p>I like software with edges you can feel: interfaces that make sense, systems that explain themselves, and tiny computers doing surprisingly useful things.</p>
                <p className="text-cyan">My background crosses computer science, mechanical engineering, web products, embedded systems, and teaching.</p>
                <p>That mix keeps me close to both the person using the thing and the machinery making it work.</p>
              </div>
              <div className="mt-16 grid grid-cols-2 border-l border-t border-cream/40">
                {[['Code', 'React / TypeScript'], ['Systems', 'C++ / FreeRTOS'], ['Hardware', 'Arduino / electronics'], ['Mode', 'Curious / hands-on']].map(([label, value]) => (
                  <div key={label} className="border-b border-r border-cream/40 p-5">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[.18em] text-coral">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 border-b-2 border-ink bg-cyan py-24 lg:py-32">
          <div className="mx-auto max-w-[1160px] px-5 lg:px-10">
            <p className="section-kicker">03 / Experience</p>
            <h2 className="section-title mb-16">A little field history.</h2>
            <div className="border-t-2 border-ink">
              {experience.map((item, index) => (
                <article key={`${item.company}-${item.role}`} className="grid gap-3 border-b-2 border-ink py-7 md:grid-cols-[80px_1fr_1fr_1.5fr] md:items-center">
                  <span className="font-mono text-xs">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-xl uppercase">{item.company}</h3>
                  <p className="font-semibold">{item.role}</p>
                  <div className="flex items-start justify-between gap-6"><p>{item.detail}</p><span className="shrink-0 font-mono text-xs uppercase">{item.date}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream px-5 py-24 text-center lg:py-36">
          <p className="section-kicker">04 / Open channel</p>
          <h2 className="mx-auto mb-8 max-w-5xl font-display text-[clamp(3.5rem,8vw,8rem)] uppercase leading-[.84] tracking-[-.07em]">Have a peculiar problem?</h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed">The best projects usually start with “I wonder if…” Tell me what you’re working on.</p>
          <ExternalButton href="mailto:ruben.e.sanchez.a@gmail.com">Start a conversation <Mail className="ml-2 h-5 w-5" /></ExternalButton>
        </section>
      </main>

      <footer className="border-t-2 border-ink bg-coral">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-5 py-8 md:flex-row md:items-center lg:px-10">
          <p className="font-display text-xl uppercase">Ruben Sanchez © {new Date().getFullYear()}</p>
          <p className="font-mono text-[10px] uppercase tracking-[.14em]">Designed with dots, ink & stubborn optimism.</p>
          <div className="flex gap-3">
            <a className="social-link" href="https://github.com/Ruben1729" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a className="social-link" href="https://www.linkedin.com/in/ruben-sanchez-3a643917a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a className="social-link" href="mailto:ruben.e.sanchez.a@gmail.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
