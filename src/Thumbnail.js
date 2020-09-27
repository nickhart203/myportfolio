import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Thumbnail(props) {
  return (
    <div className="thumbnail-container">
      <Link className="line-link-lg" to={props.link}>
        <div className="project-title">
          <h2>{props.title}</h2>
        </div>
      </Link>
      <div className="project-subtext">
        <h3>{props.subtext}</h3>
      </div>
      <div className="thumbnail-anim">
        <Link to={props.link}>
          <div className="project-image-container">
            <div className="">
              <img src={props.image} alt="Project Image" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Thumbnail;
