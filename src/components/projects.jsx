import React, { useState, useEffect } from "react";
import { getProjects } from "../services/projectService";
import PageDescription from "./common/pageDescription";
import PageTitle from "./common/pageTitle";
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
      <div className="container" style={{ paddingBottom: "2.5%" }}>
        <PageTitle title="Projects" />
        <PageDescription description="Various programming projects I have contributed to throughout my education and career." />
      </div>
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
