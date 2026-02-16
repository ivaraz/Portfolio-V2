export default function Footer() {
  return (
    <div className="relative z-10 bottom-0">
      <div className="flex font-semibold py-20 lg:py-5 bg-white w-full h-16 text-black flex-col gap-4 lg:flex-row lg:justify-around justify-center items-center">
        <div className="flex flex-col items-center lg:items-start text-sm lg:text-md lg:mr-10 lg:ml-28 min-w-fit">
          <span>Designed &amp; Developed by</span>
          <span>Muhammad Rifa Maulana Aziz</span>
        </div>
        <span className="w-[3rem] lg:w-auto lg:flex-1 h-1.5 lg:h-0.5 bg-black lg:mx-4"></span>
        <div className="lg:mr-28 text-sm lg:ml-10 min-w-fit">
          <span>&copy; Copyright 2026</span>
        </div>
      </div>
    </div>
  );
}
