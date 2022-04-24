import React from "react";
import "./App.css";


function ProjectImageLast(props) {
  return (
    <div>
      <div className="project-image-container last-image-padding">
        <img src={props.image} alt={props.alt} className={props.newclass} />
      </div>
    </div>
  );
}

export default ProjectImageLast;
