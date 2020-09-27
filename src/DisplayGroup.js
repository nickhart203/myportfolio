import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextRightUp from "./ProjectTextRightUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
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
          <WorkHeroImage image={displaygroupThumb} alt="Coachella Mobile" />
          <ProjectDescription
            detail1="UX/UI Design"
            detail2="Visual Design"
            detail3=""
            detail4=""
            header="Bringing a beautiful brand forward to shine in today's digital landscape"
            body="The Coalesse project was a full redesign initiative that involved researching its primary users and restructuring the site map in key areas. When it was all said and done, both in usability and in aesthetics, the website embodied everything the Coalesse team hoped it would."
          />
          <ProjectImage
            image={displaygroup1}
            alt="Coachella Mobile"
            newclass="mobile-scale-img"
          />

          <ProjectTextLeft
            header="A foundation in research"
            body="The Coalesse website is used primarily for interior designers as a tool to help them spec their work. I worked with the Coalesse team and received a handful of recorded user interviews to review and help me learn the in's and out's of their process on the site."
          />
          <ProjectImage
            image={displaygroup2}
            alt="Coachella UI"
            newclass="mobile-scale-img"
          />
          <ProjectTextRightUp
            header="One to remember"
            body="It was truly a rewarding experience to get inside the heads of the interior designers as well as collaborating with the Coalesse team to help move the project forward as efficiently as possible. It was also refreshing to be apart of a redesign that had such a modern visual system that I'm confident will last a long time."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default DisplayGroup;
