import React from "react";
import "./App.css";
import meImg from "./assets/img/me.jpg";

function AboutDescription(props) {
  return (
    <section>
        <div className="aboutHeaderContainer row">
          <div className="side-col-lg inline-block">
            <h2>{props.header}</h2>
            <p>{props.body}</p>
            <div className="col-sm row">
            <ul>
              <h5>What I do</h5>
              <li>{props.detail1}</li>
              <li>{props.detail2}</li>
              <li>{props.detail3}</li>
              <li>{props.detail4}</li>
              <li>{props.detail5}</li>
            </ul>
          </div>
          </div>
          <div className="side-image center inline-block">
            <img src={meImg} />
          </div>
        </div>
      
    </section>
  );
}

export default AboutDescription;
