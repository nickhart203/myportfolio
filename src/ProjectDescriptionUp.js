import React from "react";
import "./App.css";

function ProjectDescription(props) {
  return (
    <section>
      <div className="container">
        <div className={props.newclass}>
          <div className="descriptionContainer subtract-top">
            <div className="col-sm inline-block">
              <ul>
                <h5>Details</h5>
                <li>{props.detail1}</li>
                <li>{props.detail2}</li>
                <li>{props.detail3}</li>
                <li>{props.detail4}</li>
              </ul>
            </div>
            <div className="side-col-lg inline-block">
              <h3>{props.header}</h3>
              <p>{props.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDescription;
