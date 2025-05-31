import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";

import { IoSunnySharp } from "react-icons/io5";

const page = () => {
  return (
    <div className="w-full bg-dark py-10">
      <div className="wrap">
        <div className="flex items-center justify-between pt-10 ">
          <h2 className="head_text ">
            All <span className="text-orange">Projects</span>
          </h2>
          <Link href="/" className="flex items-start gap-3 relative group">
            <IoSunnySharp className="absolute animate-spin-slow transition-all text-transparent bottom-0 group-hover:block group-hover:bottom-7 group-hover:text-orange" />
            <AiFillHome size={20} color="orange" />
            <span className="text-orange">Back to Home</span>
          </Link>
        </div>
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {allProjects.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              link={item.link}
              image={item.image}
              tech={item.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
