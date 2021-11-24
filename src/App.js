import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import About from "./components/about";
import Education from "./components/education";
import Projects from "./components/projects";
import Contact from "./components/contactInfo";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    document.title = "Tammam Khan";
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="content contentMain">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/education" component={Education} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Redirect from="/" to="/about" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
