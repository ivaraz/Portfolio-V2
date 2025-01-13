export default function Footer() {
  return (
    <>
      {/*  Display on Desktop */}
      <div className="lg:flex hidden font-semibold py-20 lg:py-4 bg-white w-full h-16 text-black flex-col gap-4 lg:flex-row lg:justify-around justify-center items-center">
        <div className="flex flex-col items-center lg:items-start text-sm lg:text-md lg:mr-10 lg:ml-28 min-w-fit">
          <span>Designed & Developed by</span>
          <span>Muhammad Rifa Maulana Aziz</span>
        </div>
        <span className="w-[300rem] h-0.5 bg-black"></span>
        <div className="lg:mr-28 text-sm lg:ml-10 min-w-fit">
          <span>&copy; Copyright 2024</span>
        </div>
      </div>
      {/*  Display on Mobile */}
      <div className="lg:hidden flex font-semibold py-20 bg-white w-full h-16 text-black flex-col gap-4  justify-center items-center">
        <div className="flex flex-col items-center text-sm min-w-fit">
          <span>Designed & Developed by</span>
          <span>Muhammad Rifa Maulana Aziz</span>
        </div>
        <span className="w-[3rem] h-1.5 bg-black"></span>
        <div className="text-sm min-w-fit">
          <span>&copy; Copyright 2024</span>
        </div>
      </div>
    </>
  );
}
