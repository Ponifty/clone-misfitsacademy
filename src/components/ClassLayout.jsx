// import React from "react";
import ClassCarousel from "./ClassCarousel.jsx";
import ClassGrid from "./ClassGrid.jsx";

export default function ClassLayout() {
  return (
    <>
      <div className="class-logo">
        <img
          src={"images/MisfitsAcademyLogoPurpleWhite.PNG"}
          alt="Logo Misfits Academy"
        />
      </div>
      <h1 className="class-title">Cours - Styles - Niveaux</h1>
      <ClassCarousel />
      <ClassGrid />
    </>
  );
}
