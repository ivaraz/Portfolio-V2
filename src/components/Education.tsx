import edu from "../data/DataEdu";

export default function Education() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">
        {edu.map((data, index) => (
          <div
            key={index}
            className="relative rounded-2xl border border-white/10 
            bg-white/5 backdrop-blur-md 
            p-5 sm:p-6 
            transition-all duration-300 
            hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/10"
          >
            {/* Accent Line */}
            <div
              className="absolute left-0 top-0 h-full w-1 
            bg-gradient-to-b from-red-500 to-transparent rounded-l-2xl"
            />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Icon */}
              <div className="flex items-center sm:items-center">
                <div className="p-3 rounded-xl bg-white/10">
                  <img
                    src={data.logo}
                    alt={`${data.school} logo`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {data.school}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">{data.major}</p>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {data.year}
                    </p>
                  </div>

                  {/* Badge */}
                  <span
                    className={`text-xs px-3 py-1 rounded-full w-fit
                    ${
                      data.status === "current"
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    }`}
                  >
                    {data.status === "current"
                      ? "Currently Studying"
                      : "Graduated"}
                  </span>
                </div>

                {/* Description */}
                {data.description && (
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                    {data.description}
                  </p>
                )}

                {/* GPA */}
                {data.gpa && (
                  <div className="mt-4">
                    <span
                      className="text-xs px-3 py-1 rounded-full 
                    bg-white/10 border border-white/10 text-slate-300"
                    >
                      GPA: {data.gpa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
