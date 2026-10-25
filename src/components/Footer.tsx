export default function Footer() {
  return (
    <div className="relative z-10 bottom-0">
      <div className="flex font-semibold py-10 lg:py-5 bg-transparent w-full lg:h-16 text-slate-800 dark:text-gray-300 flex-col gap-4 lg:flex-row lg:justify-around justify-center items-center transition-colors duration-300">
        <div className="flex flex-col items-center lg:items-start text-sm lg:text-md lg:mr-10 lg:ml-28 min-w-fit">
          <span>Designed &amp; Developed by</span>
          <span>Muhammad Rifa Maulana Aziz</span>
        </div>
        <span className="w-[3rem] lg:w-auto lg:flex-1 h-1.5 lg:h-0.5 bg-slate-400 dark:bg-pink-500/30 lg:mx-4"></span>
        <div className="lg:mr-28 text-sm lg:ml-10 min-w-fit">
          <span>&copy; Copyright 2026</span>
        </div>
      </div>
    </div>
  );
}
