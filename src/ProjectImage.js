import React from "react";
import "./App.css";


function ProjectImage(props) {
  return (
    <div>
      <div className="project-image-container">
        <img src={props.image} alt={props.alt} className={props.newclass} />
      </div>
    </div>
  );
}

export default ProjectImage;
