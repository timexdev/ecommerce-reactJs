import React from "react";
import "./WhyUs.css"

const WhyUs = () => {
  return (
    <>
      <div id="whyUs">
        <h2>WHY SHOP WITH US</h2>
        <div className="row">
        <div className="col-12 col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
                <h6>Diverse Selection</h6>
                <p>Our extensive collection covers a vast array of categories, ensuring you find exactly what you're looking for, every time you visit.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
                <h6>Fast Shipping</h6>
                <p>We understand that waiting for your purchase can be tough. That's why we offer swift and reliable shipping, ensuring your items reach you in no time.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
                <h6>Quality Assurance</h6>
                <p>We are committed to providing only the highest quality products from trusted manufacturers and brands, so you can shop with confidence.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
