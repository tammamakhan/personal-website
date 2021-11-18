import React from "react";
import useWindowDimensions from "../../hooks/windowDimensions";

const EducationItem = ({ title, start, end, header, description, image }) => {
  const { width } = useWindowDimensions();

  return (
    <div className="card border-0 bg-light">
      <div className="content">
        <div className="row">
          <div className={width < 900 ? "row centered" : "col-2 my-auto"}>
            <img
              src={image}
              className={width < 900 ? "card-img small-screen" : "card-img"}
              alt="Education Logo"
            ></img>
          </div>
          <div className={width < 900 ? "row centered" : "col"}>
            <div className="card-body">
              <h4 className="card-title">
                {title}
                {" ("}
                {start}
                {" - "}
                {end}
                {")"}
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">{header}</h6>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
