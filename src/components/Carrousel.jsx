import "../styles/Carrousel.scss";
import { useState } from "react";
import RightArrow from "../assets/images/arrow_right.svg";
import LeftArrow from "../assets/images/arrow_left.svg";

export default function Carrousel({ images }) {
  const [index, setIndex] = useState(0);
  const hasMultipleImages = images.length > 1;
  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const handlePrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="carrousel">
      {hasMultipleImages && (
        <img
          src={LeftArrow}
          alt="previous image"
          className="left-arrow"
          onClick={handlePrevious}
        />
      )}
      <img
        src={images[index]}
        alt="current image"
        className="carrousel-image"
      />
      {hasMultipleImages && (
        <p className="carrousel-counter">
          {index + 1} / {images.length}
        </p>
      )}
      {hasMultipleImages && (
        <img
          src={RightArrow}
          alt="next image"
          className="right-arrow"
          onClick={handleNext}
        />
      )}
    </div>
  );
}
