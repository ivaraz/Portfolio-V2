import DataSos from "../data/DataSos";
import Education from "../components/Education";

const stats = [
  { value: "∞", label: "Learning & Improvements" },
  { value: "6+", label: "Dynamic Web Projects" },
  { value: "8+", label: "Certificates Earned" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen transition-colors duration-300"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* ── Left column ── */}
        <div data-aos="fade-right" className="flex flex-col gap-8">
          {/* Section tag */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-violet-500" />
            <span className="text-md tracking-[0.1em] uppercase text-violet-600 font-medium">
              About Me
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bai font-bold leading-tight">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Digital
            </span>{" "}
            Experiences
          </h1>

          <div className="flex flex-col gap-4 text-[0.95rem] text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
            <p>
              I am a{" "}
              <span className="text-slate-900 dark:text-white font-semibold dark:font-medium">
                Frontend Developer
              </span>{" "}
              and Informatics student at Suryakancana University with a strong
              passion for building modern and user-centered web applications. I
              enjoy transforming complex ideas into clean, intuitive, and
              efficient digital experiences.
            </p>
            <p>
              With a background in{" "}
              <span className="text-slate-900 dark:text-white font-semibold dark:font-medium">
                Computer &amp; Network Engineering
              </span>
              , I developed strong technical fundamentals that help me
              understand both system structure and frontend architecture. Today,
              I focus on building responsive, scalable, and maintainable web
              interfaces using modern technologies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center gap-1 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 dark:backdrop-blur-md px-3 py-5 shadow-sm hover:border-violet-300 dark:hover:border-violet-500/40 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl lg:text-3xl font-bold text-violet-600">
                  {s.value}
                </span>
                <span className="text-[0.7rem] text-slate-500 dark:text-slate-400 leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Social / Links */}
          <div className="grid grid-cols-2 gap-3">
            {DataSos.map((item, i) => (
              <a
                key={i}
                href={item.link}
                download={item.isDownload || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 dark:backdrop-blur-md text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-violet-400 dark:hover:border-violet-500/50 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all duration-300 group"
              >
                <span className="text-base text-violet-600 group-hover:scale-110 transition-transform duration-200">
                  {item.logo}
                </span>
                <span className="font-medium">{item.sosmed}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right column — Education ── */}
        <div data-aos="fade-left" className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-violet-500" />
            <span className="text-md tracking-[0.1em] uppercase text-violet-600 font-medium">
              Education
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bai font-bold leading-tight">
            Academic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Background
            </span>
          </h2>

          <Education />
        </div>
      </div>
    </section>
  );
}
