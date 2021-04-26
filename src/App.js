import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/loader";


const Home = React.lazy(() => import("./components/home"));
const ProductDetails = React.lazy(() => import("./components/product-details"));
const Navbar = React.lazy(() => import("./components/navbar"));
const Footer = React.lazy(() => import("./components/footer"));

function App() {
  const [lang, setLang] = useState();

  useEffect(() => {
    window.history.scrollRestoration = "auto";
  });

  const changeLang = (lan) => {
    setLang(lan);
  };

 
  const WithHeaderAndFooter = () => (
    <>
        <Navbar changeLang={changeLang} />

      <Route path='/' exact component={Home} />

      <Footer />
    </>
  );

  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path='/productdetails' exact component={ProductDetails} />
            <Route exact component={WithHeaderAndFooter} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;

