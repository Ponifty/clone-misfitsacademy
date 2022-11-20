// import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Misfits Academy</Link>
      </li>
      <li>
        <Link to="/cours" className={"active"}>
          Cours
        </Link>
      </li>
      <li>
        <Link to="/inscription">Inscription</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}
