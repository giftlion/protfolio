import React from "react";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  liveUrl?: string | null;
  githubUrl?: string;
};

const ProjectCard = ({ title, description, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="py-4 border-b border-gray-800 hover:border-gray-600 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white hover:text-gray-300 transition-colors mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {description}
          </p>
        </div>
        <div className="flex gap-3 min-w-[200px] justify-end">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors text-sm flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 text-white font-semibold rounded hover:border-gray-400 transition-colors text-sm flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
