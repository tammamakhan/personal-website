import React from "react";
import projectService from "../../services/projectService";

const Project = ({ title, languages, description, link }) => {
  return (
    <div className="card">
      {/*<img src="../../../public/logo192.png" class="card-img-top" alt="...">*/}
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h6 className="card-title">{languages}</h6>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">
          View Code
        </a>
      </div>
    </div>
  );
};

export default Project;
