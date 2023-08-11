import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div>
        <div className='contact'>
            <h2 className='text-center fw-bolder'>Contact Us</h2>
            <p className='contactP'>We're here to assist you! If you have any inquiries, feedback, or require assistance,  please don't hesitate to get in touch with us.</p>
            <div className='container shadow-lg mt-5'>
            <div className="row pt-5 pb-5">
            <div id="contact-details" className="col-12 col-md-6">
              <div>
                <h4 >NEED HELP</h4>
                <p className='needhelpDetail'> Navigating through our website should be a breeze, but we understand that you might need some assistance along the way. Whether you have questions about placing an order, tracking your shipment, or using our website's features, our friendly customer support team is here to help.</p>
                <h6 className='fw-bold'>Reach Out to Us via :</h6>
                <a> <i class="bi bi-geo-alt-fill"></i> No 15, Ojoo, Ibadan.</a> <br />
                <a href="tel:+23467144956"> <i class="bi bi-telephone-fill"></i> +23467144956</a> <br />
                <a href="mailto:ajalapeter1@gmail.com"> <i class="bi bi-envelope-fill"></i> ajalapeter1@gmail.com</a>
              </div>
            </div>
            <div id="messageForm" className="col-12 col-md-6">
                <form action="">
                  <input className='form-control' type="text" placeholder='Name' /> <br />
                  <input className='form-control' type="email" placeholder='Email' /> <br />
                  <input className='form-control' type="number" placeholder='Phone' /> <br />
                  <textarea className='form-control' name="message" id="message" placeholder='Message' cols="30" rows="10"></textarea>
                  <button className='sendBtn'>Send Message</button>
                </form>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact