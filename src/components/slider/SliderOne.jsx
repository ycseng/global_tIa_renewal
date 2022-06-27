import React, { useState } from "react";
import { Flex } from "../../styled";
// import { Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import item from "../../assets/fake-data/item";
import video from "../../global-tia.mp4";

const SliderOne = () => {
  const [datatext] = useState({
    title: "INNOVATIVE EXPERIENCE WITH BLOCKCHAIN",
    desc: "TO BE THE NEXT X2E SYSTEM CHALLENGER AROUND THE WORLD",
  });

  return (
    <section className="tf-section hero-slider">
      <div className="container center">
        <Flex>
          <div className="col-xl-5 col-md-6 col-12">
            <div className="pt-24">
              <h2 className="title mb-26 color-sub" data-aos="fade-up">
                {datatext.title}
              </h2>
              <h6 className="sub-title mb-43" data-aos="fade-up">
                {datatext.desc}
              </h6>
            </div>
          </div>
          <div>
            <video
              loop={true}
              muted={true}
              autoPlay={true}
              style={{
                width: "100%",
                maxWidth: "1500px",
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </Flex>
      </div>
    </section>
  );
};

export default SliderOne;
