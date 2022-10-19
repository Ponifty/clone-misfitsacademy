// import React from "react";
import ClassSlideCarousel from "./ClassSlideCarousel.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function ClassCarousel() {
  return (
    <article className="class-carousel">
      <FontAwesomeIcon
        className="class-carousel__arrow class-carousel__arrow--left"
        icon={faChevronLeft}
      />
      <FontAwesomeIcon
        className="class-carousel__arrow class-carousel__arrow--right"
        icon={faChevronRight}
      />
      <ClassSlideCarousel />
    </article>
  );
}
