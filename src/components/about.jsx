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
      <div className="container">
        <PageTitle title="Tammam Khan" />
        <PageDescription description="Aspiring Software Engineer" />
      </div>
      <hr />
      <img
        className="card-img background"
        src={programmer}
        alt="Programmer Logo"
      ></img>
      <hr />
      <div style={{ paddingBottom: 50 }}>
        <PageDescription description="Computer science graduate from the University of California-Santa Cruz with strong communication and learning skills desires the position of Software Engineer. Bringing knowledge in full-stack development as well as a solid grasp of algorithms, data structures and object-oriented designs." />
      </div>
    </div>
  );
};

export default About;
