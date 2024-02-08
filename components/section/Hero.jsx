import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-dark-gray pt-20 text-white px-5 lg:pt-36 md:pt-32">
      <div className="wrap flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center justify-between">
        <div className="relative">
          <Image
            src="/image/bg-profile.png"
            alt="profile"
            width={350}
            height={350}
            className="object-contain rounded-full absolute top-3 left-5 lg:block md:block hidden "
          />
          <Image
            src="/image/profile.JPG"
            alt="profile"
            width={350}
            height={350}
            className="object-contain rounded-full relative z-10"
          />
        </div>
        <div className="text-left">
          <h1 className="md:text-left lg:text-left text-center mt-5 text-3xl lg:text-5xl text-orange">
            <span className="text-white font-semibold">Hello, </span>
            {"I'"}m <br /> Faisal Abu Bakar Riza
          </h1>
          <p className="text-xl lg:text-3xl md:text-left lg:text-left text-center mt-5">
            Web Developer and Machine Learning
          </p>

          <div className="flex gap-3 justify-center md:justify-start lg:justify-start mt-5">
            <Button title="Contact Me" />
            <Button title="Resume" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
