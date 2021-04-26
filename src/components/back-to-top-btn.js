import React, { useEffect } from "react";
import {  useSelector } from "react-redux";


function BackToTopBtn() {


  let p = useSelector((state) => state.product.product);

 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const BackToTopFn = () => {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  }
 
  

  useEffect(() => {
      
    window.addEventListener('scroll', BackToTopFn);

    

  }, [])
  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', BackToTopFn);

    }
  }, [p])
  return (
    <>
      <div onClick={scrollToTop} id='scrollToTopBtn' title='Go to top'>
        <i class='fas fa-chevron-up'> </i>
      </div>

      
    </>
  );
}

export default BackToTopBtn;
