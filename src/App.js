import React from 'react'
import {Route, BrowserRouter as Router, Routes,} from "react-router-dom"
import NavBar from './Components/NavBar'
import Cart from './Pages/Cart/Cart'
import Shop from './Pages/Cart/Shop/Shop'

const App = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App