import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import imgHero from "@/public/image/bg-profile.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-screen bg-dark-gray pt-20 text-white px-5 lg:pt-36 md:pt-32"
    >
      <div className="wrap flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center justify-between">
        <div className="relative">
          <Image
            src={imgHero}
            alt="profile"
            width={350}
            height={350}
            data-aos="fade-down"
            className="object-contain rounded-full absolute top-3 left-5 lg:block md:block hidden "
          />
          <Image
            src="/image/profile.JPG"
            alt="profile"
            width={350}
            height={350}
            data-aos="fade-up"
            className="object-contain rounded-full relative z-10"
          />
        </div>
        <div className="text-left" data-aos="fade-left">
          <h1 className="md:text-left lg:text-left text-center mt-5 text-3xl lg:text-5xl text-orange">
            <span className="text-white font-semibold">Hello, </span>
            {"I'"}m <br /> Faisal Abu Bakar Riza
          </h1>
          <p className=" text-xl lg:text-3xl md:text-left lg:text-left text-center mt-5">
            Web Developer and Machine Learning
          </p>

          <div className="flex gap-3 justify-center md:justify-start lg:justify-start mt-5">
            <Link href="https://wa.me/6282216386576" target="_blank">
              <Button title="Contact Me" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1OpZDioQvW2sqz4upnifIsIAZCCi7DlgM/view?usp=sharing"
              target="_blank"
            >
              <Button title="Resume" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
