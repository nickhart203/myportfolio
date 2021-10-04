import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextLeftUp from "./ProjectTextLeftUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import drumnow1 from "./assets/img/drumnow-1.jpg";
import drumnow2 from "./assets/img/drumnow-2.jpg";
import drumnow21 from "./assets/img/drumnow-2-1.jpg";
import drumnow3 from "./assets/img/drumnow-3.jpg";
import drumnow4 from "./assets/img/drumnow-4.jpg";
import drumnow5 from "./assets/img/drumnow-5.jpg";
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
          <WorkHeroImage image={drumnow2} alt="Drumnow App Design" />
          <ProjectDescription
            detail1="Research"
            detail2="UX Design"
            detail3="Visual Design"
            detail4=""
            team1="1 Designer" 
            team2="1 Product Manager" 
            team3="1 Engineer" 
            timeline1="1 month"
            header="Fostering creativity with metal loops to jam to"
            body="Drumnow was conceived to give metal musicians the tools to jam alongside rhythms in a simple, easy to use interface. The team came to me in need of some major design work before the official product launch and I fell in love with the product's vibe immediately. I had to conduct some stakeholder interviews to make sure I could target their business goals with this MVP launch. This lead me to designing key user flows around the listening and browsing experiences. "
          />
          
          <ProjectImage image={drumnow1} alt="Drumnow App Design" />

          <ProjectTextLeft
            header="An engaging home screen experience"
            body="The team wanted a convincing home screen to entice users with beautiful content and inspire their creativity. I did a few competitive analyses of music apps to get a good feel of the industry standards and the best practices to promote interesting content."
          />
          <WorkHeroImage image={drumnow21} alt="Drumnow App Design" />
          <ProjectTextRight
            header="Beautiful from the beginning"
            body="From the very beginning of creating an account or logging in, the Drumnow experience is one to turn heads."
          />
          <ProjectImage image={drumnow3} alt="Drumnow App Design" />
          <ProjectTextLeft
            header="Expanding on a bold, electric vision"
            body="There were some loose design ideas ready to go for my when I took the project on, which lead me to move quickly. One of these ideas was an experience that changed colors based on the sample pack's color theme. I used the sample pack covers as reference and made a set of vibrant and engaging backgrounds that transform the user with each pack they choose."
          />
          <ProjectImage image={drumnow4} alt="Drumnow App Design" />
          <ProjectTextRight
            header="Thinking systemically "
            body="Above you can see a couple of the themed player screens working in harmony with their respective sample packs. These colors range from many hues all across the color spectrum, working together to create a truly one-of-a-kind and immersive experience."
          />
          <ProjectImage
            image={drumnow5}
            alt="Drumnow App Design"
            newclass="mobile-scale-img"
          />
          <ProjectTextLeftUp
            header="A unique artist page built to scale"
            body="Lastly, the team and I had to collaborate on a user experience that was scalable and intuitive for artist pages within the app. Artists can be viewed from search and when landing on their page, have the ability to include content that reaches past just their sample packs, but videos and potentially even more in the future."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Drumnow;
