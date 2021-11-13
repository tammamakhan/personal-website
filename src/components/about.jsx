import React from "react";
import programmer from "../images/programmer.png";
import PageTitle from "./common/pageTitle";
import PageDescription from "./common/pageDescription";

const About = () => {
  return (
    <div
      className="centerContainer centered"
      style={{ paddingLeft: "20%", paddingRight: "20%" }}
    >
      <div className="container" style={{ paddingBottom: 5 }}>
        <PageTitle title="Tammam Khan" />
        <PageDescription description="Aspiring Software Engineer" />
      </div>
      <hr />
      <img
        className="card-img background"
        src={programmer}
        alt="Programmer Logo"
      ></img>
      <div style={{ paddingTop: 10, paddingBottom: 50 }}>
        <PageDescription description="Computer science graduate with strong communication and learning skills desires the position of Software Engineer. Bringing knowledge in full-stack development as well as creating A.I. and machine learning models, and a solid grasp of data structures and object-oriented designs." />
      </div>
    </div>
  );
};

export default About;
