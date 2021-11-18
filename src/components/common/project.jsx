import React from "react";
import useWindowDimensions from "../../hooks/windowDimensions";

const Project = ({ title, languages, description, link, image }) => {
  const { width } = useWindowDimensions();

  return (
    <div className="card border-0 bg-light">
      <div className="content">
        <div className="row">
          <div className={width < 900 ? "row centered" : "col-2 my-auto"}>
            <img
              src={image}
              className={width < 900 ? "card-img small-screen" : "card-img"}
              alt="Project Logo"
            ></img>
          </div>
          <div className={width < 900 ? "row centered" : "col"}>
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <h6 className="card-subtitle mb-2 text-muted">{languages}</h6>
              <p className="card-text">{description}</p>
              {link && (
                <a href={link} className="btn btn-primary">
                  View Code
                </a>
              )}
              {!link && (
                <button className="btn btn-secondary disabled">
                  Code Not Available
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
