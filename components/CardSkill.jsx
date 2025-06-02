import Image from "next/image";

const CardSkill = ({ title, image }) => {
  return (
    <div
      data-aos="flip-down"
      className="flex flex-col justify-center items-center py-5 px-7 w-fit rounded-md bg-[#545454] hover:bg-orange-hover transition-all"
    >
      <Image
        src={image}
        alt="profile"
        width={150}
        height={150}
        loading="lazy"
      />
      <p className="text-white mt-3 md:mt-5 font-base text-xs md:text-lg">
        {title}
      </p>
    </div>
  );
};

export default CardSkill;
