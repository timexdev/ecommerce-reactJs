import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Cart from "./Pages/Cart/Cart";
import Shop from "./Pages/Shop/Shop";
import ShopContextProvider from "./Context/Shopcontext";
import Checkout from "./Pages/Checkout/Checkout";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
};

export default App;
