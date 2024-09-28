import { Briefcase } from 'lucide-react';
import projects from '../content/projects/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => (
  <section id="projects" className="mb-16 px-4 lg:px-16 xl:px-32">
    <h2 className="text-3xl font-bold mb-8 text-left flex items-center justify-start text-purple-600 dark:text-purple-400">
      <Briefcase className="w-8 h-8 mr-2" />
      Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
