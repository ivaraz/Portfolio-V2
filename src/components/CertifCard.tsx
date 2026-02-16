interface CertifCardProps {
  image: string;
  title?: string;
  description?: string;
}

export default function CertifCard({
  image,
  title,
  description,
}: CertifCardProps) {
  return (
    <div
      data-aos="fade-up"
      className="
        group
        max-w-sm
        border-2 border-black
        p-3
        flex flex-col items-center gap-2
      "
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-60 lg:w-96 object-cover"
      />

      <p className="text-center font-semibold">{title}</p>

      <p
        className="
          text-gray-600 text-sm text-center
          opacity-0 max-h-0 overflow-hidden
          transition-all duration-300
          group-hover:opacity-100 group-hover:max-h-40
        "
      >
        {description}
      </p>
    </div>
  );
}
