// import React from "react";

export default function ClassGridItem() {
  const infosClassesItems = [
    {
      id: 1,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIARE / AVANCÉ",
    },
    {
      id: 2,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIARE / AVANCÉ",
    },
    {
      id: 3,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIARE / AVANCÉ",
    },
    {
      id: 4,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIARE / AVANCÉ",
    },
    {
      id: 5,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIARE / AVANCÉ",
    },
    {
      id: 6,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIARE / AVANCÉ",
    },
    {
      id: 7,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIARE / AVANCÉ",
    },
    {
      id: 8,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIARE / AVANCÉ",
    },
    {
      id: 9,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIARE / AVANCÉ",
    },
    {
      id: 10,
      title: "STREET DANCE PERFOMANCE",
      public: "ADULTES",
      level: "INTERMÉDIARE / AVANCÉ",
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
