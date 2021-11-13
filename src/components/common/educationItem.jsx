import React from "react";

const EducationItem = ({ title, start, end, header, description, image }) => {
  return (
    <div className="card border-0 bg-light">
      <div className="content">
        <div className="row">
          <div className="col-2 my-auto">
            <img src={image} className="card-img" alt="Education Logo"></img>
          </div>
          <div className="col">
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
