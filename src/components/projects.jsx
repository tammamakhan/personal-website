import React from "react";
import { getProjects } from "../services/projectService";
import Project from "./common/project";

function Projects() {
  const projects = getProjects();

  return (
    <div className="centerContainer">
      {projects.map((proj) => (
        <div key={proj.title}>
          <Project
            title={proj.title}
            languages={proj.languages}
            description={proj.description}
            link={proj.link}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
