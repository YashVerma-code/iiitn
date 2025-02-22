import React from "react";
import "./Home-notice.css";

const Home_notice = () => {
  return (
    <>
      <div className="n-container h-auto w-screen m-5 bg-slate-600">
        <div className="updates ">
          <div className="heading">
            <p>Latest Updates</p>

            <div className="wrapper translate-x-64">
              <input type="radio" name="slider" id="tab-1" />
              <input type="radio" name="slider" id="tab-2" defaultChecked />

              <header className="tab-header">
                <label htmlFor="tab-1" className="tab">
                  Faculty
                </label>
                <label htmlFor="tab-2" className="tab">
                  Students
                </label>
                <div className="slider"></div>
              </header>

              <div className="card-area">
                <div className="cards">
                  <div className="row row-1">
                    <ul className="features">
                      <li>
                        <i className="fas fa-check"></i>
                        <span>100 GB Premium Bandwidth</span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <span>
                          FREE 50+ Installation Scripts WordPress Supported
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <span>
                          One FREE Domain Registration .com and .np extensions
                          only
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <span>Unlimited Email Accounts & Databases</span>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <ul className="features">
                      <li>
                        <i className="fas fa-check"></i>
                        <span>Unlimited GB Premium Bandwidth</span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <span>
                          FREE 200+ Installation Scripts WordPress Supported
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <span>
                          Five FREE Domain Registration .com and .np extensions
                          only
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <span>Unlimited Email Accounts & Databases</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="choose-plan-btn">Know More</button>
            </div>
          </div>
        </div>

        <div className="life "></div>
      </div>
    </>
  );
};

export default Home_notice;
