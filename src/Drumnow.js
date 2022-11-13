import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextLeftUp from "./ProjectTextLeftUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import drumnowThumb from "./assets/img/drumnow-thumbnail.jpg";
import drumnow1 from "./assets/img/drumnow-1.jpg";
import drumnow2 from "./assets/img/drumnow-2.jpg";
import drumnow3 from "./assets/img/drumnow-3.jpg";
import drumnow4 from "./assets/img/drumnow-4.jpg";
import drumnow5 from "./assets/img/drumnow-5.jpg";
import drumnow6 from "./assets/img/drumnow-6.jpg";
import drumnow7 from "./assets/img/drumnow-7.jpg";
import { motion } from "framer-motion";

function Drumnow(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="Drumnow" meta="Product Design" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroImage image={drumnowThumb} alt="Drumnow App Design" />
          <ProjectDescription
            detail1="Research"
            detail2="UX Design"
            detail3="Visual Design"
            detail4=""
            team1="1 Designer" 
            team2="1 Product Manager" 
            team3="2 Engineers" 
            timeline1="2 months"
            header="Grab a loop and get creating!"
            body="Drumnow was conceived to give metal musicians the tools to jam alongside rhythms in a simple, easy to use interface. The team came to me to design the 2.0 experience as the first iteration wasn't hitting the mark they had hoped. I met with the stakeholders, conducted interviews, and had productive working sessions to align their business goals with this MVP launch. This lead me to designing key user flows around the listening, browsing, and signup experiences.  "
          />
          
          <ProjectImage image={drumnow1} alt="Drumnow App Design" />

          <ProjectTextLeft
            header="Flowing through content"
            body="The goal of the home screen was to create a dynamic jumping off point to experience everything Drumnow has to offer."
          />
          <WorkHeroImage image={drumnow2} alt="Drumnow App Design" />
          <ProjectTextRight
            header="A functional downloading experience"
            body="Users can choose from a variety of file types when downloading a chosen loop such as tempo and kit specifications, or MIDI to plug into a DAW. "
          />
          <ProjectImage image={drumnow3} alt="Drumnow App Design" />
          <ProjectTextLeft
            header="An immersive pack offering"
            body="The updated table design allows for a quick understanding of what each loop contains so creators can find what they desire."
          />
          <ProjectImage image={drumnow4} alt="Drumnow App Design" />
          <ProjectTextRight
            header="An intuitive download selection"
            body="Creators reported not understanding exactly what was being downloaded or included in each loop and/or pack in the previous experience. The new download modal allows creators to play with what file types they want or take them all at once and give user-feedback to make it totally clear what they're getting."
          />
          <ProjectImage
            image={drumnow5}
            alt="Drumnow App Design"
            newclass="mobile-scale-img"
          />
          <ProjectTextLeft
            header="Concise settings with an eye on upgrading membership"
            body="The previous settings didn't take advantage of the membership marketing that can be seen here. Creators can see what plan they are on and choose to upgrade to get more out of Drumnow."
          />
          <ProjectImage
            image={drumnow6}
            alt="Drumnow App Design"
            newclass="mobile-scale-img"
          />
          <ProjectTextRight
            header="The plans are black and white"
            body="
            The plans experience was redesigned to clarify the drumnow offerings in a really simple way that compliments the rest of the experience."
          />
          <ProjectImage
            image={drumnow7}
            alt="Drumnow App Design"
            newclass="mobile-scale-img"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Drumnow;
