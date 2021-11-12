import React, { useState, useEffect } from "react";
import { getProjects } from "../services/projectService";
import Project from "./common/project";
import Sources from "./common/sources";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(getProjects());
    return () => {};
  });

  return (
    <div className="centerContainer">
      {projects.map((proj) => (
        <div key={proj.title} className="project">
          <Project
            title={proj.title}
            languages={proj.languages}
            description={proj.description}
            link={proj.link}
            image={proj.image}
          />
        </div>
      ))}
      <Sources />
    </div>
  );
}

export default Projects;
