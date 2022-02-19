import React from "react";
import vectorimg3 from "../../images/vector22.jpg";
import vectorimg2 from "../../images/vector23.jpg";
import vector1 from "../../images/vector8.jpg";
import vectorp1 from "../../images/vector51.png";
import vectorp2 from "../../images/vector52.png";
import vectorp3 from "../../images/vector53.png";
import "./Rounds.css";

const Rounds = () => {
  return (
    <>
      <div className="abt-container">
        <div className="content1">
          <div className="about-head">
            <h2>Selection Round </h2>
          </div>
          <div className="abt-desc">
            <p style={{ textAlign: "justify" }}>
              Assessment will be founded on the submitted definition by members. Assuming that definition matches the UN's 17 Sustainable Development Goals, it is qualified for next round.
            </p>
          </div>
        </div>
        <div className="abt-img1">
          <img src={vector1} alt="" />
        </div>
      </div>
      <div className="abt-container1">
        <div className="abt-img2">
          <img src={vectorimg2} alt="" />
        </div>
        <div id="abt-content1" className="content1">
          <div className="about-head3">
            <h2>Intermediate Round</h2>
          </div>
          <div className="abt-desc1">
            <p style={{ textAlign: "justify" }}>
              Subsequent to getting chosen for the Intermediate Round, the assessment will be founded on the work completed for the chosen domain. You will asked to share the Github Link of the task at whatever point required. On the off chance that a group coordinates with the assessment rules, it will be qualified for the next round.
            </p>
          </div>
        </div>
      </div>
      <div className="abt-container">
        <div className="content1">
          <div id="abt-head3" className="about-head3">
            <h2>Final Round</h2>
          </div>
          <div id="about-desc1" className="abt-desc">
            <p style={{ textAlign: "justify" }}>Shortlisted teams will be announced for the final showdown…
              Be prepared to exhibit the work did with demo and Powerpoint Presentation momentarily clarifying your execution. The best solution will be declared winner of the Solution Fest!</p>
          </div>
        </div>
        <div id="abt-img3" className="abt-img1">
          <img src={vectorimg3} alt="" />
        </div>
      </div>
      <div className="judges-head">
        <h2>Winners will get Exciting Prizes</h2>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div id="box" className="desc-box">
                  <i>
                    <img src={vectorp1} alt="#" />
                  </i>
                  <h2>
                    1<sup>st</sup> Prize
                  </h2>
                  <p>Description</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div id="box" className="desc-box">
                  <i>
                    <img id="desc-box1" src={vectorp2} alt="#" />
                  </i>
                  <h2>
                    2<sup>nd</sup> Prize
                  </h2>
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Rounds;
