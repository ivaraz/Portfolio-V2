export default function CertifCard(props) {
    const {image, title, description} = props;
    return(
        <div
        data-aos="fade-up"
        className="group max-w-[24rem] h-fit p-5 border-2 border-black"
      >
        <img
          src={image}
          className="w-[15rem] lg:w-96"
        ></img>
        <p className="text-center font-semibold">
          {title}
        </p>
        <i className="text-gray-600 w-[15rem] lg:w-[21rem] hidden group-hover:block group-hover:duration-1000">
          {description}
        </i>
      </div>
    )
};