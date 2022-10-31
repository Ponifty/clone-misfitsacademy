// import React from "react";

const NavbarLink = ({ name, path = "#", className }) => (
  <a href={path} className={className}>
    {name}
  </a>
);

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <NavbarLink name={"Misfits Academy"}></NavbarLink>
      </li>
      <li>
        <NavbarLink name={"Cours"} className={"active"}></NavbarLink>
      </li>
      <li>
        <NavbarLink name={"Inscription"}></NavbarLink>
      </li>
      <li>
        <NavbarLink name={"Contact"}></NavbarLink>
      </li>
    </ul>
  );
}
