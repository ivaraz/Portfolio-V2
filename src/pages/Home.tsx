import TitledCard from "../components/TitledCard";

const Rifa = "/assets/photos/1.png";

export default function Home() {
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden transition-colors duration-300
        flex items-center justify-center
        px-5 sm:px-6 pt-24 pb-16 lg:pt-0 lg:pb-0
      "
    >
      {/* Background Text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center overflow-hidden select-none"
      >
        <div className="animate-marquee-right flex w-max">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              {[0, 1, 2].map((item) => (
                <span
                  key={item}
                  className="
                    mx-6 whitespace-nowrap font-extrabold uppercase leading-none tracking-[0.02em]
                    text-[clamp(3rem,17vw,18rem)]
                    bg-gradient-to-b from-white via-slate-300 to-slate-500
                    bg-clip-text text-transparent
                    [-webkit-text-stroke:1px_rgba(148,163,184,0.55)]
                    dark:from-pink-400 dark:via-pink-600 dark:to-black
                    dark:[-webkit-text-stroke:1px_rgba(244,114,182,0.55)]
                    dark:drop-shadow-[0_0_30px_rgba(236,72,153,0.25)]
                  "
                >
                  Portfolio
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Photo Section */}
      <div className="relative z-10 w-full max-w-[24rem] sm:max-w-[30rem] lg:max-w-[36rem]">
        {/* Mobile / tablet: above the photo, left aligned */}
        <div className="mb-3 xl:hidden">
          <span className="inline-block border-b border-slate-400/70 pb-2 text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:border-slate-500/70 dark:text-slate-400">
            Presented by : Muhammad Rifa
          </span>
        </div>

        {/* Desktop: left edge of the photo */}
        <span
          className="
            absolute right-full top-3/4 z-30 mr-6 hidden -translate-y-1/2 whitespace-nowrap
            border-b border-black font-bold pb-2 text-[10px] uppercase tracking-[0.2em]
            text-black dark:border-pink-700 dark:text-pink-600 xl:block
          "
        >
          Presented by : Muhammad Rifa Maulana Aziz
        </span>

        <div className="relative overflow-hidden rounded-[15px]">
          <TitledCard
            imageSrc={Rifa}
            altText="Muhammad Rifa"
            captionText="Orang Ganteng"
            containerHeight="clamp(22rem, 95vw, 42rem)"
            containerWidth="100%"
            imageHeight="clamp(22rem, 95vw, 42rem)"
            imageWidth="120%"
            imagePosition="80% 0%"
            rotateAmplitude={0} // asalnya 12
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
          />

          {/* Bottom gradient to hide the cropped edge */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[35%]
              bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent
              dark:from-[#0f0f14] dark:via-[#0f0f14]/80
            "
          />
        </div>
      </div>
    </section>
  );
}
