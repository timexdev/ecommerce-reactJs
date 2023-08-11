import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div >
            <p className="socialMedia" >
              <a href="twitter.com/Peter56339915">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="instagram.com/peterajala_">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="linkedin/in/peter-ajala">
                <i class="bi bi-linkedin"></i>
              </a>
            </p>
          </div>
        </div>
        <hr />
        <p className="copyright">
          {" "}
          <i class="bi bi-c-circle"></i> 2023 TimexDev
        </p>
      </div>
    </>
  );
};

export default Footer;
