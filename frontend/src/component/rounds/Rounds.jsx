import React from "react";
import vectorimg1 from "../../images/vector5.jpg";
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
            <p>
              Teams for the event will be selected on the basis of their
              definitions. The entry establish a clear problem or challenge
              drawn from one or more of the United Nations 17 Sustainable
              Development Goals (SDGs), and is it clearly explained which
              specific SDG targets the entry is solving for.
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
            <p>
              After getting selected for the Round 2, the evaluation will be
              based on the work carried out for the domain you have selected,
              teams have to work on their selected domains for the project and
              will have to share the Github Link of the project whenever
              required. If a team matches with the evaluation criteria then it
              will be eligible for the further rounds.
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
            <p>Shortlisted teams will be announced for the final showdown… <br /> The Final Round teams have to present their projects. We would love to hear what you are going to build. A brief description of your creative ideas in a powerpoint presentation will add an extra flourish to get people to talking.</p>
          </div>
        </div>
        <div id="abt-img3" className="abt-img1">
          <img src={vectorimg3} alt="" />
        </div>
      </div>
      <div className="judges-head">
        <h2>Prizes</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
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
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
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
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div id="box" className="desc-box">
                  <i>
                    <img src={vectorp3} alt="#" />
                  </i>
                  <h2>
                    3<sup>rd</sup> Prize
                  </h2>
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rounds;
