import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectResults from "./ProjectResults.js";
import ProjectImage from "./ProjectImage.js";
import ProjectTextRight from "./ProjectTextRight.js";
import ProjectTextRightUp from "./ProjectTextRightUp.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import ProjectTextLeftUp from "./ProjectTextLeftUp.js";
import vailThumb from "./assets/img/vail-thumbnail.jpg";
import vail1 from "./assets/img/vail-1.jpg";
import vail2 from "./assets/img/vail-2.jpg";
import vail3 from "./assets/img/vail-3.jpg";
import vail4 from "./assets/img/vail-4.jpg";
import vail5 from "./assets/img/vail-5.jpg";
import vail6 from "./assets/img/vail-6.jpg";
import vail7 from "./assets/img/vail-7.jpg";
import vail8 from "./assets/img/vail-8.jpg";
import vail9 from "./assets/img/vail-9.jpg";
import vail10 from "./assets/img/vail-10.jpg";
import vail11 from "./assets/img/vail-11.jpg";
import vail12 from "./assets/img/vail-12.jpg";
import vail13 from "./assets/img/vail-13.jpg";
import vail14 from "./assets/img/vail-14.jpg";
import vail15 from "./assets/img/vail-15.jpg";
import vail16 from "./assets/img/vail-16.jpg";
import vail17 from "./assets/img/vail-17.jpg";
import vail18 from "./assets/img/vail-18.jpg";
import vail19 from "./assets/img/vail-19.jpg";
import vail20 from "./assets/img/vail-20.jpg";
import { motion } from "framer-motion";

function Vail(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="Vail Resorts FAQs" meta="UX Research / Strategy" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroImage
            image={vailThumb}
            alt="USN Proudct Design"
            newclass="mobile-scale-img"
          />

          <ProjectDescription
            detail1="UX Research"
            detail2="User testing"
            detail3="Strategy"
            detail4=""
            team1="1 Designer"
            team2="1 Product Manager"
            team3=""
            team4=""
            team5=""
            role1="Lead researcher"
            timeline1="5 weeks"
            header="A problem in self-service"
            body="Vail approached the team with the problem of bad customer service experiences, which became even more prevalent during the COVID pandemic. The current set of customer service and self-service that existed on the website was put to the test through massive call volumes and frustrated guests who couldn’t get clear answers to their questions. What’s more, the Vail Resorts property websites didn’t have an FAQ page—only specific page locations contained FAQ content."
            body2="The process for this project includes a few defining steps:
            Explore best practices for FAQs and self-service as stated in peer-review articles and publications, as well a comparison to competition and large-scale enterprises where support needs to be robust and covers sensitive material. Conduct stakeholder interviews to hear the problem in their words. Recruit and conduct user observational studies with a defined set of user types. A general UX audit of the experience and user’s journeys. Generate a list of recommendations for the client based on the total body of research. Finally, advise on short-term and long-term strategy to repair and improve the current self-service and support approach."
          />
          <ProjectImage
            image={vail1}
            alt="Coachella Mobile Design"
            newclass="mobile-scale-img"
          />

          <ProjectTextLeftUp
            header="Starting with research"
            body="The quickest thing I could get started on this work was to fill up my brain with research and ammunition. What are people saying about FAQs? Are there articles I can cite? Does anyone talk about specific companies doing this well? In total, I digested around 10 articles and/or publications and cited my findings."
          />
          <ProjectImage image={vail2} alt="Coachella Design System" />
          <ProjectTextRightUp
            header=""
            body="Initially, I did some quick low-fi user journeys with the persona’s before recruiting actual people. This was just an exercise to familiarize myself with the current flow of information and how the website is navigated based on a question the user type might ask."
          />
          <ProjectImage image={vail3} alt="Coachella Design System" />
          <ProjectTextLeftUp
            header="Personas"
            body="Selecting the list of users that would give us the greatest reach in our insights. This approach included multiple users from each user type of: Families, Avid skiers and snowboarders, and tourists. This list was generated based on the types of questions and their differences from person to person. We learned from stakeholder interviews that avid skiers have more complex questions, while tourists have almost no key information and so on."
          />    
          <ProjectImage image={vail4} alt="Coachella Design System" />
          <ProjectTextRightUp
            header=""
            body="We recruited users through a friends and family approach and incentivized them with gift cards. We presented three options to vail for recruiting: usertesting.com, vail’s own contact list of guests, or friends & family. Ultimately, the friends & family route was taken, mainly to keep the project on its timeline, which was short, but we were also confident we had these user types in our network."
          />   
          <ProjectTextLeftUp
            header="Observational Studies"
            body="Once we selected our users, we reached out and asked if we could run through a session and watch their behaviors and listen to their thoughts. Over the course of 2 weeks, we observed about 9 users from 3 persona groups and captured key insights."
          />
          <ProjectImage image={vail5} alt="Coachella Design System" />
          <ProjectImage image={vail6} alt="Coachella Design System" />
          <ProjectTextRightUp
            header=""
            body="As the sessions went on, my desk became cluttered with quick notes and insights that I found crucial to relay back to the Vail stakeholders. It was evident the users had some important needs not being met. "
          />   
          <ProjectImage image={vail7} alt="Coachella Design System" />
          <ProjectTextLeft
            header="Landscape Analysis"
            body="When it came time to walk Vail through the findings of the landscape and competitive analyses, I thought it important to start off with the right tone—explaining why we look at other companies. Jakob Nielson published an article on FAQs and so I leveraged his reputation to enforce the need to not deviate from what is already working on the web. "
          />
          <ProjectImage image={vail8} alt="Coachella Design System" />
          <ProjectImage image={vail9} alt="Coachella Design System" />
          <ProjectTextRightUp
            header=""
            body="Ikon is the immediate and direct competitor of Vail and they were much further along with their self-service approach than Vail. I knew this would get their attention, so I detailed what they’re doing correctly, according to research."
          />   
          <ProjectImage image={vail10} alt="Coachella Design System" />
          <ProjectTextLeftUp
            header=""
            body="Vail positions themselves as a 'larger than life' travel and tourism enterprise. Because of this, I decided to draw some comparisons to AirBnB to show them where they could be if they modeled some things after them. The company has also been able to grow at an alarming rate and this wouldn’t be possible if they weren’t able to address their hosts and traveler’s needs in an efficient way."
          />
          <ProjectImage image={vail11} alt="Coachella Design System" />
          <ProjectTextRightUp
            header=""
            body="Dropbox is another company that has grown immensely over the years. I presented this comparison because Dropbox holds its user’s potentially sensitive and invaluable information. This could include someone’s photos from their entire life, or records for their business, and so on. Because of this, they have to ensure any questions their users might have are handled at the utmost effectiveness. "
          />   
          <ProjectImage image={vail12} alt="Coachella Design System" />
          <ProjectTextLeftUp
            header=""
            body="And finally, I wrapped up this discussion with showing where Vail currently stands in this landscape—which is meant to lead the audience to the conclusion: poorly. The benefit of this format also makes it quick and visually digestible to see some action items that can improve the current experience. "
          />
          <ProjectImage image={vail13} alt="Coachella Design System" />
          <ProjectTextRightUp
            header=""
            body="I made sure to inform everyone that this is research based and driven. I’ve connected all findings back to readings, user tests, and so on."
          />   
          <ProjectTextLeftUp
            header="Recommendations & Strategy"
            body="Vail ultimately wanted some quick action items and a long-term vision for success. Based on knowing some of their internal processes and resourcing, my teammate and I generated 2 approaches accordingly. The first one was to simply link out to all the disconnected and buried FAQ sources from one central location i.e., an FAQ Page, but specifically it would accommodate the unique way their internal structure is currently setup. For this, we wrote down some pro’s and con’s and I quickly threw together a comp to show them what I was thinking. "
          />
          <ProjectImage image={vail14} alt="Coachella Design System" />
          <ProjectImage image={vail15} alt="Coachella Design System" />
          <ProjectImage image={vail16} alt="Coachella Design System" />
          <ProjectTextRightUp
            header=""
            body="The recommended option was to skip the basic FAQ page and start producing the full blown Help Center. This would be the best use of time and resources to bring Vail up to the best practices and industry standards, even if it isn’t fully released come ski season."
          />   
          <ProjectImage image={vail17} alt="Coachella Design System" />
          <ProjectImage image={vail18} alt="Coachella Design System" />
          <ProjectImage image={vail19} alt="Coachella Design System" />
          <ProjectTextLeftUp
            header=""
            body="Because the help center approach is generally more involved, I simply showed some strong examples of what the page would encompass. Vail also wanted some 3rd party solutions vetted, so I presented a quick and dirty list of options for them. I spent a couple days doing a little market research on who the leading players in the space were, but that was about the extent of my efforts there."
          />
          <ProjectImage image={vail20} alt="Coachella Design System" />
          <ProjectResults
            header="The results"
            body="Vail was convinced in the direction we provided and understood the importance of a comprehensive help center. Thus, Vail worked with Zendesk to create a repository of all things customer resources. The help center has successfully reduced call volume and labor required to keep customers informed and stress-free."
            linkCallout="View live at "
            href="https://vail.zendesk.com/hc/en-us"
            linkTitle="Vail Help Center"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Vail;
