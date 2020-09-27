import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextRightUp from "./ProjectTextRightUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import meritusThumb from "./assets/img/meritus-thumbnail.jpg";
import meritus1 from "./assets/img/meritus-1.jpg";
import meritus2 from "./assets/img/meritus-2.jpg";
import meritus3 from "./assets/img/meritus-3.jpg";
import meritus4 from "./assets/img/meritus-4.jpg";
import meritus5 from "./assets/img/meritus-5.jpg";
import meritus6 from "./assets/img/meritus-6.jpg";
import { motion } from "framer-motion";

function Meritus(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="Meritus Communities" meta="UX Design" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroImage image={meritusThumb} alt="Coachella Mobile" />
          <ProjectDescription
            detail1="UX Design"
            detail2="UX Audit"
            detail3="Visual Design"
            detail4=""
            header="Major UX issues"
            body="Meritus Communities had some major UX issues occurring on its website, and they knew it. They came to us with the goal of addressing and implementing the changes needed in order to bump up their website conversions and reduce bouncing."
          />
          <ProjectImage image={meritus2} alt="Coachella UI" />
          <ProjectTextLeft
            header="Analyzing the data"
            body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
          />
          <ProjectImage image={meritus3} alt="Coachella UI" />
          <ProjectTextRight
            header="Critical Analysis"
            body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
          />
          <ProjectImage image={meritus4} alt="Coachella UI" />
          <ProjectTextLeft
            header="Animated Illustrations"
            body="Another designer already drew up the beautiful set of illustrations to be used on the site, so we thought it would be a great idea if I were to animate them as if they were being painted in with watercolor. This effect was used in transitions, such as the hero on page load and as a user moved through the navigation. These were limited to desktop only to preserve performance on mobile."
          />
          <ProjectImage
            image={meritus1}
            alt="Coachella UI"
            newclass="mobile-scale-img"
          />
          <ProjectTextRightUp
            header="The Result"
            body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
          />
          <ProjectImage
            image={meritus5}
            alt="Coachella UI"
            newclass="mobile-scale-img"
          />
          <ProjectTextLeft
            header="Animated Illustrations"
            body="Another designer already drew up the beautiful set of illustrations to be used on the site, so we thought it would be a great idea if I were to animate them as if they were being painted in with watercolor. This effect was used in transitions, such as the hero on page load and as a user moved through the navigation. These were limited to desktop only to preserve performance on mobile."
          />
          <ProjectImage image={meritus6} alt="Coachella UI" />
          <ProjectTextRight
            header="Design System"
            body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Meritus;
