import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

function SimpleSlider({ titles, images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
        <div className="slider-content" key={index}>
          <span className="slider-title">{titles[index]}</span>
          <img className="slider-image" src={img} alt={`slide-${index}`} />
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
