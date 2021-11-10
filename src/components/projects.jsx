import React from "react";
import { getProjects } from "../services/projectService";

function Projects() {
  const projects = getProjects();

  return (
    <div>
      {projects.map((p) => (
        <div>
          <h1>{p.name}</h1>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
