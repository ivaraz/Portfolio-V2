import edu from "../data/DataEdu";

export default function Education() {
  return (
    <div className="relative flex flex-col gap-0 pl-5">
      {/* Vertical timeline rail */}
      <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-slate-400 via-slate-300/30 to-transparent dark:from-pink-500 dark:via-pink-500/30" />

      {edu.map((data, index) => (
        <div
          key={index}
          className="relative flex flex-col gap-0 pb-10 last:pb-0"
        >
          {/* Timeline dot */}
          <div className="absolute -left-5 top-5 w-2.5 h-2.5 rounded-full bg-slate-400 ring-4 ring-slate-400/20 dark:bg-pink-500 dark:ring-pink-500/20 translate-x-[0.5px]" />

          <div className="ml-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 dark:backdrop-blur-md p-5 shadow-sm hover:border-slate-300 dark:hover:border-pink-500/40 hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              {/* Logo */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src={data.logo}
                  alt={data.school}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold dark:text-white text-slate-800 leading-snug">
                      {data.school}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      {data.major}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{data.year}</p>
                  </div>

                  {/* Status badge */}
                  <span
                    className={`text-[0.7rem] px-2.5 py-1 rounded-full font-medium shrink-0 ${
                      data.status === "current"
                        ? "bg-slate-100 text-slate-600 border border-slate-300 dark:bg-pink-500/15 dark:text-pink-300 dark:border-pink-500/25"
                        : "bg-emerald-100 text-emerald-700 border border-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/25"
                    }`}
                  >
                    {data.status === "current" ? "Studying" : "Graduated"}
                  </span>
                </div>

                {data.description && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                    {data.description}
                  </p>
                )}

                {data.gpa && (
                  <div className="mt-3">
                    <span className="text-xs px-3 py-1 rounded-full dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md dark:text-white bg-slate-100 border border-slate-200 text-slate-600">
                      GPA: {data.gpa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
