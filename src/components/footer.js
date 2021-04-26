import React from "react";

function Footer() {
 function En() {
   if (localStorage.getItem("lang") === "en") {
     return true;
   } else if (localStorage.getItem("lang") === "ar") {
     return false;
   }
 }

  return (
    <>
      <div className={"row footer " + (!En() ? "flex-row-reverse" : "")}>
        <div className='col-lg-3  text-sm-center footerLinks'>
          <img
            className='ml-5'
            src='/images/footer1.png'
            alt=''
          />
        </div>
        <div className='col-lg-3  text-sm-center footerLinks'>
          <p className=' footerTitles'>{En() ? " Top Links" : "أهم الروابط"}</p>
          <p>{En() ? "About Us" : "معلومات عنا"}</p>
          <p>{En() ? "Bath Towels" : "مناشف الحمام"}</p>
          <p>{En() ? "Face Towels" : "مناشف الوجه"}</p>
          <p>{En() ? "Contact Us" : "اتصل بنا"}</p>
        </div>
        <div className='col-lg-3  text-sm-center footerLinks'>
          <p className=' footerTitles'>{En() ? "My Account" : "حسابي"}</p>
          <p>{En() ? "My Profile" : "ملفي"}</p>
          <p>{En() ? "Shopping Cart" : "عربة التسوق"}</p>
          <p>{En() ? "Wish List" : "قائمة الرغبات"}</p>
          <p>{En() ? "Logout" : "تسجيل خروج"}</p>
        </div>
        <div className='col-lg-3  text-sm-center footerLinks'>
          <p className=' footerTitles'>{En() ? "Our Terms" : "شروطنا"}</p>
          <p>{En() ? "Privacy Policy" : "سياسة الخصوصية"}</p>
          <p>{En() ? "Terms and Conditions" : "الأحكام والشروط"}</p>
          <p>{En() ? "FAQ" : "الاسأله اكثر شيوعا"}</p>
        </div>

        <div className='col-lg-1'></div>
        <div className='col-lg-10'>
          {" "}
          <hr
            style={{
              color: "grey",
              backgroundColor: "grey",
              height: "3",
              textAlign: "center",
            }}
          />
        </div>
        <div className='col-lg-1'></div>

        <div className={" mt-3 mb-3 " + (En() ? "col-lg-9" : "col-lg-3")}>
          <i className='fab fa-facebook-f ml-5'></i>
          <i className='fab fa-pinterest ml-5'></i>
          <i className='fab fa-twitter ml-5'></i>
          <i className='fab fa-instagram ml-5'></i>
        </div>
        <div
          className={"mt-3 mb-3 " + (En() ? "col-lg-3" : "col-lg-9")}
        >
          © 2021 <span style={{ color: "#ceae6d" }}>PSdigital.All</span>
          {En() ? "Rights Reserved." : "الحقوق محفوظة."}{" "}
        </div>
      </div>
    </>
  );
}

export default Footer;
