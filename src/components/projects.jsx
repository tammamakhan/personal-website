import React, { useState, useEffect } from "react";
import { getProjects } from "../services/projectService";
import Project from "./common/project";

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
      <div style={{ textAlign: "center", paddingBottom: 10 }}>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>
        {" and "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default Projects;
