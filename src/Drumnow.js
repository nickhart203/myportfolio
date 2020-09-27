import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextRightUp from "./ProjectTextRightUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import drumnow1 from "./assets/img/drumnow-1.jpg";
import drumnow2 from "./assets/img/drumnow-2.jpg";
import drumnow3 from "./assets/img/drumnow-3.jpg";
import drumnow4 from "./assets/img/drumnow-4.jpg";
import drumnow5 from "./assets/img/drumnow-5.jpg";

function Drumnow(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="Drumnow" meta="Product Design" />
        <WorkHeroImage image={drumnow2} alt="Coachella Mobile" />
        <ProjectDescription
          detail1="Visual Design"
          detail2="UX Design"
          detail3=""
          detail4=""
          header="Transforming the Coachella website for the year 2020"
          body="With another year coming around for the festival, Goldenvoice, parent company of Coachella, needed a new theme and a new look to embody what it means to attend the priceless weekend at the grounds of Empire Polo Club. "
        />
        <ProjectImage image={drumnow1} alt="Coachella UI" />

        <ProjectTextLeft
          header="Design System"
          body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
        />
        <ProjectImage image={drumnow3} alt="Coachella UI" />
        <ProjectTextRight
          header="Design System"
          body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
        />
        <ProjectImage image={drumnow4} alt="Coachella UI" />
        <ProjectTextLeft
          header="Brand Guidelines"
          body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
        />
        <ProjectImage image={drumnow5} alt="Coachella UI" newclass="mobile-scale-img" />
        <ProjectTextRightUp
          header="Animated Illustrations"
          body="Another designer already drew up the beautiful set of illustrations to be used on the site, so we thought it would be a great idea if I were to animate them as if they were being painted in with watercolor. This effect was used in transitions, such as the hero on page load and as a user moved through the navigation. These were limited to desktop only to preserve performance on mobile."
        />
      </div>
    </div>
  );
}

export default Drumnow;
