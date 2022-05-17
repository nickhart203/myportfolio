import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroVideo from "./WorkHeroVideo.js";
import WorkHeroVideoAddShadow from "./WorkHeroVideoAddShadow";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextRightUp from "./ProjectTextRightUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import ProjectTextLeftUp from "./ProjectTextLeftUp.js";
import coalesse1 from "./assets/img/coalesse-1.jpg";
import coalesse2 from "./assets/img/coalesse-2.jpg";
import coalesse4 from "./assets/img/coalesse-4.jpg";
import coalesse5 from "./assets/img/coalesse-5.jpg";
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
          <WorkHeroVideoAddShadow video="https://player.vimeo.com/video/459767376?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectDescription
            detail1="UX/UI Design"
            detail2="Visual Design"
            detail3="Strategy"
            detail4="Animation"
            detail5="Research"
            team1="2 Designers"
            team2="1 Design Director"
            team3="1 Project Manager"
            team4="2 Engineers"
            timeline1="3 months"
            header="Bringing a beautiful brand forward to shine in today's digital landscape"
            body="Coalesse is a place interior designers can go to when they need to spec their work. Here, they have access to furniture and material specs, as well as project ideas and other helpful resources. The problem Coalesse was facing was that they sensed their web experience was failing to remain as a top option for interior designers when compared to their competitors. "
          />
          <ProjectImage
            image={coalesse1}
            alt="Coalesse Mobile Design"
            newclass="mobile-scale-img"
          />

          <ProjectTextLeft
            header="Delightful and functional"
            body="The steps required for placing Coalesse back at the top involved tasks such as improving the product browse flow and improving the aesthetic quality of the site to delight users. A lot of the UI was stuck in the past and left many target users scratching their heads and ultimately turning to the competition. Though the primary users of this website visit from desktop over mobile by about 9-to-1, the importance of continuity in experience cannot be overstated. "
          />
          <ProjectImage
            image={coalesse4}
            alt="Coalesse Desktop Design"
            newclass=""
          />
          <ProjectImage
            image={coalesse5}
            alt="Coalesse Desktop Design"
            newclass=""
          />
          <ProjectTextRight
            header="A foundation in research"
            body="The Coalesse website is used primarily for interior designers as a tool to help them spec their work. I worked with the Coalesse team and received a handful of recorded user interviews to review and help me learn the in's and out's of the user's process on the site. This allowed the IA and UX design to be hyper focused on the people who matter most."
          />
          <ProjectImage
            image={coalesse2}
            alt="Coalesse Desktop Design"
            newclass="mobile-scale-img"
          />
          <ProjectTextLeftUp
            header="One to remember"
            body="It was truly a rewarding experience to get inside the heads of the interior designers as well as collaborating with the Coalesse team to help move the project forward as efficiently as possible. It was also refreshing to be apart of a redesign that had such a modern visual system that I'm confident will last a long time."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Coalesse;
