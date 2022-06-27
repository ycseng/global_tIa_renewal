import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="footer mt-61">
        <div className="container">
          <div className="row">
            <div className="footer__body">
              <Link to="/">
                <span style={{ fontSize: "40px" }} data-aos="fade-down">
                  TIA
                </span>
              </Link>

              <ul className="social" style={{ marginTop: "50px" }}>
                <li data-aos="fade-up" data-aos-duration="1000">
                  <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-duration="1400">
                  <Link to="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-duration="1600">
                  <Link to="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
    </>
  );
};

export default Footer;
