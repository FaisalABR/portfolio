import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectCard = ({ title, image, tech, link, slug }) => {
  return (
    <div className="flex flex-col border border-orange transition-all relative rounded-md ">
      <Link href={link} target="_blank">
        <div className="group relative">
          <Image
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-[300px] rounded-t-md "
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent group-hover:backdrop-blur-sm group-hover:bg-black/40 transition-all text-white flex items-center justify-center">
            <p className="hidden group-hover:inline font-medium delay-200 transition-all">
              See source/Live Project
            </p>
          </div>
        </div>
      </Link>
      <div className="flex justify-between border-t-[1px] py-2 border-orange rounded-b-md px-3 text-left ">
        <div className="flex flex-col gap-4">
          <p className="text-lg text-orange font-semibold">{title}</p>
          <div className="flex gap-2 justify-center md:justify-start lg:justify-start ">
            {tech.map((item, i) => (
              <span
                key={i}
                className="font-medium border-solid border cursor-pointer rounded-xl text-white transition delay-100 px-2 hover:text-orange-hover"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center">
            <Link href={`projects/${slug}`}>
              <div className="flex gap-3 items-center text-orange font-semibold relative cursor-pointer hover:text-orange-hover hover:gap-x-4 transition-all">
                See Details
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
