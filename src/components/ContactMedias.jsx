// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function ContactMedias() {
  return (
    <div className="contact-socialmedia-box">
      <FontAwesomeIcon className="contact-socialmedia" icon={faInstagram} />
      <FontAwesomeIcon className="contact-socialmedia" icon={faFacebook} />
    </div>
  );
}
