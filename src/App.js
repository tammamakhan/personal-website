import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Education from "./components/education";
import Projects from "./components/projects";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={Projects} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
