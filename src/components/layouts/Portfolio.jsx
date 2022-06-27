import React from 'react';
import { Link } from 'react-router-dom'

const Portfolio = (props) => {

    const data = props.data;

    return (
        <section className="tf-section porfolio">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Join</span></h1>
                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Join NFT Portfolio</h5>
                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Become a Monteno <br /> Player Now</h3>
                    </div>
                </div>
            </div>
            <div className="row mt-61">
                {
                    data.map((data,index) => (
                        <div key={index} className="col-md-6">
                            <div className="icon-box bg-2" data-aos="fade-up">
                                <div className="icon">
                                    <img src={data.img} alt="Monteno" />
                                </div>
                                <div className="content">
                                    <p className="fs-16 color-main">{data.step}</p>
                                    <Link to='/contact' className="h5">
                                        {data.title}
                                    </Link>
                                    <p className="fs-18">{data.desc} </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    );
}

export default Portfolio;