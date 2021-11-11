import React from "react";
import { getEducation } from "../services/educationService";

function Education() {
  const education = getEducation();

  return (
    <div>
      {education.map((edu) => (
        <div key={edu.title}>
          <h3>{edu.title}</h3>
          <h4>{edu.header}</h4>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
