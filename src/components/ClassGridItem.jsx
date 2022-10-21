// import React from "react";

export default function ClassGridItem() {
  const infosClassesItems = [
    {
      id: 1,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIAIRE / AVANCÉ",
    },
    {
      id: 2,
      title: "STREET-JAZZ",
      public: "ADULTES",
      level: "TOUS NIVEAUX",
    },
    {
      id: 3,
      title: "CAMPUS BREAKDANCE",
      public: "SUAPS",
      level: "TOUS NIVEAUX",
    },
    {
      id: 4,
      title: "HIP-HOP CHOREO",
      public: "ADULTES",
      level: "INTERMÉDIAIRE",
    },
    {
      id: 5,
      title: "FEMME STYLE",
      public: "ADULTES",
      level: "TOUS NIVEAUX",
    },
    {
      id: 6,
      title: "HIP-HOP FRESH CLASS",
      public: "ADULTES",
      level: "TOUS NIVEAUX",
    },
    {
      id: 7,
      title: "CAMPUS HIP-HOP",
      public: "SUAPS",
      level: "TOUS NIVEAUX",
    },
    {
      id: 8,
      title: "OPEN STYLE",
      public: "ADULTES",
      level: "TOUS NIVEAUX",
    },
    {
      id: 9,
      title: "VARSITY CLASS",
      public: "13 - 17 ANS",
      level: "TOUS NIVEAUX",
    },
    {
      id: 10,
      title: "JUNIOR CLASS",
      public: "7-12 ANS",
      level: "DÉBUTANTS",
    },
  ];
  const infosClassesItem = infosClassesItems.map((item, index) => (
    <div
      key={item.id}
      className={`class-grid__item class-grid__item${item.id}`}
    >
      <h3>{item.title}</h3>
      <p>{item.public}</p>
      <p>{item.level}</p>
      <button>+ d'infos</button>
    </div>
  ));
  return <>{infosClassesItem}</>;
}
