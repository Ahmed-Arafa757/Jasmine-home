import React, { useEffect } from "react";
import ReactLanguageSelect from "react-languages-select";
import "react-languages-select/css/react-languages-select.css";
import { useDispatch, useSelector } from "react-redux";
import {useHistory } from "react-router-dom";

function Navbar({ changeLang }) {
  let history = useHistory();

  const dispatch = useDispatch();
  let c = useSelector((state) => state.count.counter);
  let p = useSelector((state) => state.product.product);

  function En() {
    if (localStorage.getItem("lang") === "en") {
      return true;
    } else if (localStorage.getItem("lang") === "ar") {
      return false;
    }
  }

  const onSelectLanguage = (lang) => {
    if (lang === "en") {
      localStorage.setItem("lang", "en");

      changeLang("en");
    } else if (lang === "ar") {
      localStorage.setItem("lang", "ar");

      changeLang("ar");
    }
  };
  const ScrollingFunction = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("nav").style.backgroundColor = "white";
      document.getElementById("nav").style.zoom = "90%";
      document.getElementById("nav").style.transition =
        "all 0.5s cubic-bezier(0.8,1,1,0.8)";
      document.getElementById("logo").style.width = "80%";
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
      document.getElementById("nav").style.zoom = "100%";
      document.getElementById("logo").style.width = "100%";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollingFunction);
  }, []);
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", ScrollingFunction);
    };
  }, [p]);

  useEffect(() => {
    document.onclick = (e) => {
      if (
        e.target.id !== "togglerBtn" &&
        e.target.id !== "mySidepanel" &&
        e.target.id !== "anchors" &&
        e.target.id !== "select_flag_button" &&
        e.target.id !== "closeBtnId"
      ) {
        closeNav();
      }
    };
  });

  function openNav() {
    document.getElementById("mySidepanel").style.width = "300px";
    document.getElementsByTagName("body")[0].classList.add("nav-open");

    document.getElementsByTagName("ul")[1].style.visibility = "visible";
    document.getElementsByTagName("ul")[2].style.visibility = "visible";
    document.getElementById("menu").style.visibility = "visible";
  }

  function closeNav() {

    document.getElementById("mySidepanel").style.width = "0";
    document.getElementsByTagName("body")[0].classList.remove("nav-open");
    document.getElementsByTagName("ul")[1].style.visibility = "hidden";
    document.getElementsByTagName("ul")[2].style.visibility = "hidden";
    document.getElementById("menu").style.visibility = "hidden";
  }

  return (
    <>
      <div id='sidenav-overlay'></div>

      <nav id='nav' className='navbar  navbar-expand-lg navbar-light fixed-top'>
        <div
          className={"container-fluid " + (!En() ? " flex-row-reverse" : "")}
        >
          <a className='navbar-brand logo ' href='#'>
            <img
              id='logo'
              src='/images/navbar1.png'
              alt=''
            />
          </a>
          <div>
            <button
              onClick={() => openNav()}
              className='navbar-toggler openbtn'
              type='button'
              data-bs-toggle='collapse'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' id='togglerBtn'></span>
            </button>
          </div>
          <div
            className='collapse  navbar-collapse'
            id='navbarSupportedContent'
          >
            <ul
              className={
                "navbar-nav me-auto mb-2 mb-lg-0 " +
                (!En() ? " flex-row-reverse" : "")
              }
            >
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  {En() ? "About Us" : "معلومات عنا"}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  {En() ? "Products" : "منتجات"}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  {En() ? "Contact Us" : "اتصل بنا"}
                </a>
              </li>
              <li className='nav-item searchBox'>
                <i className='fas fa-search '></i>{" "}
                <input
                  type='text'
                  className='transparentSearchBox'
                  placeholder={
                    En() ? "Enter your keyword" : "ادخل كلمتك المفتاحيه"
                  }
                  style={En() ? { direction: "rtl", textAlign: "end" } : {}}
                />
              </li>

              <li className='ml-3'>
                <div id='languagePickerDiv'>
                  <ReactLanguageSelect
                    defaultLanguage={En() ? "en" : "ar"}
                    languages={["en", "ar"]}
                    onSelect={onSelectLanguage}
                    className='langChanger'
                  />
                </div>
              </li>

              <li>
                <i className='far fa-user '></i>
                {"        "}
                <i className='far fa-heart '> </i>
                {"    "}
                <i className='fas fa-shopping-bag '>
                  {c !== 0 ? <span className='badge'>{c}</span> : <span></span>}
                </i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id='mySidepanel' className='sidepanel'>
        <div id='menu'>{En() ? "Menu" : "القائمه"}</div>
        <a
          href='javascript:void(0)'
          class='closebtn'
          id='closeBtnId'
          onClick={() => closeNav()}
        >
          <span id='x'>&times;</span>
        </a>
        <hr />
        <ul
          className='sidePanelList text-center mb-5 '
          style={
            !En()
              ? { direction: "rtl", textAlign: "start", marginLeft: "20px" }
              : {}
          }
        >
          <li>
            <i className='far fa-user pr-5'></i>
            <div>{En() ? "Account" : "الحساب"}</div>
          </li>
          <li>
            <i className='far fa-heart '> </i>
            <div>{En() ? "Wish List" : "المفضله"}</div>
          </li>
          <li className='ml-4'>
            <i className='fas fa-shopping-bag '>
              {c !== 0 ? <span className='badge' style={!En()?{left:'21%'}:{}}>{c}</span> : <span></span>}
            </i>
            <div>{En() ? "Cart" : "السله"}</div>
          </li>
        </ul>

        <br />
        <hr />
        <ul
          id='sidePanelNavigator'
          style={
            !En()
              ? { direction: "rtl", textAlign: "start", marginRight: "20px" }
              : {}
          }
        >
          <li> {En() ? "Home" : "الرئيسيه"}</li>
          <li> {En() ? "About Us" : "معلومات عنا"}</li>
          <li> {En() ? "Product" : "المنتجات"}</li>
          <li> {En() ? "Contact Us" : "راسلنا"}</li>
          <li >
            {" "}
            <div id='languagePickerDiv'>
              <ReactLanguageSelect
                defaultLanguage={En() ? "en" : "ar"}
                languages={["en", "ar"]}
                onSelect={onSelectLanguage}
                className='langChanger'
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
