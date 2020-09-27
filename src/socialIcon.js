import React from "react";
import "./App.css";

function SocialIcon(props) {
  return (
    <div className="socialIcon-container">
      <a href ={props.link} target = "_blank">
        <div className="socialSVG">
          <img src={props.image} alt="Social Icon" />
        </div>
      </a>
    </div>
  );
}

export default SocialIcon;
