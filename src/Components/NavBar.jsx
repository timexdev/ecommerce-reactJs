import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navBar fixed-top shadow">
      <Link to="/" className="logo">TimexStore</Link>
        <div className="links">
          <Link to="/">Store</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
