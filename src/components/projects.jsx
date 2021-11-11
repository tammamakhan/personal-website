import React from "react";
import { getProjects } from "../services/projectService";

function Projects() {
  const projects = getProjects();

  return (
    <div>
      {projects.map((proj) => (
        <div key={proj.name}>
          <h3>{proj.name}</h3>
          <p>{proj.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
