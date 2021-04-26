import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "../store/action/counter";
import { sendProduct } from "../store/action/product";
import { Link, useHistory } from "react-router-dom";

function Featured() {
  let history = useHistory();

  const [activeItem, setActiveItem] = useState(1);
  const [featuredCategory, setFeaturedCategory] = useState("Towels");

  let c = useSelector((state) => state.count.counter);

  const dispatch = useDispatch();

  

  const listItems = [
    { id: 1, text: "Towels", Artext: "مناشف" },
    { id: 2, text: "Kitchen Towels", Artext: "مناشف المطبخ" },
    { id: 3, text: "Bed Sheets", Artext: "ملاءات السرير" },
  ];

  const [featuredTowels, setFeaturedTowels] = useState([
    {
      id: 1,
      image:
        "/images/featured1.jpg",
      title: "Jasmine Towels",
      Artitle: "مناشف چاسمن",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
    {
      id: 2,
      image:
        "/images/featured1.jpg",
      title: "Jasmine Towels",
      Artitle: "مناشف چاسمن",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
    {
      id: 3,
      image:
        "/images/featured1.jpg",
      title: "Jasmine Towels",
      Artitle: "مناشف چاسمن",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
    {
      id: 4,
      image:
        "/images/featured1.jpg",
      title: "Jasmine Towels",
      Artitle: "مناشف چاسمن",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
  ]);

  const [featuredKitchenTowels, setFeaturedKitchenTowels] = useState([
    {
      id: 1,
      image:
        "/images/featured2.jpg",
      title: "Jasmine Kitchen Towels",
      Artitle: "مناشف مطبخ چاسمين",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
    {
      id: 2,
      image:
        "/images/featured2.jpg",
      title: "Jasmine Kitchen Towels",
      Artitle: "مناشف مطبخ چاسمين",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
    {
      id: 3,
      image:
        "/images/featured2.jpg",
      title: "Jasmine Kitchen Towels",
      Artitle: "مناشف مطبخ چاسمين",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
    {
      id: 4,
      image:
        "/images/featured2.jpg",
      title: "Jasmine Kitchen Towels",
      Artitle: "مناشف مطبخ چاسمين",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
  ]);

  const [featuredBedSheets, setFeaturedBedSheets] = useState([
    {
      id: 1,
      image:
        "/images/featured3.jpg",
      title: "Jasmine Bed Sheets",
      Artitle: "ملاءات سرير چاسمن",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
    {
      id: 2,
      image:
        "/images/featured3.jpg",
      title: "Jasmine Bed Sheets",
      Artitle: "ملاءات سرير چاسمن",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
    {
      id: 3,
      image:
        "/images/featured3.jpg",
      title: "Jasmine Bed Sheets",
      Artitle: "ملاءات سرير چاسمن",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
    {
      id: 4,
      image:
        "/images/featured3.jpg",
      title: "Jasmine Bed Sheets",
      Artitle: "ملاءات سرير چاسمن",
      sign: "fas fa-plus",
      description: "Lorem ipsum dolor sit amet consectetur.",
      Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
      price: "590$",
      Arprice: "٥۹۰$",
    },
  ]);



  const toggle = (index, sign) => {
    let updatedSign = "";

    if (sign === "fas fa-plus") {
      updatedSign = "fas fa-minus";
    } else {
      updatedSign = "fas fa-plus";
    }

    switch (featuredCategory) {
      case "Towels":
        ((i) => {
          const NewArray = [...featuredTowels];
          NewArray[i] = {
            id: i + 1,
            image:
              "/images/featured1.jpg",
            title: "Jasmine Towels",
            Artitle: "مناشف چاسمن",
            sign: updatedSign,
            description: "Lorem ipsum dolor sit amet consectetur.",
            Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
            price: "590$",
            Arprice: "٥۹۰$",
          };

          setFeaturedTowels(NewArray);
        })(index);

        break;
      case "Kitchen Towels":
        ((i) => {
          const NewArray = [...featuredKitchenTowels];
          NewArray[i] = {
            id: i + 1,
            image:
              "/images/featured2.jpg",
            title: "Jasmine Kitchen Towels",
            Artitle: "مناشف مطبخ چاسمين",
            sign: updatedSign,
            description: "Lorem ipsum dolor sit amet consectetur.",
            Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
            price: "590$",
            Arprice: "٥۹۰$",
          };
          setFeaturedKitchenTowels(NewArray);
        })(index);

        break;
      case "Bed Sheets":
        ((i) => {
          const NewArray = [...featuredBedSheets];
          NewArray[i] = {
            id: i + 1,
            image:
              "/images/featured3.jpg",
            title: "Jasmine Bed Sheets",
            Artitle: "ملاءات سرير چاسمن",
            sign: updatedSign,
            description: "Lorem ipsum dolor sit amet consectetur.",
            Ardescription: " نص عشوائي نص عشوائي نص عشوائي",
            price: "590$",
            Arprice: "٥۹۰$",
          };
          setFeaturedBedSheets(NewArray);
        })(index);

        break;
    }
  };

  const CartCounter = (sign) => {
    if (sign === "fas fa-plus") {
      dispatch(setCounter(c + 1));
    } else if (sign === "fas fa-minus") {
      dispatch(setCounter(c - 1));
    }
  };

  const PassProduct = (product) => {
    dispatch(sendProduct(product));
  localStorage.setItem("product", JSON.stringify(product));

    setTimeout(() => {

      history.push("/productdetails");
    }, 100);
  };

  function En() {
    if (localStorage.getItem("lang") === "en") {
      return true;
    } else if (localStorage.getItem("lang") === "ar") { 
      return false;
    }
  }

  return (
    <>
      <div className='row justify-content-center'>
        <h1 id='featuredProducts'>
          {En() ? "FEATURED PRODUCTS" : "منتجات مميزة"}
        </h1>
      </div>

      <div className='row justify-content-center'>
        <ul className=' featuredList mr-5 '>
          {listItems.map((listItem) => {
            if (En()) {
              return (
                <li
                  onClick={() => {
                    setActiveItem(listItem.id);
                    setFeaturedCategory(listItem.text);
                  }}
                  className={
                    "justify-content-center " +
                    (activeItem === listItem.id ? "activeItem" : "")
                  }
                >
                  {" "}
                  {listItem.text}
                </li>
              );
            } else {
              return (
                <li
                  style={
                    !En()
                      ? { direction: "rtl", float: "right", textAlign: "start" }
                      : {}
                  }
                  onClick={() => {
                    setActiveItem(listItem.id);
                    setFeaturedCategory(listItem.text);
                  }}
                  className={
                    "justify-content-center " +
                    (activeItem === listItem.id ? "activeItem" : "")
                  }
                >
                  {" "}
                  {listItem.Artext}
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className='row ml-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-5 mb-5'>
        {(() => {
          switch (featuredCategory) {
            case "Towels":
              return featuredTowels.map((product, index) => {
                return (
                  <div className='col'>
                    <div className='card mt-3'>
                      <div style={{ position: "relative" }}>
                        <img
                          onClick={() => {
                            PassProduct(product);
                          }}
                          src={product.image}
                          className='card-img-top'
                          alt='...'
                        />
                        <div
                          className='signContainer'
                          onClick={() => {
                            toggle(index, product.sign);
                            CartCounter(product.sign);
                          }}
                        >
                          <i className={product.sign}> </i>
                        </div>
                      </div>
                      <div
                        className={
                          "card-body " + (!En() ? "row flex-row-reverse" : "")
                        }
                      >
                        <div
                          id='featuredCardBody'
                          className={!En() ? "row flex-row-reverse" : ""}
                        >
                          <h5 className='jasmineTowel mt-3'>
                            {En() ? `${product.title}` : `${product.Artitle}`}
                          </h5>
                          <div
                            style={{ display: "inline-block" }}
                            className={"price mt-3 " + (!En() ? "mr-5" : "")}
                          >
                            {" "}
                            {En() ? `${product.price}` : `${product.Arprice}`}
                          </div>
                        </div>
                        <p className='cardText'>
                          {En()
                            ? `${product.description}`
                            : `${product.Ardescription}`}
                        </p>
                      </div>

                      <div className={!En() ? "row flex-row-reverse" : ""}>
                        <div style={{ display: "inline-block" }}>
                          <button
                            onClick={() => {
                              CartCounter("fas fa-plus");
                            }}
                            className='animated-button thar-two inline-block'
                          >
                            {En() ? " + ADD TO CART" : "+ أضف إلى عربة التسوق"}
                          </button>
                        </div>
                        <div style={{ display: "inline-block" }}>
                          <i
                            className={
                              "far fa-heart ml-4 mt-2 " + (!En() ? "mr-4" : "")
                            }
                          >
                            {" "}
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              });
            case "Kitchen Towels":
              return featuredKitchenTowels.map((product, index) => {
                return (
                  <div className='col'>
                    <div className='card mt-3'>
                      <div style={{ position: "relative" }}>
                        <img
                          onClick={() => {
                            PassProduct(product);
                          }}
                          src={product.image}
                          className='card-img-top'
                          alt='...'
                        />
                        <div
                          className='signContainer'
                          onClick={() => {
                            toggle(index, product.sign);
                            CartCounter(product.sign);
                          }}
                        >
                          <i className={product.sign}> </i>
                        </div>
                      </div>
                      <div className='card-body'>
                        <div id='featuredCardBody'>
                          <h5 className='jasmineTowel mt-3'>
                            {" "}
                            {En() ? `${product.title}` : `${product.Artitle}`}
                          </h5>
                          <span className='price mt-3'>
                            {" "}
                            {En() ? `${product.price}` : `${product.Arprice}`}
                          </span>
                        </div>
                        <p className='cardText'>
                          {En()
                            ? `${product.description}`
                            : `${product.Ardescription}`}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            CartCounter("fas fa-plus");
                          }}
                          className='animated-button thar-two inline-block'
                        >
                          {En() ? " + ADD TO CART" : "+ أضف إلى عربة التسوق"}
                        </button>
                        <i className='far fa-heart ml-4'> </i>
                      </div>
                    </div>
                  </div>
                );
              });
            case "Bed Sheets":
              return featuredBedSheets.map((product, index) => {
                return (
                  <div className='col'>
                    <div className='card mt-3'>
                      <div style={{ position: "relative" }}>
                        <img
                          onClick={() => {
                            PassProduct(product);
                          }}
                          src='../images/featured3.jpg'
                          className='card-img-top'
                          alt='...'
                        />
                        <div
                          className='signContainer'
                          onClick={() => {
                            toggle(index, product.sign);
                            CartCounter(product.sign);
                          }}
                        >
                          <i className={product.sign}> </i>
                        </div>
                      </div>
                      <div className='card-body'>
                        <div id='featuredCardBody'>
                          <h5 className='jasmineTowel mt-3'>
                            {En() ? `${product.title}` : `${product.Artitle}`}
                          </h5>
                          <span className='price mt-3'>
                            {En() ? `${product.price}` : `${product.Arprice}`}
                          </span>
                        </div>
                        <p className='cardText'>
                          {En()
                            ? `${product.description}`
                            : `${product.Ardescription}`}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            CartCounter("fas fa-plus");
                          }}
                          className='animated-button thar-two inline-block'
                        >
                          {En() ? " + ADD TO CART" : "+ أضف إلى عربة التسوق"}
                        </button>
                        <i className='far fa-heart ml-4'> </i>
                      </div>
                    </div>
                  </div>
                );
              });
          }
        })()}
      </div>
    </>
  );
}

export default Featured;
