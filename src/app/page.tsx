import {
  Download,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Mountain,
  TrendingUp,
  Cpu,
  PenLine,
  FolderGit2,
  CircleCheckBig,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Typewriter from "@/components/Typewriter";
import {
  profile,
  about,
  experience,
  highlights,
  skills,
  projects,
  education,
  achievements,
  interests,
} from "@/data/profile";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{kicker}</p>
      <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

const card = "rounded-2xl border border-line bg-panel";
const interestIcons = [Mountain, TrendingUp, Cpu, PenLine];

export default function Page() {
  const contactHref = profile.links.email ? `mailto:${profile.links.email}` : profile.links.linkedin;

  return (
    <>
      <Sidebar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          {/* HOME */}
          <section id="home" className="flex min-h-[calc(100vh-6rem)] items-center py-12 lg:min-h-screen">
            <div className="rise grid w-full items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">{profile.name}</h1>
                <p className="mt-3 text-lg font-medium text-accent sm:text-xl">
                  {profile.title.join("  |  ")}
                </p>
                <p className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                  {profile.typingPrefix} <Typewriter words={profile.typingWords} /> {profile.typingSuffix}
                </p>
                <div className="mt-6 max-w-2xl space-y-4 text-[17px] leading-relaxed text-muted">
                  {profile.intro.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {profile.cv && (
                    <a
                      href={profile.cv}
                      download
                      className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-accent-ink transition hover:opacity-90"
                    >
                      <Download size={18} /> Download CV
                    </a>
                  )}
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold transition ${
                      profile.cv
                        ? "border-2 border-accent text-accent hover:bg-accent-soft"
                        : "bg-accent text-accent-ink hover:opacity-90"
                    }`}
                  >
                    <Mail size={18} /> Contact Me
                  </a>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-12 w-12 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-12 w-12 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent"
                  >
                    <GitHubIcon />
                  </a>
                </div>
                <p className="mt-6 flex items-center gap-2 text-sm text-muted">
                  <MapPin size={16} /> {profile.location}
                </p>
              </div>

              <div className="relative mx-auto w-56 sm:w-64 md:w-72">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl border-4 border-accent bg-accent-soft">
                  {profile.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-7xl font-extrabold text-accent">
                      {profile.initials}
                    </div>
                  )}
                </div>
                {profile.openToWork && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-ink shadow-lg">
                    Open to Work
                  </span>
                )}
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="py-16">
            <SectionTitle kicker="About" title="Science meets business" />
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
              <div className="space-y-4 text-[17px] leading-relaxed text-muted">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <dl className={`${card} divide-y divide-line`}>
                {about.facts.map((f) => (
                  <div key={f.label} className="flex justify-between gap-4 px-5 py-3.5">
                    <dt className="text-sm text-muted">{f.label}</dt>
                    <dd className="text-right text-sm font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {highlights.map((h) => (
                <div key={h.label} className={`${card} p-5`}>
                  <p className="text-2xl font-extrabold text-accent sm:text-3xl">{h.value}</p>
                  <p className="mt-1 text-sm leading-snug text-muted">{h.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="py-16">
            <SectionTitle kicker="Experience" title="Where I've worked" />
            <ol className="relative space-y-6 border-l-2 border-line pl-6 sm:pl-8">
              {experience.map((job) => (
                <li key={job.org + job.role} className="relative">
                  <span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-bg bg-accent sm:-left-[41px]" />
                  <div className={`${card} p-6`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-bold">
                        {job.role} <span className="text-accent">· {job.org}</span>
                      </h3>
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-2.5">
                          <CircleCheckBig size={16} className="mt-1 shrink-0 text-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* SKILLS */}
          <section id="skills" className="py-16">
            <SectionTitle kicker="Skills" title="What I work with" />
            <div className="grid gap-5 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group} className={`${card} p-6`}>
                  <h3 className="font-bold">{s.group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <span key={i} className="rounded-md border border-line px-2.5 py-1 text-sm text-muted">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="py-16">
            <SectionTitle kicker="Projects" title="Things I've built" />
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((p) => (
                <article key={p.name} className={`${card} flex flex-col p-6 transition hover:border-accent`}>
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                    <FolderGit2 size={22} />
                  </div>
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-4 text-sm font-semibold">
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                      <GitHubIcon size={16} /> Code
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </article>
              ))}
              <div className={`grid place-items-center rounded-2xl border-2 border-dashed border-line p-6 text-center text-muted`}>
                <p className="text-sm">More forecasting & analytics projects coming soon.</p>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education" className="py-16">
            <SectionTitle kicker="Education" title="Foundations in pharmacology" />
            <div className="grid gap-5 md:grid-cols-2">
              {education.map((e) => (
                <div key={e.degree} className={`${card} p-6`}>
                  <p className="text-xs font-semibold text-accent">{e.period}</p>
                  <h3 className="mt-1 text-lg font-bold">{e.degree}</h3>
                  <p className="text-sm font-medium">{e.school}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{e.note}</p>
                </div>
              ))}
            </div>
            <div className={`${card} mt-5 p-6`}>
              <h3 className="flex items-center gap-2 font-bold">
                <Award size={18} className="text-accent" /> Achievements
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-2.5 text-[15px] text-muted">
                    <CircleCheckBig size={16} className="mt-1 shrink-0 text-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* BEYOND WORK */}
          <section id="beyond" className="py-16">
            <SectionTitle kicker="Beyond Work" title="When I'm not forecasting" />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {interests.map((it, i) => {
                const Icon = interestIcons[i % interestIcons.length];
                return (
                  <div key={it.title} className={`${card} p-6`}>
                    <Icon size={22} className="text-accent" />
                    <h3 className="mt-3 font-bold">{it.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{it.text}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-16 pb-24">
            <div className="rounded-3xl bg-accent px-6 py-12 text-center text-accent-ink sm:px-12">
              <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s talk forecasting</h2>
              <p className="mx-auto mt-3 max-w-xl opacity-90">
                Open to conversations about pharma forecasting, commercial analytics and consulting.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={contactHref}
                  target={profile.links.email ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-panel px-5 py-3 font-semibold text-ink transition hover:opacity-90"
                >
                  {profile.links.email ? <Mail size={18} /> : <LinkedInIcon />}
                  {profile.links.email ? "Email me" : "Message me on LinkedIn"}
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-current px-5 py-3 font-semibold transition hover:opacity-80"
                >
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
