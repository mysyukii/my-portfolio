"use client";

const skills = [
  "React",
  "Next.js",
  "Flutter",
  "Supabase",
  "Tailwind CSS",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "Responsive Design",
];

const project = {
  title: "Repair Booking App",
  description:
    "A mobile-first application I’m currently developing for repair service scheduling and request tracking. The project focuses on clean UI, smooth booking flow, and a practical experience for both customers and service providers.",
  tech: ["Flutter", "Supabase", "UI/UX"],
  status: "In Development",
  github: "",
  live: "",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <h1 className="text-lg font-semibold tracking-wide text-white">
            Brixton
          </h1>

          <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-20 text-center md:px-10 md:pt-28">
        <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
          🚧 Currently building a Repair Booking App with Flutter & Supabase
        </div>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Hi, I&apos;m <span className="text-blue-400">Brixton</span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
          I build modern web and mobile applications using React, Next.js,
          Flutter, and Supabase. I like creating clean, functional, and
          user-friendly digital experiences that actually solve real problems.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:scale-[1.02] hover:bg-blue-400"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:scale-[1.02] hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-500/5">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-400">
              About Me
            </p>
            <h3 className="mb-5 text-3xl font-semibold text-white">
              Building with purpose, not just vibes
            </h3>
            <p className="text-gray-300 leading-7">
              I&apos;m a developer focused on building practical applications
              that solve real-world problems. I enjoy working with modern tools
              like React, Flutter, and Supabase to create responsive, clean, and
              efficient user experiences.
            </p>
            <p className="mt-4 text-gray-300 leading-7">
              Right now, I&apos;m developing a repair booking application that
              lets users schedule services, track requests, and manage bookings
              more smoothly. Little by little, brick by brick — that&apos;s how
              real projects are built anyway.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/5">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-400">
              Current Focus
            </p>
            <h3 className="mb-5 text-3xl font-semibold text-white">
              What I&apos;m working on now
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-medium text-white">📱 Repair Booking App</p>
                <p className="mt-1 text-sm text-gray-400">
                  Mobile-first repair service scheduling and request tracking
                  app.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-medium text-white">⚙️ Tech Stack</p>
                <p className="mt-1 text-sm text-gray-400">
                  Flutter, Supabase, UI/UX design, responsive workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-medium text-white">🧩 In Progress</p>
                <p className="mt-1 text-sm text-gray-400">
                  Booking flow, request tracking, and service management system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-blue-400">
            Projects
          </p>
          <h3 className="text-3xl font-semibold md:text-4xl">
            Featured Work
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Honest work in progress beats fake polish every single time. This is
            the project I&apos;m actively building right now.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-blue-500/5 transition hover:-translate-y-1">
          <div className="grid md:grid-cols-2">
            {/* Preview */}
            <div className="flex min-h-[280px] items-center justify-center border-b border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:min-h-[360px] md:border-b-0 md:border-r">
              <div className="w-full rounded-2xl border border-white/10 bg-black/30 p-6 text-center">
                <div className="mb-4 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300">
                  🚧 UI in progress
                </div>
                <div className="rounded-xl border border-dashed border-white/15 bg-white/5 px-6 py-16 text-sm text-gray-400">
                  Screenshots coming soon
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 md:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h4 className="text-2xl font-semibold text-white">
                  {project.title}
                </h4>
                <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 leading-7">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-medium text-white">Current Goal</p>
                  <p className="mt-2 text-sm text-gray-400">
                    Refine the booking flow and connect service request handling.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-medium text-white">Next Step</p>
                  <p className="mt-2 text-sm text-gray-400">
                    Add screenshots, backend logic improvements, and polish the
                    user dashboard.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-400"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-gray-400">
                    Live demo coming soon
                  </span>
                )}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-gray-400">
                    Code available upon request
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-400">
            Skills
          </p>
          <h3 className="text-3xl font-semibold md:text-4xl">
            Tools I Work With
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-gray-200 transition hover:-translate-y-1 hover:bg-white/10"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-20"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/5 md:p-12">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>
          <h3 className="text-3xl font-semibold md:text-4xl">
            Let&apos;s build something solid
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400 leading-7">
            Open to opportunities, collaboration, and projects worth building.
            No fluff, no circus — just good work and good systems.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:neroxsacre01@gmail.com"
              className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400"
            >
              Email Me
            </a>

            <a
              href="https://github.com/mysyukii"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/brixton-esplanada-509873346/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500 md:px-10">
        © {new Date().getFullYear()} Brixton. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}