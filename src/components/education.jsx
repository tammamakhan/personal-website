import React, { Fragment } from "react";
import { getEducation } from "../services/educationService";

function Education() {
  const education = getEducation();

  return (
    <div>
      {education.map((edu) => (
        <div>
          <h1>{edu.title}</h1>
          <h3>{edu.header}</h3>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
