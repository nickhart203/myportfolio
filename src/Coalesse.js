import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroVideo from "./WorkHeroVideo.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextRightUp from "./ProjectTextRightUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import coalesse1 from "./assets/img/coalesse-1.jpg";
import coalesse2 from "./assets/img/coalesse-2.jpg";
import { motion } from "framer-motion";

function Coalesse(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="Coalesse" meta="UX / UI Design" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroVideo video="https://player.vimeo.com/video/459767376?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectDescription
            detail1="UX/UI Design"
            detail2="Visual Design"
            detail3=""
            detail4=""
            header="Bringing a beautiful brand forward to shine in today's digital landscape"
            body="The Coalesse project was a full redesign initiative that involved researching its primary users and restructuring the site map in key areas. When it was all said and done, both in usability and in aesthetics, the website embodied everything the Coalesse team hoped it would."
          />
          <ProjectImage
            image={coalesse1}
            alt="Coalesse Mobile Design"
            newclass="mobile-scale-img"
          />

          <ProjectTextLeft
            header="A foundation in research"
            body="The Coalesse website is used primarily for interior designers as a tool to help them spec their work. I worked with the Coalesse team and received a handful of recorded user interviews to review and help me learn the in's and out's of their process on the site."
          />
          <ProjectImage
            image={coalesse2}
            alt="Coalesse Desktop Design"
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

export default Coalesse;
