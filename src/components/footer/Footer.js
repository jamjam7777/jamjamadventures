import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section>
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/jamie-devine/">
            <FontAwesomeIcon icon={faLinkedin} inverse/>
          </a>
        </li>
        <li>
          <a href="https://github.com/jamjam7777">
            <FontAwesomeIcon icon={faGithub} inverse/>
          </a>
        </li>
        <li>
          <a href="https://discordapp.com/users/953099345329274981">
            <FontAwesomeIcon icon={faDiscord} inverse/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/jamiejdevine/">
            <FontAwesomeIcon icon={faInstagram} inverse/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
