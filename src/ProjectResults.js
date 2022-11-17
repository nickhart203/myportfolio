import React from "react";
import "./App.css";
import Hyperlink from "./Hyperlink";

function ProjectResults(props) {
  return (
    <section>
      <div className="container">
        <div className={props.newclass}>
          <div className="resultsContainer">
            <div className="description-copy">
              <h3>{props.header}</h3>
              <p>
                {props.body}
                <a>
                <Hyperlink
                  linkCallout={props.linkCallout}
                  href={props.href}
                  linkTitle={props.linkTitle}
                />
                </a>   
              </p>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectResults;
