import encrypted from "../logos/encrypted.png";
import connectFour from "../logos/connect-four.png";
import covid from "../logos/coronavirus.png";
import nebula from "../logos/nebula.png";

const projects = [
  {
    title: "Encrypted Messenger",
    languages: "JavaScript, HTML/CSS, Python",
    description:
      "Currently developing a web messaging application that utilizes RSA 2048 bit and AES 256 bit encryption for live secure communications between various users in channels.\nApplication UI is being designed using the React.js library connected to a MySQL database with a Flask SQLAlchemy RESTful API.",
    image: encrypted,
  },
  {
    title: "Connect Four AI",
    languages: "C++",
    description:
      "Assembled a desktop application with the Qt framework that allows users to play the Connect Four board game against an A.I. player.\nThe artificial intelligence utilizes the minimax with alpha beta pruning algorithm in order to decide optimal moves during each turn.",
    link: "https://github.com/tammamakhan/connect-four-ai",
    image: connectFour,
  },
  {
    title: "Covid-19 Case Predictor",
    languages: "Python",
    description:
      "Constructed a machine learning model that utilizes deep learning in order to predict Covid-19 cases in the US.\nModel architecture consists of a recurrent neural network that uses LSTM layers with dropout built with the TensorFlow and Keras libraries.",
    link: "https://github.com/tammamakhan/covid-case-predictor",
    image: covid,
  },
  {
    title: "Volumetric Nebulae",
    languages: "JavaScript, HTML/CSS",
    description:
      "Developed graphics of an expanding volumetric nebulae cloud in WebGL for a school group project.\nUtilizes techniques such as raymarching and procedural generation within the Three.js 3D graphics library.",
    image: nebula,
  },
];

export function getProjects() {
  return projects;
}

export default {
  getProjects,
};
