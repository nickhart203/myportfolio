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
import consensys1 from "./assets/img/consensys-1.jpg";
import consensys2 from "./assets/img/consensys-2.jpg";
import consensys3 from "./assets/img/consensys-3.jpg";
import consensysThumb from "./assets/img/consensys-thumbnail.jpg";
import { motion } from "framer-motion";

function Consensys(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="ConsenSys Developer" meta="UX / UI Design" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroImage image={consensysThumb} alt="ConsenSys Design" />
          <ProjectDescription
            detail1="Research"
            detail2="Strategy"
            detail3="UX Design"
            detail4="Visual Design"
            team1="2 Designers"
            team2="1 Project Manager"
            team3=""
            team4=""
            role1="Designer"
            timeline1="4 weeks"
            header="Ushering in a new wave of Web3 developers"
            body="ConsenSys came to us with a problem. They had just acquired a full suite of Web3 developer tools but while they became a leader in web3 virtually overnight, no one knew to vet them as a valid option for their new projects. "
          />
          <ProjectImage
            image={consensys1}
            alt="ConsenSys Design"
            newclass="mobile-scale-img"
          />
          <ProjectTextLeftUp
            header="Understanding the value proposition and competitive advantage"
            body="There were quite a bit of back and forth, diagram sketches, and complex charts sent around with ConsenSys as we tried to illustrate exactly what they wanted to communicate. Alas, we arrived at a component that would highlight specific tools based on a user’s desired goals!"
          />
          <ProjectImage
            image={consensys2}
            alt="ConsenSys Design"  
            newclass="mobile-scale-img"
          />
          <ProjectTextRightUp
            header="The journey of a Web3 developer"
            body="We decided that this page would target developers that were totally new to Web3 and therefore thought it important to breakdown a lot of information in a step-by-step format to really tell the story of starting a new project with the ConsenSys developer suite. "
          />
          <ProjectImage
            image={consensys3}
            alt="ConsenSys Design"
            newclass="mobile-scale-img"
          />
          <ProjectTextLeftUp
            header="A stellar end result under very tight circumstances"
            body="A big reason ConsenSys came to us was because they knew of the high-quality work we could produce under very tight timelines. It wasn’t easy, but ultimately after a few late nights we turned this project around in 4 weeks and covered a lot of ground whilst winning over this repeat client for projects to come!"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Consensys;
