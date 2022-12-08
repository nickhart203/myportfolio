import React from "react";
import "./App.css";
import AboutDescription from "./AboutDescription.js";
import ProjectTextLeft from "./ProjectTextLeft";
import ProjectTextRight from "./ProjectTextRight.js";
import ProcessModule from "./ProcessModule";

function About(props) {
  return (
    <div className="pageContainer">
      <AboutDescription
        detail1="Product Design"
        detail2="UX Design"
        detail3="Visual Design"
        detail4="Design Systems"
        detail5="Brand & Identity"
        header="Product designer"
        body="I have 6+ years in designing and shipping products for mobile and web that have generated positive results in industries such as: Delivery, Healthcare, E-commerce, Music, Entertainment, Web3 and more! I love being an IC with a strong level of ownership in the work that I do. I'm obsessed with craft, compelling experiences, and strategic innovation—a trait that makes its way into my personal life as well. Currently I live in Longmont, Colorado and in my free time enjoy learning new skills like React and SwiftUI or discovering new passions that inspire me. :)"
      />
    </div>
  );
}

export default About;
