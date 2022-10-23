// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

export default function ContactMedias() {
  const facebookLink = "https://www.facebook.com/misfitsacademy";
  const instaLink = "https://www.instagram.com/misfitsacademy/";
  return (
    <div className="contact-socialmedia-box">
      <a href={instaLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          className="contact-socialmedia contact-socialmedia--insta"
          icon={faInstagram}
        />
      </a>
      <a href={facebookLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          className="contact-socialmedia contact-socialmedia--facebook"
          icon={faSquareFacebook}
        />
      </a>
    </div>
  );
}
