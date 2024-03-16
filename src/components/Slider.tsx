import { useState } from "react";
import { SliderProps } from "../types";

const Slider = ({ images, name }: SliderProps) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => prev >= (images.length -1) ? 0 : prev += 1);
  }
  const previous = () => {
    setIndex((prev) => prev <= 0 ? 0 : prev -= 1);
  }

  return (
    <div className="popup-img">
      <img src={images[index]} alt={name} />
      <button onClick={previous} type="button">&#10094;</button >
      <button onClick={next} type="button">&#10095;</button >
    </div>
  );
};

export default Slider;