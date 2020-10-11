import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroVideo from "./WorkHeroVideo.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import ProjectTextLeftUp from "./ProjectTextLeftUp.js";
import coachella1 from "./assets/img/coachella-1.jpg";
import coachella2 from "./assets/img/coachella-2.jpg";
import { motion } from "framer-motion";

function Coachella(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="Coachella 2020" meta="Website / Animation" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroVideo video="https://player.vimeo.com/video/458829502?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectDescription
            detail1="Visual Design"
            detail2="Animation"
            detail3="Design System"
            detail4=""
            header="Transforming the Coachella website for the year 2020"
            body="With another year coming around for the festival, Goldenvoice, parent company of Coachella, needed a new theme and a new look to embody what it means to attend the priceless weekend at the grounds of Empire Polo Club. A unique challenge was that the theme not only had to embody what Coachella represents, but it also had to resonate with its target audience and loyal attendees."
          />
          <ProjectImage
            image={coachella2}
            alt="Coachella Mobile Design"
            newclass="mobile-scale-img"
          />

          <ProjectTextLeftUp
            header="Leave Your Mark"
            body="Three concepts were pitched to the client and mine was chosen. Titled 'Leave Your Mark,' the 2020 theme was all about expression and human elements of creativity. I even got the green light to create the hero animation of which we aptly dubbed 'The Spirit of Coachella'."
          />
          <ProjectImage image={coachella1} alt="Coachella Design System" />
          <ProjectTextRight
            header="Design system"
            body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
          />
          <WorkHeroVideo video="https://player.vimeo.com/video/458830722?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectTextLeft
            header="Animated illustrations"
            body="Another designer already drew up the beautiful set of illustrations to be used on the site, so we thought it would be a great idea if I were to animate them as if they were being painted in with watercolor. This effect was used in transitions, such as the hero on page load and as a user moved through the navigation. These were limited to desktop only to preserve performance on mobile."
          />
          <WorkHeroVideo video="https://player.vimeo.com/video/459585534?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectTextRight
            header="Motion studies for days"
            body="I live for motion and bringing the natural world into the products people use. For this reason, I have a plethora of animated prototypes and motion studies that were used to communicate with development on how components and pages should behave."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Coachella;
