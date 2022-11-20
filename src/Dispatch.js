import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextLeftUp from "./ProjectTextLeftUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import dispatchThumb from "./assets/img/dispatch-thumbnail.jpg";
import dispatch1 from "./assets/img/dispatch-1.jpg";
import dispatch2 from "./assets/img/dispatch-2.jpg";

import { motion } from "framer-motion";

function Drumnow(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="WM Dispatch" meta="Product Design" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroImage image={dispatchThumb} alt="WM Dispatch App Design"/>
          <ProjectDescription
            detail1="Strategy"
            detail2="Research"
            detail3="UX Design"
            detail4="Visual Design"
            team1="1 Designer" 
            team2="1 Product Manager" 
            team3="10 Engineers" 
            role1="Lead designer"
            timeline1="6+ months"
            header="Compliance-focused cannabis delivery software"
            body="WM Dispatch is currently in progress and there will be more to come. If you wish to see the full project in its current state, please reach out!"
          />
          
          <ProjectImage image={dispatch1} alt="WM Dispatch App Design"/>
          <ProjectImage image={dispatch2} alt="WM Dispatch App Design"/>

        </motion.div>
      </div>
    </div>
  );
}

export default Drumnow;
