import React, { useState, useEffect } from "react";
import { getEducation } from "../services/educationService";
import EducationItem from "./common/educationItem";
import PageDescription from "./common/pageDescription";
import PageTitle from "./common/pageTitle";
import Sources from "./common/sources";

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setEducation(getEducation());
    return () => {};
  }, []);

  return (
    <div className="centerContainer">
      <div className="container" style={{ paddingBottom: 5 }}>
        <PageTitle title="Education" />
        <PageDescription description="A list of the institutions I have attended, as well as courses and certifications I have completed and attained." />
      </div>
      <hr />
      {education.map((edu) => (
        <div className="listItem" key={edu.title}>
          <EducationItem
            title={edu.title}
            start={edu.start}
            end={edu.end}
            header={edu.header}
            description={edu.description}
            image={edu.image}
          />
        </div>
      ))}
      <Sources />
    </div>
  );
}

export default Education;
