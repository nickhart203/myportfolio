import React from "react";
import "./App.css";

function ProjectTextLeft(props) {
  return (
    <section>
        
      <div className="container text-padding row subtract-top">
        <div className="col-sm-2"></div>
          <div className="side-col-lg">
            <h3>{props.header}</h3>
            <p>{props.body}</p>
          </div>
      </div>
    </section>
  );
}

export default ProjectTextLeft;
