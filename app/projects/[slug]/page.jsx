import Button from "@/components/Button";
import { featuredProjects } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const ProjectDetailpage = ({ params }) => {
  const { slug } = params;

  const projects = getProjectBySlug(slug);

  return (
    <div className="w-full md:px-[100px] px-[30px] py-10 min-h-screen bg-dark-gray">
      <div className="w-full flex justify-between">
        <Link
          href="/"
          className="w-fit group text-orange relative font-semibold transition-all bg-transparent hover:text-white "
        >
          <Image src="/image/logo.png" alt="logo" width={45} height={45} />
        </Link>
        <Link
          href="/"
          className="w-fit group text-orange relative font-semibold transition-all bg-transparent hover:text-white "
        >
          <div className="absolute w-0 transition-all group-hover:w-full h-full bg-orange -z-10"></div>
          Home
        </Link>
      </div>
      <h1 className="text-center text-3xl font-semibold my-2 text-orange ">
        {projects.title}
      </h1>
      <Image
        width={650}
        height={450}
        src={projects.image}
        alt={projects.slug}
        className="rounded-xl shadow-2xl mx-auto"
      />
      <div className="w-full mx-auto my-10 flex flex-col gap-4">
        <div className="w-full flex-wrap flex items-center gap-x-4">
          {projects.tech.map((item, i) => (
            <span
              key={i}
              className="font-medium border-solid border cursor-pointer rounded-xl text-white transition delay-100 px-2 hover:text-orange-hover"
            >
              {item}
            </span>
          ))}
        </div>
        <p
          className="text-white"
          dangerouslySetInnerHTML={{ __html: projects.description }}
        ></p>
        <Link target="_blank" href={projects.link}>
          <Button title="Live Project" />
        </Link>
      </div>
    </div>
  );
};

function getProjectBySlug(slug) {
  return featuredProjects.find((item) => item.slug === slug) || null;
}
export default ProjectDetailpage;
