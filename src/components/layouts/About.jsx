import { React, useState } from "react";
import { Link } from "react-router-dom";
import about from "../../assets/fake-data/data-about";

const About = () => {
  const [data] = useState({
    subtitle: "About Us",
    title1: "VISION",
    title2: "WHAT IS TIA?",
    title3: "MISSION",
    desc1: "We bring joy and fun to people around the world anytime, anywhere.",
    desc2: "Global leading X2E system with blockchain",
    desc3: "A world where everyone can access X2E things",
  });

  return (
    <section className="tf-section section-about">
      <div className="container">
        <div className="row reverse">
          <div className="col-xl-7 col-md-12">
            <div className="group-image">
              <div className="left">
                <div className="box-item aos-init aos-animate">
                  <img
                    data-aos="flip-left"
                    style={{ width: "247px", height: "237px" }}
                    src={about.card_about_1}
                    alt="Monteno"
                  />
                </div>
              </div>
              <div className="right">
                <div className="box-item aos-init aos-animate">
                  <img
                    data-aos="flip-left"
                    style={{ width: "247px", height: "237px" }}
                    src={about.card_about_2}
                    alt="Monteno"
                  />
                </div>
                <div className="box-item aos-init aos-animate">
                  <img
                    data-aos="flip-left"
                    style={{ width: "247px", height: "237px" }}
                    src={about.card_about_3}
                    alt="Monteno"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-md-12">
            <div className="block-text pt-12">
              <h5
                className="sub-title mb-10 color-main"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.subtitle}
              </h5>
              <h3
                className="title mb-58 color-sub"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.title1}
              </h3>
              <p
                className="fs-21 mb-33"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc1}
              </p>
              <h3
                className="title mb-58 color-sub"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.title2}
              </h3>
              <p
                className="fs-21 mb-33"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc2}
              </p>
              <h3
                className="title mb-58 color-sub"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.title3}
              </h3>
              <p
                className="fs-21 mb-33"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc3}
              </p>

              <Link
                to="/about"
                className="btn-action style-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
