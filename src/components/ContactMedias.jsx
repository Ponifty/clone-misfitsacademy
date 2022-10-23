// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

export default function ContactMedias() {
  return (
    <div className="contact-socialmedia-box">
      <FontAwesomeIcon
        className="contact-socialmedia contact-socialmedia--insta"
        icon={faInstagram}
      />
      <FontAwesomeIcon
        className="contact-socialmedia contact-socialmedia--facebook"
        icon={faSquareFacebook}
      />
    </div>
  );
}
