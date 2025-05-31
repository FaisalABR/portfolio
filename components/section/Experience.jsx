import Image from "next/image";
import React from "react";
import TorcheLogo from "@/public/image/torche.webp";
import EduworkLogo from "@/public/image/eduwork-white.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full bg-dark-gray text-center pt-28 pb-10 relative"
    >
      <div className="absolute top-0 w-full bg-gradient-to-b h-[50px] from-dark to-transparent from-50% to-100%"></div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-dark to-transparent from-50% to-100%">
        <h1 className="text-3xl h-32 text-white mx-auto z-50">
          The story continues...
        </h1>
      </div>
      <div className="wrap">
        <h2 className="head_text px-5">
          My{" "}
          <span className="text-orange" data-aos="zoom-in">
            Experience
          </span>
        </h2>

        <div className="flex flex-col relative mt-24">
          {/* Dashed timeline */}
          <div className="absolute border-orange border-l-2 border-dashed lg:left-0 lg:right-0 lg:m-auto md:m-0 h-full w-0 z-0"></div>

          <div className="flex justify-between relative items-start h-[350px]">
            <div className="bg-dark rounded-2xl absolute max-md:right-0 lg:left-0 p-4 flex flex-col gap-3">
              <Image
                width={200}
                height={150}
                src={TorcheLogo}
                alt="Torche Logo"
              />
              <h2 className="text-lg text-orange">Torche Education</h2>
              <p className="text-2xl max-md:block lg:hidden">
                Frontend Engineer Intern
              </p>
              <p className="text-lg max-md:block lg:hidden">
                Feb 2023 - Jun 2023
              </p>
            </div>
            <div className="absolute left-[46.5%] max-md:left-0 top-0 p-2 rounded-full text-white linear bg-gradient-to-tr from-orange to-orange-hover h-20 w-20 text-2xl flex items-center justify-center">
              1
            </div>
            <div className="absolute right-0 max-md:hidden lg:block justify-items-center text-white">
              <p className="text-2xl">Frontend Engineer Intern</p>
              <p className="text-lg">Feb 2023 - Jun 2023</p>
            </div>
          </div>
          <div className="flex justify-between relative items-start h-[350px]">
            <div className="absolute left-0 justify-items-center text-white">
              <p className="text-2xl">Programmer Intern</p>
              <p className="text-lg">Mar 2024 - Jun 2024</p>
            </div>
            <div className="absolute left-[46.5%] top-0 p-2 rounded-full text-white linear bg-gradient-to-tr from-orange to-orange-hover h-20 w-20 text-2xl flex items-center justify-center">
              2
            </div>
            <div className="bg-dark rounded-2xl absolute right-0 p-4 flex flex-col gap-3">
              <Image
                width={200}
                height={150}
                src={EduworkLogo}
                alt="Eduwork Logo"
              />
              <h2 className="text-lg text-orange">Eduwork</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
