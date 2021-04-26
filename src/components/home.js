import React from "react";



const Carousel = React.lazy(() => import("./slider"));
const About = React.lazy(() => import("./about"));
const Products = React.lazy(() => import("./jasmine-products"));
const Featured = React.lazy(() => import("./featured-products"));
const ContactUs = React.lazy(() => import("./contact"));
const BackToTopBtn = React.lazy(() => import("./back-to-top-btn"));


export default function Home() {
  return (
    <>

      <Carousel />
      <About />
      <Products />
      <Featured />
      <BackToTopBtn />
      <ContactUs />
    </>
  );
}
