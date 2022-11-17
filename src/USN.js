import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroVideo from "./WorkHeroVideo.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectResults from "./ProjectResults.js";
import ProjectDescriptionUp from "./ProjectDescriptionUp.js";
import ProjectImage from "./ProjectImage.js";
import ProjectImageLast from "./ProjectImageLast.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextRightUp from "./ProjectTextRightUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import ProjectTextLeftUp from "./ProjectTextLeftUp";
import usn1 from "./assets/img/usn-1.jpg";
import usn2n from "./assets/img/usn-2n.jpg";
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

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroImage
            image={usn1}
            alt="USN Proudct Design"
            newclass="mobile-scale-img"
          />
          <ProjectDescriptionUp
            detail1="Visual Design"
            detail2="Design System"
            detail3="Animation"
            detail4="Branding"
            team1="2 Designers"
            team2="1 Product Manager"
            team3="4 Engineers"
            timeline1="6 months"
            header="Coordinating strike nurses at a moments notice"
            body="US Nursing specializes in placing nurses where they're needed most during critical strikes. Oftentimes hospitals become short staffed in key moments and they rely on services such as US Nursing to keep things moving along promptly, and efficiently. The problem they faced was that the onboarding experience was a huge barrier to entry for many users and the app needed to be simplified so that new users could sign up easily and leave it. "
          />
          <WorkHeroVideo video="https://player.vimeo.com/video/459952948?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />

          <ProjectTextLeft
            header="Talking to nurses, the end-users"
            body="After doing some qualitative research and user interviews, it became clear in the original release of the app nurses were becoming frustrated during the account creation process. This friction as a problem aligned with business goals leading to the update to making this user flow fluid and intuitive."
          />
          <ProjectImage
            image={usn2n}
            alt="USN main screens"
            newclass="mobile-scale-img"
          />

          <ProjectTextRightUp
            header="The core experience"
            body="My lead and myself worked on key user goals with nurses to refine the profile experience, assignment application, assignment browsing, and nurse credentials. In these areas, an improvement in the flow would mean more nurse candidates, more applications, and ultimately, more placements during critical strikes."
          />
          <ProjectImage
            image={usn2}
            alt="USN Proudct Design Onboarding"
            newclass="mobile-scale-img"
          />

          <ProjectTextLeftUp
            header="Informative and welcoming"
            body="Onboarding screens were deemed crucial for alleviating the potential stress of information overload. For this reason, I designed a large set of illustrations that would eventually animate and aid in a more pleasant experience as users entered the key areas of the app."
          />
          <ProjectImage image={usn3} alt="USN Proudct Design System" />
          <ProjectTextLeft
            header="Design system"
            body="I put together all the working parts of the design system inside Figma to foster consistency and to serve as a foundation for the new designs. This helped the visual design move forward without redundancy."
          />
          <WorkHeroVideo video="https://player.vimeo.com/video/463651346?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectTextRight
            header="Delightful animations"
            body="Some finishing touches to the UI included some extra brand enforcers to tie everything together."
          />
          <WorkHeroVideo video="https://player.vimeo.com/video/459954812?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectTextLeft
            header="Playful loader"
            body="The example above is a loader animation which takes a playful approach of the N from the new logo, and swaps between the two primary brand colors."
          />
          <WorkHeroVideo video="https://player.vimeo.com/video/514990080?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectTextLeft
            header="A new logo"
            body="As the face of the company, the logo had to be redesigned and modernized to embody tones of speed, trust, and credibility."
          />
          <ProjectImage image={usn4} alt="USN Branding" />
          <ProjectTextRight
            header="Brand guidelines"
            body="This project started off with a branding initiative that I lead and owned fully. This involved an update of logo, color, typography, graphic form, and more, and served as the backbone for the visual design of the app as the project progressed."
          />
          <ProjectImage image={usn5} alt="USN Branding" />
          <ProjectTextLeft
            header="Setting the rules"
            body="Of course, I created a set of rules to adhere to in order for the brand to succeed to the fullest. Here are some examples of what can be found inside the guidelines document."
          />
          <ProjectImage image={usn6} alt="USN Branding" />
          <ProjectResults
            detail1=""
            detail2=""
            detail3=""
            detail4=""
            team1=""
            timeline1=""
            header="The results"
            body="US Nursing informed us nurse profile completion increased dramatically. The nurses also had a greater comprehension of what was required of them when entering into pool of strike nurses. Lastly, the brand update also increased the level of trust the nurses have in the brand."
            linkCallout=""
            href=""
            linkTitle=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default USN;
