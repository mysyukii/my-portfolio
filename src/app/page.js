import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const projects = [
    {
      title: "Repair Booking App",
      description:
        "A service booking app where users can schedule repairs, track booking status, and manage requests with a clean mobile-first experience.",
      tech: ["Flutter", "Supabase", "UI/UX"],
      live: "#",
      github: "#",
    
    },
  ];

  const skills = [
    "Flutter",
    "Dart",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Supabase",
    "Firebase",
    "UI/UX Design",
    "Responsive Design",
    "Git & GitHub",
  ];

  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white scroll-smooth min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-bold tracking-wide">
            Brixton
          </h1>

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a
              href="#about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-blue-400 transition duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
          <Image
            src="/Brixton.png"
            alt="Brixton profile picture"
            fill
            sizes="(max-width: 768px) 128px, 160px"
            className="rounded-full object-cover border-4 border-white shadow-lg hover:scale-105 transition duration-300"
            priority
          />
        </div>

        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
          My Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Brixton Esplanada
        </h1>

        <p className="text-sm text-yellow-400 mt-2">
           🚧 Work in progress
        </p>
        
        <p className="max-w-2xl text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Flutter and React developer building clean, modern, and user-focused
          digital experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold transition duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-400 px-6 py-3 rounded-2xl font-semibold hover:border-blue-400 hover:bg-white hover:text-black transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 max-w-5xl mx-auto scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 border border-gray-800 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition duration-300">
          <p className="text-gray-300 text-lg leading-8 text-center">
            I enjoy building apps and web interfaces that are clean, useful, and
            easy to use. My focus is on combining strong UI design with practical
            functionality, whether it is a booking app, dashboard, or modern
            frontend experience. I like creating projects that do not just look
            good, but also solve real problems.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 py-20 max-w-6xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="max-w-xl mx-auto">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border border-gray-800 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/30 transition duration-300"
    >
              <div className="h-44 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 mb-6 flex items-center justify-center text-gray-300 text-sm">
                Project Preview
              </div>

              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-400 text-sm leading-7 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-black/40 border border-gray-700 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="border border-gray-500 px-4 py-2 rounded-xl text-sm font-semibold hover:border-blue-400 hover:text-white transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="px-6 py-20 max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-3 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl text-gray-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-20 max-w-4xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact
        </h2>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 border border-gray-800 text-center hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition duration-300">
          <p className="text-gray-400 text-lg mb-8 leading-8">
            Want to work together or build something cool? Reach out through
            email or connect with me on GitHub and LinkedIn.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:neroxsacre01@gmail.com"
              className="flex items-center gap-3 text-sm bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold transition duration-300"
            >
              <FaEnvelope />
              Email Me
            </a>

            <a
              href="https://github.com/mysyukii"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm border border-gray-400 px-6 py-3 rounded-2xl font-semibold hover:border-blue-400 hover:bg-white hover:text-black transition duration-300"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/brixton-esplanada-509873346/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm border border-gray-400 px-6 py-3 rounded-2xl font-semibold hover:border-blue-400 hover:bg-white hover:text-black transition duration-300"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 Brixton. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}