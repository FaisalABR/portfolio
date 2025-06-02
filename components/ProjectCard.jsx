import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ title, image, tech, link }) => {
  return (
    <Link href={link} target="_blank">
      <div className=" flex flex-col transition-all bottom-0 hover:shadow-lg relative hover:bottom-4 hover:shadow-orange rounded-md ">
        <Image
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-[300px] rounded-t-md "
        />
        <div className="flex justify-between border-x-[1px] border-b-[1px] pb-2 border-orange rounded-b-md px-3 text-left ">
          <div className="flex flex-col">
            <p className="text-lg text-orange my-2 font-semibold">{title}</p>
            <div className="flex gap-2 justify-center md:justify-start lg:justify-start ">
              {tech.map((item, i) => (
                <span
                  key={i}
                  className="font-semibold text-white transition delay-300 hover:text-orange-hover"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
