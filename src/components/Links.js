import React from "react";
import "../styles/Links.css";

export default function Links() {
  return (
    <ul className="main-links">
      <li>
        <a href="#work">Work</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/matterformat"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
}
