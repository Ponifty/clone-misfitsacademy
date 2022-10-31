// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

const ContactMediaLink = ({
  name,
  className = `contact-socialmedia contact-socialmedia--${name}`,
  icon,
  path,
}) => (
  <a href={path} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon name={name} icon={icon} className={className} />
  </a>
);

export default function ContactMedias() {
  const facebookLink = "https://www.facebook.com/misfitsacademy";
  const instaLink = "https://www.instagram.com/misfitsacademy/";
  return (
    <div className="contact-socialmedia-box">
      <ContactMediaLink name={"insta"} icon={faInstagram} path={instaLink} />
      <ContactMediaLink
        name={"facebook"}
        icon={faSquareFacebook}
        path={facebookLink}
      />
    </div>
  );
}
