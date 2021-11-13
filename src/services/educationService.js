import university from "../images/university.png";
import reactjs from "../images/reactjs.png";
import nodejs from "../images/nodejs.png";

const educations = [
  {
    title: "University of California, Santa Cruz",
    start: "Sept. 2017",
    end: "Jun. 2021",
    header: "Bachelor of Science, Computer Science",
    description:
      "Algorithms & Abstract Data Types, Database Systems I & II, Web Applications, Applied Machine Learning, Artificial Intelligence, Computer Architecture, Principles of Computer Systems Design, Comparative Programming Languages, Game Graphics and Real-Time Rendering",
    image: university,
  },
  {
    title: "Mastering React",
    start: "Aug. 2021",
    end: "Nov. 2021",
    header: "Certification from Code with Mosh (Mosh Hamedani)",
    description:
      "Learned how to create interactive web applications using ES6, Bootstrap, and various aspects of the React library such as composing components, hooks, routing, authentication, and deploying applications to Heroku.",
    image: reactjs,
  },
  {
    title: "The Complete Node.js Course",
    start: "Oct. 2021",
    end: "Current",
    header: "Certification from Code with Mosh (Mosh Hamedani)",
    description:
      "Currently studying Node modules and packages, creating RESTful APIs with Express, using a document based database with MongoDB, CRUD operations in Mongoose, and unit testing.",
    image: nodejs,
  },
];

export function getEducation() {
  return educations;
}

const educationServiceObject = {
  getEducation,
};

export default educationServiceObject;
