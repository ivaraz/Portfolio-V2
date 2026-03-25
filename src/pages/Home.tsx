import TitledCard from "../components/TitledCard";

const Rifa = "/assets/photos/Rifa.jpg";

export default function Home() {
  return (
    <section
      className="
        min-h-screen w-full transition-colors duration-300
        flex flex-col items-center justify-center
        lg:flex-row-reverse lg:justify-around
      "
    >
      {/* Photo Section */}
      <div className="w-full max-w-sm mb-6 lg:mb-0">
        <TitledCard
          imageSrc={Rifa}
          altText="Muhammad Rifa"
          captionText="Orang Ganteng"
          containerHeight="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent
        />
      </div>

      {/* Text Section */}
      <div
        data-aos="fade-left"
        className="flex flex-col gap-3 lg:gap-5 text-center lg:text-left"
      >
        <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
          <span className="block text-3xl lg:text-4xl text-slate-800 dark:text-white">
            Hello, I am
          </span>
          <span className="block text-slate-800 dark:text-white">
            Muhammad{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Rifa
            </span>
          </span>
          <span className="block text-slate-800 dark:text-white">
            Maulana{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Aziz
            </span>
          </span>
        </h1>

        <p className="text-md lg:text-xl font-semibold">
          Frontend Developer | Informatics Student
        </p>

        <i className="text-gray-500 dark:text-gray-400">
          &quot;Building clean, scalable, and user-focused web interfaces.&quot;
        </i>
      </div>
    </section>
  );
}
