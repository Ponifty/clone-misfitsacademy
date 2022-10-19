// import React from "react";

export default function ClassSlideCarousel() {
  const classSlides = [
    { id: 1, path: "images/InesMisfitsAcademy2022.jpg", desc: "Ines" },
    { id: 2, path: "images/AbrahamMisfitsAcademy2022.jpg", desc: "Abraham" },
    { id: 3, path: "images/JulineMisfitsAcademy2022.jpg", desc: "Juline" },
    { id: 4, path: "images/NhoxMisfitsAcademy2022.jpg", desc: "Nhox" },
    { id: 5, path: "images/VenusMisfitsAcademy2022.jpg", desc: "Venus" },
    { id: 6, path: "images/DylanMisfitsAcademy2022.jpg", desc: "Dylan" },
    { id: 7, path: "images/NiftyMisfitsAcademy2022.jpg", desc: "Nifty" },
    { id: 8, path: "images/LorineMisfitsAcademy2022.jpg", desc: "Lorine" },
  ];
  const classSlide = classSlides.map((slide, index) => (
    <div key={slide.id} className="class-carousel__item">
      <img src={slide.path} alt={slide.desc}></img>
    </div>
  ));
  return <>{classSlide}</>;
}
