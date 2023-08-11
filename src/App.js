import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Cart from "./Pages/Cart/Cart";
import Shop from "./Pages/Shop/Shop";
import ShopContextProvider from "./Context/Shopcontext";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
};

export default App;
