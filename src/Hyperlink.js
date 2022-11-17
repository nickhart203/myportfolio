import React from "react";
import "./App.css";

function ProjectLinkout(props) {
  return (
    <section>
      <p>
      {props.linkCallout}
        <a href={props.href} className="line-link-sm" target="_blank">
          {props.linkTitle}
        </a>
      </p>
    </section>
  );
}

export default ProjectLinkout;
