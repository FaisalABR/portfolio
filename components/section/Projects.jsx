"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import ProjectCard from "../ProjectCard";
import { featuredProjects } from "@/utils/data";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="project" className="w-full bg-dark py-32 relative">
      <div className="absolute top-0 w-full bg-gradient-to-b h-[50px] from-black/10 to-transparent from-50% to-100%"></div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t h-[50px] from-black/10 to-transparent from-50% to-100%"></div>
      <div className="wrap text-center">
        <h2 className="head_text pt-10 lg:pt-20" data-aos="zoom-in">
          My <span className="text-orange">Projects</span>
        </h2>

        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProjects.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              link={item.link}
              image={item.image}
              tech={item.tech}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
