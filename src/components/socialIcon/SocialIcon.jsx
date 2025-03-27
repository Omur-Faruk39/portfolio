import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SocialIcon({isBorder}) {


  const socialIcon = [
    {
      id: 1,
      icon: faXTwitter,
      link: "https://twitter.com/omurfaruk",
    },
    {
      id: 2,
      icon: faFacebook,
      link: "https://twitter.com/omurfaruk",
    },
    {
      id: 3,
      icon: faGithub,
      link: "https://twitter.com/omurfaruk",
    },
    {
      id: 4,
      icon: faLinkedin,
      link: "https://twitter.com/omurfaruk",
    },
  ];

  return (
    <>
      {socialIcon.map((item) => (
        <a key={item.id} href="item.link" target="_blank" rel="noreferrer" className={isBorder ? 'isBorder' : ''}>
          {" "}
          <FontAwesomeIcon
            className="icon"
            icon={item.icon}
          />{" "}
        </a>
      ))}
    </>
  );
}

export default SocialIcon;
