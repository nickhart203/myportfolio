import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextRightUp from "./ProjectTextRightUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import ProjectTextLeftUp from "./ProjectTextLeftUp.js";
import displaygroup1 from "./assets/img/displaygroup-1.jpg";
import displaygroup2 from "./assets/img/displaygroup-2.jpg";
import displaygroupThumb from "./assets/img/displaygroup-thumbnail.jpg";
import { motion } from "framer-motion";

function DisplayGroup(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="Display Group" meta="UX / UI Design" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroImage image={displaygroupThumb} alt="Display Group Design" />
          <ProjectDescription
            detail1="Research"
            detail2="Strategy"
            detail3="UX/UI Design"
            detail4="Visual Design"
            header="Delivering excitement and entertainment"
            body="Display Group came to us with a very outdated web presence that did not do their service justice. They are an entertainment speciality service that can bring larger than life installations to an event, but also dance in the finer, more sophisticated gatherings as well."
          />
          <ProjectImage
            image={displaygroup1}
            alt="Display Group Design"
            newclass="mobile-scale-img"
          />

          <ProjectTextLeftUp
            header="Reworking the approach"
            body="We worked with their team to target their goals for the website and help them elevate both the promotional aspects as well as the informative aspects of their website. We changed up their sitemap and the way they educate customers about their products and services."
          />
          <ProjectImage
            image={displaygroup2}
            alt="Display Group Design"  
            newclass="mobile-scale-img"
          />
          <ProjectTextRight
            header="An experience to increase customer engagement"
            body="Ultimately, the website succeeded in placing a greater priority in the presentation of information as well as how customers can use the site in their own event creation process. Display Group is now positioned as a more reputable brand for entertainment services."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default DisplayGroup;
