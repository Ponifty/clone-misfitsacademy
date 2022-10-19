// import React from "react";
import Navbar from "./Navbar.jsx";

export default function Header() {
  return (
    <header>
      <Navbar />
      <img
        className="header-logo"
        src={"images/MisfitsAcademyLogoPurpleWhite.PNG"}
        alt="Logo Misfits Academy"
      />
    </header>
  );
}
