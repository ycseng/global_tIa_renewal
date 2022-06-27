import React, { useState } from "react";
import { Link } from "react-router-dom";
import dataCard from "../../assets/fake-data/data-card";

const BlockChain = () => {
  const [datatext] = useState({
    subtitle: "BLOCKCHAIN",
    title: "What is BlockChain?",
    desc: "Block Chain is title",
  });

  const data = dataCard;

  return (
    <section className="tf-section section-speciality">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-12">
            <div className="block-text pt-128 pd-0">
              <h5
                className="sub-title mb-10 color-main"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {datatext.subtitle}
              </h5>
              <h3
                className="title mb-28 color-sub"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {datatext.title}
              </h3>
              <p className="fs-21" data-aos="fade-up" data-aos-duration="1000">
                {datatext.desc}
              </p>
            </div>
          </div>
          <div className="col-xl-7 col-md-12">
            <div className="section-speciality__box">
              {data.map((data, index) => (
                <div
                  key={index}
                  className={`box-item bg-2 ${data.class}`}
                  data-aos="flip-left"
                >
                  <h3 className="color-main">{data.stt}</h3>
                  <Link to="/collections" className="h5 color-sub">
                    {data.title}
                  </Link>
                  <p>{data.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockChain;
