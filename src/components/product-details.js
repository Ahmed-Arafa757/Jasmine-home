import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export default function ProductDetails() {


    const dispatch = useDispatch();
    let p = useSelector((state) => state.product.product);
  
  
  function En() {
    if (localStorage.getItem("lang") === "en") {
      return true;
    } else if (localStorage.getItem("lang") === "ar") {
      return false;
    }
    }
  const [productt, setProductt] = useState(JSON.parse(localStorage.getItem('product')))
  

  // const preventClicking = (event) => {
  //   console.log(event);
    
  // }
  useEffect(() => {
    document.onclick = (e) => {
      console.log(e.target.id);
      if (e.target.id !== "HEADERIMAGE") {
        e.preventDefault();
      }
    };
  })
  
  return (
    <>
      <div className='container-fluid p-0'>
        <div
          className={"row mb-5 header  " + (!En() ? " flex-row-reverse" : "")}
        >
          <div className='col-lg-5'>
            <Link to='/'>
              <img
                style={
                  !En()
                    ? { direction: "rtl", textAlign: "start", float: "right" }
                    : {}
                }
                id='HEADERIMAGE'
                className='headerImg'
                src='/images/navbar1.png'
                alt=''
              />
            </Link>
          </div>
          <div className='col-lg-7'>
            <div
              id='prodDetails'
              className='ml-5 '
              style={!En() ? { direction: "rtl", textAlign: "start" } : {}}
            >
              {En() ? "PRODUCT DETAILS" : "تفاصيل المنتج"}
            </div>
          </div>
        </div>

        <div className={"row mt-5  " + (!En() ? " flex-row-reverse" : "")}>
          <div className='col-lg-2'></div>
          <div className='col-lg-4'>
            <img
              id='prodImg'
              className='img-fluid align-middle'
              src={productt.image}
              alt=''
            />
          </div>
          <div className='col-lg-4'>
            <h1 id='prodTitle'>
              {En() ? `${productt.title}` : `${productt.Artitle}`}
            </h1>
            <h3 id='prodDescription'>
              {En() ? `${productt.description}` : `${productt.Ardescription}`}
            </h3>
            <h3 id='prodPrice'>
              {En() ? `${productt.price}` : `${productt.Arprice}`}
            </h3>
          </div>
          <div className='col-lg-2'></div>
        </div>
      </div>
    </>
  );
}
