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
          <WorkHeroImage image={meritusThumb} alt="Meritus Web Redesign" />
          <ProjectDescription
            detail1="Research"
            detail2="Strategy"
            detail3="UX Design"
            detail4="Visual Design"
            header="Major UX issues"
            body="Meritus Communities had some major UX and UI issues occurring on their website. They came to us with the problem of improving conversions, overall site traffic, and driving property inquiries. The goal was to discover some key problem areas and to address user pain points so that Meritus can keep bringing in new customers for years to come."
          />
          <ProjectImage image={meritus2} alt="Meritus Web Redesign" />
          <ProjectTextLeft
            header="Analyzing the data"
            body="We used hotjar on the site in advance to help us gather some preliminary information about the user flows. I found this very insightful for showing me where users were going once they hit the homepage, and how they were interacting with the problematic search module. This lead me to iterating on that specific module as a quick win."
          />
          <ProjectImage image={meritus3} alt="Meritus Web Redesign" />
          <ProjectTextRight
            header="Critical analysis and audit"
            body="Before moving forward any further, I set some time aside to dive deep into the current site and begin detailing any and every concern that I had. This was mostly pertaining to UX but naturally there would be some visual issues that had some crossover."
          />
          <ProjectImage image={meritus4} alt="Meritus Web Redesign" />
          <ProjectTextLeft
            header="Understanding the users and the flow"
            body="I needed to delve into the user's minds here so I could better understand where the experience could be improved in a unique way but also where I could borrow from other property shopping experiences. This involved breaking down each step in the user flow based on some key areas."
          />
          <ProjectImage
            image={meritus1}
            alt="Meritus Web Redesign"
            newclass="mobile-scale-img"
          />
          <ProjectTextRightUp
            header="A beautiful update that remains familiar"
            body="The stakeholders did not want to alter any brand aspects and thus the changes made needed to remain in the same vein as the former release. Major UX issues were addressed and utilized the existing design system in use."
          />
          <ProjectImage
            image={meritus5}
            alt="Meritus Web Redesign"
            newclass="mobile-scale-img"
          />
          <ProjectTextLeft
            header="Greater exposure and happier users"
            body="The new layouts allowed for a more visual use of space that relied more on imagery of the properties for users to contextualize, as opposed to numbers and text blocks. This lead to a greater chance of users entering into the site and viewing property listings."
          />
          <ProjectImage image={meritus6} alt="Meritus Web Redesign" />
          <ProjectTextRight
            header="Credibility to last"
            body="Before, there were user concerns of trusting in Meritus simply on the merit of the design quality. Rest assured, these issues, among others, have been put to bed and the website now lets the properties shine loud and bright. "
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Meritus;
