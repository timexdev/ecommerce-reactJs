import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./NavBar.css";
import { useContext } from 'react';
import { ShopContext } from '../Context/Shopcontext';

const NavBar = () => {
  const {cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[0];

    console.log(cartItemAmount)
  return (
    <>
      <div className="navBar fixed-top shadow">
      <Link to="/" className="logo">TimexStore</Link>
        <div className="links">
          <Link to="/">Store</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
            <span class="position-absolute  translate-middle badge rounded-pill bg-danger">
            {cartItemAmount > 0 && <>({cartItemAmount})</>}
            
    <span class="visually-hidden">unread messages</span>
  </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
