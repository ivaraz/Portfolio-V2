import DataCertificates from "../data/DataCertificates";
import CertifCard from "../components/CertifCard";

export default function Certificate() {
  return (
    <section
      id="certificate"
      className="
        min-h-screen w-full bg-white
        flex flex-col items-center justify-center
        gap-10 py-20
      "
    >
      <h1 data-aos="fade-down" className="text-3xl lg:text-4xl font-semibold">
        Certificate
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {DataCertificates.map((data) => (
          <CertifCard key={data.title} {...data} />
        ))}
      </div>
    </section>
  );
}
