"use client";
import { skillsData } from "@/utils/data";
import CardSkill from "../CardSkill";

const Skills = () => {
  return (
    <div className="w-full bg-dark-gray">
      <div className="wrap">
        <h2 className="head_text pt-10 lg:pt-20 text-center">
          My <span className="text-orange">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center mt-10 px-10 pb-10">
          {skillsData.map((item) => (
            <CardSkill key={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
