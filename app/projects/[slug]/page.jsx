import { featuredProjects } from "@/utils/data";

const ProjectDetailpage = ({ params }) => {
  const { slug } = params;

  const projects = getProjectBySlug(slug);

  return (
    <div className="w-full ">
      {projects.slug} {projects.title}
    </div>
  );
};

function getProjectBySlug(slug) {
  return featuredProjects.find((item) => item.slug === slug) || null;
}
export default ProjectDetailpage;
