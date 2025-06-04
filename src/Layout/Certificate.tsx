import DataCertificates from "../data/DataCertificates";
import CertifCard from "../components/CertifCard";

export default function Certificate() {
  return (
    <div
      id="certificate"
      className="flex flex-col gap-10 mt-20 justify-center items-center w-screen min-h-screen bg-white"
    >
      <h1 data-aos="fade-down" className="text-3xl lg:text-4xl font-semibold">
        Certificate
      </h1>
      <div className="min-h grid grid-cols-1 lg:grid-cols-3 gap-5">
        {DataCertificates.map((data, index) => (
          <CertifCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
