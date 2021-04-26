import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../css/slider-animations.css";
import "../css/slider-styles.css";

const content = [
  {
    title: "100% Egyptian Cotton Towels",

    button: "Shop Now",
    image:
      "/images/slider1.jpg",

    Artitle: " ٪۱۰۰ مناشف قطن مصري ",
    Arbutton: "تسوق الآن",
    Arimage:
      "/images/slider1.jpg",
  },
  {
    title: "A Treat of Luxury",
    button: "Shop Now",
    image:
      "/images/slider2.jpg",

    Artitle: "متعة الفخامة",
    Arbutton: "تسوق الآن",
    Arimage:
      "/images/slider2.jpg",
  },
  {
    title: "Best Bath Towels",
    description: "According to Textile Experts",
    button: "Feed Back",
    image:
      "/images/slider3.jpg",

    Artitle: "أفضل مناشف الحمام",
    Ardescription: "بحسب خبراء النسيج",
    Arbutton: "تعليق",
    Arimage:
      "/images/slider3.jpg",
  },
  {
    title: "Elegant European Design",
    button: "Shop Now",
    image:
      "/images/slider4.jpg",

    Artitle: "تصميم أوروبي أنيق",
    Arbutton: "تسوق الآن",
    Arimage:
      "/images/slider4.jpg",
  },
];

function En() {
  if (localStorage.getItem('lang') === 'en') {
    return true
  } else if (localStorage.getItem('lang') === 'ar') {
    return false
  }
}

function SliderItem({ item }) {
  return (
    <>
      <div
        className='slider-content'
        style={{ background: `url('${item.image}') no-repeat center center` }}
      >
        {
          En() ? (
          <div className='inner'>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button> {item.button} </button>
          </div>
        ) : (
          <div className='inner'>
            <h1>{item.Artitle}</h1>
            <p>{item.Ardescription}</p>
            <button> {item.Arbutton} </button>
          </div>
        )}

        
      </div>
    </>
  );
}

const Carousel = () => (
  <div>
    <Slider className='slider-wrapper' autoplay={1500}>
      {content.map((item, index) => (
        <div
          key={index}
          className='slider-content'
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          {En() ? (
            <div className='inner'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button className='sliderAnimatedBtn specialHoveringEffect'>
                {" "}
                {item.button}{" "}
              </button>
            </div>
          ) : (
            <div className='inner'>
              <h1>{item.Artitle}</h1>
              <p>{item.Ardescription}</p>
              <button className='sliderAnimatedBtn specialHoveringEffect'>
                {" "}
                {item.Arbutton}{" "}
              </button>
            </div>
          )}
        </div>
      ))}
    </Slider>
  </div>
);



export default Carousel;
