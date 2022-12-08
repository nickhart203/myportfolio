import React from "react";
import "./App.css";
import Hyperlink from "./Hyperlink";

function ProjectResultsStats(props) {
  return (
    <section>
      <div className="container">
          <div className="statscontainer">
            <div className="gridContainer">
              <div className="gridCell">
                <h3>{props.number1}</h3>
                <p>
                  {props.meta1}   
                </p>
              </div>
              <div className="gridCell">
                <h3>{props.number2}</h3>
                <p>
                  {props.meta2}   
                </p>
              </div>
              <div className="gridCell">
                <h3>{props.number3}</h3>
                <p>
                  {props.meta3}   
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default ProjectResultsStats;
