// import React from "react";
import ClassCarousel from "./ClassCarousel.jsx";
import ClassGrid from "./ClassGrid.jsx";

export default function ClassLayout() {
  return (
    <main className="class-container">
      <h1>Cours - Styles - Niveaux</h1>
      <ClassCarousel />
      <ClassGrid />
    </main>
  );
}
