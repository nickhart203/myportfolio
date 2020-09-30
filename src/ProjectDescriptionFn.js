import React from "react";
import "./App.css";

function ProjectDescriptionFn(props) {
  return (
    <section>
      <div className="container">
        <div className={props.newclass}>
          <div className="descriptionContainer">
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
              <p>
              View project on{" "}
              <a
                href="https://github.com/nickhart203/portfolio"
                className="line-link-sm"
                target="_blank"
              >
                Github.
              </a>
            </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDescriptionFn;
