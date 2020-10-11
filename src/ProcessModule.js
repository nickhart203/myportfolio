import React from "react";
import "./App.css";
import AboutDescription from "./AboutDescription.js";
import ProjectTextLeft from "./ProjectTextLeft";
import ProjectTextRight from "./ProjectTextRight.js";

function ProcessModule(props) {
  return (
    <div className="pageContainer">
      <ProjectTextLeft
        header="1.Discover"
        body="Begin a project with user interviews, stakeholder interviews, requirements & constraints gathering."
      />
      <ProjectTextRight
        header="2.Explore"
        body="Begin design reviews, persona building, user stories, task analysis, card sorting, and prototype feedback & testing."
      />
      <ProjectTextLeft
        header="3.Test"
        body="Begin a project with user interviews, stakeholder interviews, requirements & constraints gathering."
      />
      <ProjectTextRight
        header="4.Listen"
        body="Begin design reviews, persona building, user stories, task analysis, card sorting, and prototype feedback & testing."
      />
    </div>
  );
}

export default ProcessModule;
