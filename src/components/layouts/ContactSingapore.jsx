import React from "react";
import GoogleMapSingpore from "../map/google-map-singpore";

const ContactSingapore = () => {
  return (
    <div className="container">
      <div className="row mt-61">
        <div className="col-12">
          <div className="block-text center">
            <h3
              className="title mb-28 color-sub"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Singapore
            </h3>
            <p
              className="fs-21 mb-33"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Email us
              <span
                className="fs-18"
                data-aos="fade-up"
                data-aos-duration="1000"
                style={{ marginLeft: "10px" }}
              >
                helpdesk@global-tia.com
              </span>
              <br />
              of fill out the form below.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-5 col-md-12">
          <div className="contact-left">
            <ul>
              <li data-aos="fade-up">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info">
                  <h5>Address</h5>
                  <p className="fs-18">
                    531A UPPER CROSS STREET #04-98 HONG LIM COMPLEX Singapore
                    051531
                  </p>
                </div>
              </li>
              <li data-aos="fade-up">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info">
                  <h5>Email</h5>
                  <p className="fs-18">helpdesk@global-tia.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-7 col-md-12">
          <div data-aos="fade-up">
            <GoogleMapSingpore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSingapore;
