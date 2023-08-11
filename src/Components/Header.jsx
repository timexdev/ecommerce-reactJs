import React from 'react';
import "./Header.css"
import image from "../../src/assets/webpage image/Header_image-removebg-preview (1).png"

const Header = () => {
  return (
    <>
        <div className="header">
          <div className="container">
            <div className="row">
            <div className="col-12 col-md-6">
            <h1>Your Number One Online Shopping Platform</h1>
            <p>Welcome to Timex Store, your ultimate destination for an unparalleled online shopping experience. At Timex Store, we believe that every moment is worth cherishing, and our diverse range of products is curated to enhance every facet of your life. Our commitment to quality, innovation, and customer satisfaction sets us apart as a premium ecommerce platform.</p>

            <button className='contact-btn'>CONTACT US</button>
          </div>
          <div className="col-12 col-md-6">
           <img src={image} alt="" />
          </div>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Header