import React from "react";

function ContactUs() {

   function En() {
     if (localStorage.getItem("lang") === "en") {
       return true;
     } else if (localStorage.getItem("lang") === "ar") {
       return false;
     }
   }
  
  return (
    <>
      <br /> <br />
      <div className={"row mt-5 " + (!En() ? " flex-row-reverse" : "")}>
        <div
          className='col-lg-6'
          style={!En() ? { direction: "rtl", textAlign: "start" } : {}}
        >
          <h1 id='contactInfo' className={En() ? "ml-5" : "mr-5"}>
            {En() ? "CONTACT INFO" : "اتصل بنا"}
          </h1>
          <p id='contactPara' className={En() ? "ml-5" : "mr-5"}>
            {En()
              ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nemo quib veritatis quasi."
              : " نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي نص عشوائي"}
          </p>
          <div className={En() ? "ml-5" : "mr-5"}>
            <div>
              <i className='fas fa-map-marker-alt  contactUsIcons'></i>{" "}
              <span className=' ml-2 info'>
                {En()
                  ? "Dambo dika,USA,road 123"
                  : " ۱۲۳دامبو ديكا الولايات المتحدة الأمريكية ، طريق "}
              </span>
            </div>
            <div>
              <i className='fas fa-envelope contactUsIcons'></i>{" "}
              <span className=' ml-2 info'>dotsee@one.com</span>
            </div>
            <div>
              <i className='fas fa-phone contactUsIcons'></i>{" "}
              <span className=' ml-2 info'>
                {En() ? "+11-987654321" : "+۱۱-۹۸٧٦٥٤۳۲۱۱"}
              </span>
            </div>
          </div>
          <p className={" mt-4 " + (En() ? "ml-5" : "mr-5")} id='followUs'>
            {" "}
            {En() ? "Follow Us" : "تابعنا"}
          </p>
          <div className={"mt-2 " + (En() ? "ml-2 " : "mr-5")}>
            <i className='fab fa-facebook-f ml-5'></i>
            <i className='fab fa-pinterest ml-5'></i>
            <i className='fab fa-twitter ml-5'></i>
            <i className='fab fa-instagram ml-5'></i>
          </div>
        </div>

        <div className='col-lg-5 col-10'>
          <img
            className={'img-fluid ' + (En()? 'ml-4' : '')}
            src ="/images/contact1.jpg"
            alt=''
          />
        </div>
        <div className='col-lg-1 col-2'> </div>
      </div>
      <br />
      <br />
      <div
        className={"row mt-5" + (!En() ? " flex-row-reverse" : "")}
        style={!En() ? {direction:'rtl' , textAlign:'start'} :{}}
        id='subscribeNewsCover'
      >
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
          <h1 className='text-white ' id='subscribeNews'>
            {En() ? "SUBSCRIBE NEWSLETTER" : "اشترك في النشرة الإخبارية"}
          </h1>
          <p className='text-white' id='subscribeNewsPara'>
            {En()
              ? "Hi ! Use the link below to verify your email and start enjoying cleanmock."
              : "أهلا ! استخدم الرابط أدناه للتحقق من بريدك الإلكتروني والبدء في الاستمتاع"}
          </p>
        </div>
        <div className='col-lg-5 mt-5 '>
          <div class='input-group mb-3 inputWithLabel'>
            <input
              id='subscribeNewsInput'
              type='text'
              className='form-control'
              placeholder={
                En() ? "Enter Your Keywords..." : "ادخل كلمتك المفتاحيه"
              }
              aria-label="Recipient's username"
              aria-describedby='button-addon2'
            />
            <button className='btn ' type='button' id='button-addon2'>
              <i className='far fa-envelope-open'></i>
            </button>
          </div>
          <div id='email'>
            {En() ? "Questions? Email us at" : "أسئلة؟ راسلنا على"}{" "}
            <span className='text-white'>feedback@jasmine.com</span>
          </div>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-6 mt-5'>
          <br />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
