const educations = [
  {
    title: "University of California, Santa Cruz",
    start: "Sept. 2017",
    end: "Jun. 2021",
    header: "Bachelor of Science, Computer Science",
    description:
      "Algorithms & Abstract Data Types, Database Systems I & II, Web Applications, Applied Machine Learning, Artificial Intelligence, Computer Architecture, Principles of Computer Systems Design, Comparative Programming Languages, Game Graphics and Real-Time Rendering",
  },
  {
    title: "Mastering React",
    start: "Aug. 2021",
    end: "Nov. 2021",
    header: "Certification from Code with Mosh (Mosh Hamedani)",
    description:
      "Learned how to create interactive web applications using ES6, Bootstrap, and various aspects of the React library such as composing components, hooks, routing, authentication, and deploying applications to Heroku.",
  },
  {
    title: "The Complete Node.js Course",
    start: "Oct. 2021",
    end: "Current",
    header: "Certification from Code with Mosh (Mosh Hamedani)",
    description:
      "Currently studying Node modules and packages, creating RESTful APIs with Express, using MongoDB, CRUD operations using Mongoose, and unit testing.",
  },
];

export function getEducation() {
  return educations;
}

export default {
  getEducation,
};