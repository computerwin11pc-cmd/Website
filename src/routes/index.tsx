import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import avatar from "@/assets/tadeas-avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tadeas — Developer, Creator, Builder" },
      {
        name: "description",
        content:
          "Portfolio of Tadeas — developer building games, web apps, and ESP/Arduino hardware projects. Explore projects, skills, and get in touch.",
      },
      { property: "og:title", content: "Tadeas — Developer, Creator, Builder" },
      {
        property: "og:description",
        content:
          "Games, web apps, and IoT hardware — a cyber-styled portfolio by Tadeas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  "HTML", "CSS", "JavaScript", "Python", "Godot", "GDScript",
  "Arduino", "ESP32", "ESP8266", "GitHub",
];

const projects = [
  {
    icon: "🎮",
    title: "Godot Games",
    desc: "3D game prototypes and experiments built in Godot with GDScript.",
    tags: ["Godot", "GDScript", "3D"],
    accent: "cyan",
  },
  {
    icon: "📱",
    title: "Attendance App",
    desc: "Custom mobile-friendly app for tracking school attendance.",
    tags: ["JavaScript", "Web", "UI"],
    accent: "magenta",
  },
  {
    icon: "🤖",
    title: "ESP Projects",
    desc: "ESP8266 & ESP32 boards driving OLED displays and IoT sensors.",
    tags: ["ESP32", "IoT", "OLED"],
    accent: "purple",
  },
  {
    icon: "🔧",
    title: "Arduino Projects",
    desc: "Sensors, small robots, and electronics tinkering with Arduino.",
    tags: ["Arduino", "Robotics", "C++"],
    accent: "cyan",
  },
];

function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>(".reveal") ?? [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-60" aria-hidden />
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[oklch(0.7_0.3_330/0.15)] blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.78_0.19_200/0.15)] blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <Nav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-[oklch(0.78_0.19_200/0.15)] py-8 text-center text-sm text-muted-foreground font-mono">
        <span className="text-neon-cyan">$</span> © {new Date().getFullYear()} Tadeas — built with{" "}
        <span className="text-neon-magenta">♥</span> and neon.
      </footer>
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass px-5 py-3">
        <a href="#home" className="font-display text-xl font-black gradient-text animate-gradient">
          T<span className="text-neon-cyan">.</span>
        </a>
        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 font-mono text-sm text-muted-foreground transition hover:bg-[oklch(0.78_0.19_200/0.08)] hover:text-neon-cyan"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-[oklch(0.78_0.19_200/0.4)] px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-neon-cyan transition hover:glow-cyan"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[oklch(0.78_0.19_200)]" />
            available for projects
          </div>
          <h1 className="font-display text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            <span className="gradient-text animate-gradient">Tadeas</span>
          </h1>
          <p className="mt-6 font-mono text-lg text-muted-foreground">
            <span className="text-neon-cyan">&gt;</span> Developer{" "}
            <span className="text-neon-magenta">•</span> Creator{" "}
            <span className="text-neon-magenta">•</span> Builder
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            Creating <span className="text-neon-cyan text-glow-cyan">games</span>,{" "}
            <span className="text-neon-magenta text-glow-magenta">apps</span>, and hardware
            projects. Exploring the edge between code and electronics.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-[oklch(0.78_0.19_200)] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-[oklch(0.12_0.02_270)] transition hover:scale-105 glow-cyan"
            >
              View Projects
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[oklch(0.7_0.3_330/0.5)] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-neon-magenta transition hover:bg-[oklch(0.7_0.3_330/0.08)] hover:glow-magenta"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square overflow-hidden rounded-2xl neon-border animate-pulse-glow">
            <img
              src={avatar}
              alt="Portrait of Tadeas in cyber neon lighting"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.03_270)] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg glass px-3 py-2 font-mono text-xs">
              <div className="text-neon-cyan">
                status: <span className="text-foreground">online</span>
              </div>
              <div className="text-neon-magenta">
                loc: <span className="text-foreground">terminal_01</span>
              </div>
            </div>
            <div className="scanline absolute inset-0" />
          </div>
          <div className="absolute -left-3 -top-3 rounded-md glass px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neon-cyan">
            ./tadeas
          </div>
          <div className="absolute -bottom-3 -right-3 rounded-md glass px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neon-magenta">
            v.2026
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="reveal mb-14 max-w-2xl">
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
        // {tag}
      </div>
      <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  const interests = [
    { k: "Game development", v: "Godot 3D, prototypes" },
    { k: "Web applications", v: "Interactive, fast" },
    { k: "Arduino & ESP", v: "IoT, sensors, OLED" },
    { k: "Electronics", v: "Solder, wire, build" },
  ];
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="about_me" title="Hey — I'm Tadeas." />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="reveal">
            <p className="text-lg leading-relaxed text-foreground/85">
              I'm a developer who loves the space where{" "}
              <span className="text-neon-cyan">software</span> meets{" "}
              <span className="text-neon-magenta">hardware</span>. I build games, small web
              tools, and hook up microcontrollers to blink, beep, and talk to the internet.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70">
              I learn by making. Right now I'm exploring 3D game dev in Godot, building an
              attendance app, and wiring up ESP32 boards with OLED displays.
            </p>
          </div>
          <div className="reveal grid gap-3">
            {interests.map((i) => (
              <div
                key={i.k}
                className="group flex items-center justify-between rounded-xl glass px-5 py-4 transition hover:border-[oklch(0.78_0.19_200/0.5)] hover:glow-cyan"
              >
                <div>
                  <div className="font-display text-sm font-bold tracking-wide">{i.k}</div>
                  <div className="font-mono text-xs text-muted-foreground">{i.v}</div>
                </div>
                <div className="font-mono text-neon-cyan opacity-0 transition group-hover:opacity-100">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          tag="projects"
          title="Things I've built."
          sub="A mix of games, apps, and blinky electronics — always shipping something small."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-2xl glass p-7 transition hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className={`absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-40 blur-3xl transition group-hover:opacity-80 ${
                  p.accent === "magenta"
                    ? "bg-[oklch(0.7_0.3_330/0.4)]"
                    : p.accent === "purple"
                      ? "bg-[oklch(0.65_0.28_295/0.4)]"
                      : "bg-[oklch(0.78_0.19_200/0.4)]"
                }`}
              />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="text-4xl">{p.icon}</div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    0{i + 1} / 0{projects.length}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[oklch(0.78_0.19_200/0.25)] bg-[oklch(0.78_0.19_200/0.06)] px-2.5 py-1 font-mono text-[11px] text-neon-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="stack" title="Tech I use." />
        <div className="reveal flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <div
              key={s}
              className="group relative rounded-xl glass px-5 py-3 font-mono text-sm transition hover:-translate-y-1 hover:text-neon-cyan hover:glow-cyan"
            >
              <span className="mr-2 text-neon-magenta">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader tag="contact" title="Let's build something." />
        <div className="reveal relative overflow-hidden rounded-3xl glass p-10 sm:p-14">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-[oklch(0.78_0.19_200/0.3)] blur-3xl" />
          <div className="relative">
            <p className="font-mono text-sm text-neon-cyan">&gt; open channel_</p>
            <h3 className="mt-4 font-display text-3xl font-black gradient-text animate-gradient sm:text-5xl">
              Say hi.
            </h3>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Got an idea, project, or just want to chat about games, ESP boards, or code?
              Send a signal.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-[oklch(0.78_0.19_200/0.3)] p-5 transition hover:border-[oklch(0.78_0.19_200/0.6)] hover:glow-cyan"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  github
                </div>
                <div className="mt-1 font-display font-bold text-neon-cyan">@tadeas ↗</div>
              </a>
              <a
                href="#"
                className="group rounded-xl border border-[oklch(0.7_0.3_330/0.3)] p-5 transition hover:border-[oklch(0.7_0.3_330/0.6)] hover:glow-magenta"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  discord
                </div>
                <div className="mt-1 font-display font-bold text-neon-magenta">
                  tadeas#0001
                </div>
              </a>
              <a
                href="mailto:hello@tadeas.dev"
                className="group rounded-xl border border-[oklch(0.65_0.28_295/0.3)] p-5 transition hover:border-[oklch(0.65_0.28_295/0.6)] hover:shadow-[0_0_20px_oklch(0.65_0.28_295/0.4)]"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  email
                </div>
                <div className="mt-1 font-display font-bold text-[oklch(0.75_0.22_295)]">
                  hello@tadeas.dev
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}