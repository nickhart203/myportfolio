import React from "react";
import "./App.css";

function ProjectDescriptionUp(props) {
  return (
    <section>
      <div className="container">
        <div className={props.newclass}>
          <div className="descriptionContainerUp">
            <div className="detailContainer">
              <div className="col-sm inline-block">
                <ul>
                  <h5>Details</h5>
                  <li>{props.detail1}</li>
                  <li>{props.detail2}</li>
                  <li>{props.detail3}</li>
                  <li>{props.detail4}</li>
                  <li>{props.detail5}</li>
                </ul>
              </div>
              <div className="col-sm inline-block">
                <ul>
                  <h5>Team</h5>
                  <li>{props.team1}</li>
                  <li>{props.team2}</li>
                  <li>{props.team3}</li>
                  <li>{props.team4}</li>
                  <li>{props.team5}</li>
                </ul>
              </div>
              <div className="col-sm inline-block">
                <ul>
                  <h5>Role</h5>
                  <li>{props.role1}</li>
                </ul>
              </div>
              <div className="col-sm inline-block">
                <ul>
                  <h5>Timeline</h5>
                  <li>{props.timeline1}</li>
                  <li>{props.timeline2}</li>
                </ul>
              </div>
            </div>
            <div className="description-copy">
              <h2>{props.header}</h2>
              <p>{props.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDescriptionUp;
