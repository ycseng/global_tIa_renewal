import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataCareer from "../../assets/fake-data/data-career";

const Career = () => {
  const data = dataCareer;

  return (
    <section className="tf-section faq">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              <h5
                className="sub-title mb-10 color-main"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Career
              </h5>
              <h3
                className="title mb-28 color-sub "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Now recruiting...
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="flat-tabs"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Tabs>
                <TabList>
                  <Tab>GAME DIVISION</Tab>
                  <Tab>SERVICE DIVISION</Tab>
                  <Tab>DEVELOP DIVISION</Tab>
                </TabList>

                <TabPanel>
                  {data.GAME_DIVISION.map((data) => (
                    <div key={data.id}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        alt=""
                        href={
                          "https://www.jobkorea.co.kr/Recruit/GI_Read/38279518?Oem_Code=C1"
                        }
                      >
                        <h5 key={data.id}>{data.title}</h5>
                      </a>
                    </div>
                  ))}
                </TabPanel>
                <TabPanel>
                  {data.SERVICE_DIVISION.map((data) => (
                    <div key={data.id}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        alt=""
                        href={
                          "https://www.jobkorea.co.kr/Recruit/GI_Read/38279518?Oem_Code=C1"
                        }
                      >
                        <h5 key={data.id}>{data.title}</h5>
                      </a>
                    </div>
                  ))}
                </TabPanel>
                <TabPanel>
                  {data.DEVELOP_DIVISION.map((data) => (
                    <div key={data.id}>
                      <a
                        key={data.id}
                        target="_blank"
                        alt=""
                        rel="noopener noreferrer"
                        href={
                          "https://www.jobkorea.co.kr/Recruit/GI_Read/38279518?Oem_Code=C1"
                        }
                      >
                        <h5>{data.title}</h5>
                      </a>
                    </div>
                  ))}
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
