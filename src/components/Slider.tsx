import { useState } from "react";
import { SliderProps } from "../types";
import "../styles/slider.scss";

const Slider = ({ images, name }: SliderProps) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => prev >= (images.length -1) ? images.length -1 : prev += 1);
  }
  const previous = () => {
    setIndex((prev) => prev <= 0 ? 0 : prev -= 1);
  }

  return (
    <div className="popup-img">
      <img src={images[index]} alt={name} />
      <button onClick={previous} type="button" className="btn next" style={{display: index <= 0 ? 'none':'inline-block'}}>&#10094;</button >
      <button onClick={next} type="button" className="btn prev" style={{display: index >= (images.length -1) ? 'none':'inline-block'}}>&#10095;</button >
    </div>
  );
};

export default Slider;