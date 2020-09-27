import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroVideo from "./WorkHeroVideo.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextRightUp from "./ProjectTextRightUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import usn1 from "./assets/img/usn-1.jpg";
import usn2 from "./assets/img/usn-2.jpg";
import usn3 from "./assets/img/usn-3.jpg";
import usn4 from "./assets/img/usn-4.jpg";
import usn5 from "./assets/img/usn-5.jpg";
import usn6 from "./assets/img/usn-6.jpg";
import { motion } from "framer-motion";

function USN(props) {
  return (
    <div>

        <div className="pageContainer">
          <WorkHeader title="US Nursing" meta="Product Design" />
          <WorkHeroImage
            image={usn1}
            alt="Coachella Mobile"
            newclass="mobile-scale-img"
          />
          <ProjectDescription
            detail1="Visual Design"
            detail2="Design System"
            detail3="Animation"
            detail4="Branding"
            header="Transforming the Coachella website for the year 2020"
            body="With another year coming around for the festival, Goldenvoice, parent company of Coachella, needed a new theme and a new look to embody what it means to attend the priceless weekend at the grounds of Empire Polo Club. "
          />
          <WorkHeroVideo video="https://player.vimeo.com/video/459952948?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />

          <ProjectTextLeft
            header="Leave Your Mark"
            body="Three concepts were pitched to the client and mine was chosen. Titled 'Leave Your Mark,' the 2020 theme was all about expression and human elements of creativity. I even got the green light to create the hero animation of which we aptly dubbed 'The Spirit of Coachella'."
          />
          <ProjectImage
            image={usn2}
            alt="Coachella UI"
            newclass="mobile-scale-img"
          />

          <ProjectTextRightUp
            header="Design System"
            body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
          />
          <ProjectImage image={usn3} alt="Coachella UI" />
          <ProjectTextLeft
            header="Design System"
            body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
          />
          <WorkHeroVideo video="https://player.vimeo.com/video/459954812?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectTextRight
            header="Animated Illustrations"
            body="Another designer already drew up the beautiful set of illustrations to be used on the site, so we thought it would be a great idea if I were to animate them as if they were being painted in with watercolor. This effect was used in transitions, such as the hero on page load and as a user moved through the navigation. These were limited to desktop only to preserve performance on mobile."
          />
          <ProjectImage image={usn4} alt="Coachella UI" />
          <ProjectTextLeft
            header="Brand Guidelines"
            body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
          />
          <ProjectImage image={usn5} alt="Coachella UI" />
          <ProjectTextRight
            header="Animated Illustrations"
            body="Another designer already drew up the beautiful set of illustrations to be used on the site, so we thought it would be a great idea if I were to animate them as if they were being painted in with watercolor. This effect was used in transitions, such as the hero on page load and as a user moved through the navigation. These were limited to desktop only to preserve performance on mobile."
          />
          <ProjectImage image={usn6} alt="Coachella UI" />
          <ProjectTextLeft
            header="Design System"
            body="Of course a design system was delivered and I was in charge of putting it together. Above is just a preview of the full pdf document that we handed over. This helped the Goldenvoice team continue to expand the website as needed."
          />
        </div>

    </div>
  );
}

export default USN;
