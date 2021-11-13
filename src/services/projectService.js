import encrypted from "../images/encrypted.png";
import connectFour from "../images/connect-four.png";
import covid from "../images/coronavirus.png";
import nebula from "../images/nebula.png";
import vidly from "../images/vidly.png";
import database from "../images/database.png";
import digits from "../images/digits.png";

const projects = [
  {
    title: "Encrypted Messenger",
    languages: "JavaScript, HTML/CSS, Python",
    description:
      "Currently developing a web messaging application that utilizes RSA 2048 bit and AES 256 bit encryption for live secure communications between various users in channels.\nApplication UI is being designed using the React.js library connected to a MySQL database with a Flask SQLAlchemy RESTful API.",
    link: "https://github.com/tammamakhan/encrypted-messenger",
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
    link: "https://www.kaggle.com/tammamkhan/us-covid-case-predicton-keras-rnn",
    image: covid,
  },
  {
    title: "Volumetric Nebulae",
    languages: "JavaScript, HTML/CSS",
    description:
      "Developed graphics of an expanding volumetric nebulae cloud in WebGL for a group project during a Game Graphics and Real-Time Rendering course.\nUtilizes techniques such as raymarching and procedural generation within the Three.js 3D graphics library.",
    image: nebula,
  },
  {
    title: "Relational Database Management System",
    languages: "C++",
    description:
      "Built up a relational database management system (RDBMS) API within a team during my Database Systems II course. The RDBMS allows for users to optimally store, manage, index, and query relational databases within the system's physical disk storage.",
    image: database,
  },
  {
    title: "Digit Image Recognizer",
    languages: "Python",
    description:
      "My submission for the Digit Recognizer competition on Kaggle. Machine learning model architecture consists of a convolutional neural network with dropout capable of predicting the digit represented by a hand drawing with an accuracy of 99.435%.",
    link: "https://www.kaggle.com/tammamkhan/digit-image-recognizer-keras-cnn",
    image: digits,
  },
  {
    title: "Vidly",
    languages: "JavaScript, HTML/CSS",
    description:
      'Created the frontend for a video rental web application for the "Mastering React" course I completed. Constructed using various aspects of React.js such as routing, pagination, filtering, and sorting along with Bootstrap components and ES6. User authentication built using JSON Web Tokens (JWT).',
    link: "https://github.com/tammamakhan/mastering-react-vidly",
    image: vidly,
  },
];

export function getProjects() {
  return projects;
}

const projectServiceObject = {
  getProjects,
};

export default projectServiceObject;
