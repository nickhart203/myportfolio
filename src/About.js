import React from "react";
import "./App.css";
import AboutDescription from "./AboutDescription.js";

function About(props) {
  return (
    <div className="pageContainer">

        <AboutDescription
          detail1="Product Design"
          detail2="Animation"
          detail3="Design Systems"
          detail4="UX/UI Design"
          detail5="Brand & Identity"
          header="Hi there and welcome!"
          body="I have worked on many satisfying projects ranging from apps, to websites, to animations and identities, all of which keep me hungry for more! I started my career in Detroit, Michigan but currently reside in Boulder, Colorado where I continue to grow professionally, but am also blessed to live a rewarding life in the mountains! Smart, elegant design and nature are my lifeblood."
        />
      
    </div>
  );
}

export default About;
