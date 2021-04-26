import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Products() {
  function En() {
    if (localStorage.getItem("lang") === "en") {
      return true;
    } else if (localStorage.getItem("lang") === "ar") {
      return false;
    }
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className='container-fluid'>
        <div
          className='row mt-5'
          style={!En() ? { textAlign: "start", direction: "rtl" } : {}}
        >
          <div className='col-12 col-lg-5'>
            <h1 id='jasmineProducts'>
              {En() ? "JASMINE PRODUCTS" : "منتجات چاسمن"}
            </h1>
          </div>
          <div className='col-lg-7'></div>
        </div>
      </div>

      <div className='row'>
        <div className='col-xl-6'>
          <br />
          <br />
          <br />{" "}
          <div
            id='card'
            className='card mb-3 ml-3 mt-5'
            data-aos='fade-up'
            style={{ height: "100%" }}
          >
            <div className='row g-0 crop'>
              <div className='col-md-4  position-relative'>
                <div className='position-absolute bg-white top-0 croppingElem'>
                  hello
                </div>
                <img
                  style={{ height: "100%" }}
                  src='/images/jasmin1.jpg'
                  alt='...'
                />
                <div className='position-absolute bg-white croppingElem bott'>
                  hello
                </div>
              </div>
              <div className='col-md-8'>
                <div
                  className='card-body mt-xl-4 ml-xl-5'
                  style={
                    !En()
                      ? {
                          direction: "rtl",
                          textAlign: "start",
                        }
                      : {}
                  }
                >
                  <p className='card-title ml-xl-2'>
                    {En()
                      ? "Ultra-Soft Bath Towel"
                      : "منشفة حمام فائقة النعومة"}
                  </p>
                  <p className='card-text ml-xl-2' id='card-text'>
                    {En()
                      ? " OUR PANEL LOVED THE FEEL AND GAVE THESE TOWELS."
                      : " نص عشوائي نص عشوائي نص عشوائي"}
                  </p>
                  <p className='card-text ml-xl-2' id='shopNow'>
                    {En() ? "SHOP NOW" : "اشتري الآن"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-6 '>
          {" "}
          <div
            id='card'
            className='card mb-3 ml-3'
            data-aos='fade-up'
            style={{ height: "100%" }}
          >
            <div className='row g-0 crop'>
              <div className='col-md-4 position-relative'>
                <div className='position-absolute bg-white top-0 croppingElem'>
                  hello
                </div>
                <img
                  style={{ height: "100%" }}
                  src ='/images/jasmin2.jpg'
                  alt='...'
                />
                <div className='position-absolute bg-white croppingElem bott'>
                  hello
                </div>
              </div>
              <div className='col-md-8'>
                <div
                  className='card-body mt-xl-4  ml-xl-5'
                  style={!En() ? { direction: "rtl", textAlign: "start" } : {}}
                >
                  <p className='card-title ml-xl-2'>
                    {En() ? "Textile Experts" : "خبراء النسيج"}
                  </p>
                  <p className='card-text ml-xl-2' id='card-text'>
                    {En()
                      ? "Lorem ipsum dolor sit amet consectetur."
                      : " نص عشوائي نص عشوائي نص عشوائي"}
                  </p>
                  <p className='card-text ml-xl-2' id='shopNow'>
                    {En() ? "SHOP NOW" : "اشتري الآن"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-xl-6'>
          <div
            id='card'
            className='card mb-3 ml-3 '
            data-aos='fade-up'
            style={{ height: "100%", marginTop: "10rem" }}
          >
            <div className='row g-0 crop'>
              <div className='col-md-4 position-relative'>
                <div className='position-absolute bg-white top-0 croppingElem'>
                  hello
                </div>
                <img
                  style={{ height: "100%" }}
                  src = '/images/jasmin3.jpg'
                  alt='...'
                />
                <div className='position-absolute bg-white croppingElem bott'>
                  hello
                </div>
              </div>
              <div className='col-md-8'>
                <div
                  className='card-body mt-xl-4 ml-xl-5'
                  style={
                    !En()
                      ? {
                          direction: "rtl",
                          textAlign: "start",
                        }
                      : {}
                  }
                >
                  <p className='card-title ml-xl-2'>
                    {En() ? " Face Cloths" : "اغراض الوجه"}
                  </p>
                  <p className='card-text ml-xl-2' id='card-text'>
                    {En()
                      ? "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur."
                      : " نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي"}
                  </p>
                  <p className='card-text ml-xl-2' id='shopNow'>
                    {En() ? "SHOP NOW" : "اشتري الآن"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-6 '>
          <div
            id='card'
            className='card mb-3 ml-3 mt-5'
            data-aos='fade-up'
            style={{ height: "100%" }}
          >
            <div className='row g-0 crop'>
              <div className='col-md-4 position-relative'>
                <div className='position-absolute bg-white top-0 croppingElem'>
                  hello
                </div>
                <img
                  style={{ height: "100%" }}
                  src = '/images/jasmin4.jpg'
                  alt='...'
                />
                <div className='position-absolute bg-white croppingElem bott'>
                  hello
                </div>
              </div>
              <div className='col-md-8'>
                <div
                  className='card-body mt-xl-4 ml-xl-5'
                  style={
                    !En()
                      ? {
                          direction: "rtl",
                          textAlign: "start",
                        }
                      : {}
                  }
                >
                  <p className='card-title ml-xl-2'>
                    {En() ? "Soft Colors" : "ألوان ناعمة"}
                  </p>
                  <p className='card-text ml-xl-2' id='card-text'>
                    {En()
                      ? "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur."
                      : " نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي"}
                  </p>
                  <p className='card-text ml-xl-2' id='shopNow'>
                    {En() ? "SHOP NOW" : "اشتري الآن"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
