"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import ProjectCard from "../ProjectCard";
import { featuredProjects } from "@/utils/data";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="project" className="w-full bg-dark py-10 relative">
      <div className="absolute top-0 w-full bg-gradient-to-b h-[50px] from-black/10 to-transparent from-50% to-100%"></div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t h-[50px] from-black/10 to-transparent from-50% to-100%"></div>
      <div className="wrap text-center">
        <h2 className="head_text pt-10 lg:pt-20" data-aos="zoom-in">
          My <span className="text-orange">Projects</span>
        </h2>

        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredProjects.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              link={item.link}
              image={item.image}
              tech={item.tech}
              delay={item.delay}
            />
          ))}
        </div>
        <div className="w-full flex justify-end mt-5">
          <Link href="/projects">
            <div className="flex gap-3 items-center text-orange font-semibold relative cursor-pointer group">
              <span className="-ml-36   ">Other Projects</span>{" "}
              <FaArrowRightLong className="absolute -left-9 group-hover:-left-5 transition-all" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
