export default function Certificate() {
  return (
    <div
      id="certificate"
      className="flex flex-col gap-10 justify-center items-center w-screen h-screen bg-white"
    >
      <h1 data-aos="fade-down" className="font-semibold">
        Certificate
      </h1>
      <div
        data-aos="fade-up"
        className="group max-w-[24rem] h-fit p-5 border-2 border-black"
      >
        <img
          src="/assets/certificate/sertif.jpg"
          className="w-[15rem] lg:w-96"
        ></img>
        <p className="text-center font-semibold">
          October Digital Creativity 2023
        </p>
        <i className="text-gray-600 w-[15rem] lg:w-[21rem] hidden group-hover:block group-hover:duration-1000">
          Lomba ini diselenggarakan pada bulan Agustus - September 2023 secara
          online, dan babak Final yang bertempat di SMK Mitra Industri MM2100
          Bekasi mendapat posisi ke-13 dari 26 tim
        </i>
      </div>
    </div>
  );
}
