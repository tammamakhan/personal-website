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
      <div className="container" style={{ paddingBottom: 5 }}>
        <PageTitle title="Projects" />
        <PageDescription description="Below are various programming projects I have contributed to throughout my education and career." />
      </div>
      <hr />
      {projects.map((proj) => (
        <div key={proj.title} className="listItem">
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
