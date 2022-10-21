// import React from "react";

export default function Navbar() {
  const link = "#";
  return (
    <ul className="navbar">
      <li>
        <a href={link}>Misfits Academy</a>
      </li>
      <li>
        <a href={link} className="active">
          Cours
        </a>
      </li>
      <li>
        <a href={link}>Inscription</a>
      </li>
      <li>
        <a href={link}>Contact</a>
      </li>
    </ul>
  );
}
