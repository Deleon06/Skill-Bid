import React, { useState, useEffect, useRef } from "react";
import { sliderData } from './SliderData';
import './ImageSlider.css';



export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const timeout = useRef(null);


  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    timeout.current = setTimeout(nextSlide, 8000);
    return () => clearTimeout(timeout.current);
  }, [current, length]);

  
  if (!Array.isArray(sliderData) || sliderData.length <= 0) return null;

  return (
    <div className="slider">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <div className='SlideDiv'>
                <img src={slide.image} alt="goods-img" className="sliderImg"
                  width="1000px" height="300px" /></div>
                {window.innerWidth > 420 ? (
                  <div className="sliderName">{slide.name}</div>
                  ) : null}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}