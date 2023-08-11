import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./Product";
import "./shop.css";
import Header from "../../Components/Header";
import Contact from "../../Components/Contact";
import WhyUs from "../../Components/WhyUs";
import Footer from "../../Components/Footer";

const Shop = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <h2 className="shopTitle">LATEST PRODUCTS</h2>
        <p className="product-p">Stay ahead of the curve with our constantly evolving collection of the latest products. </p>
      </div>
      
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <WhyUs/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Shop;
