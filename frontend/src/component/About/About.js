import React from 'react';
import vectorimg1 from "../../images/vector5.jpg"
import vectorimg2 from "../../images/vector24.jpg"
import vector1 from '../../images/vector33.png';
import "./About.css"

const About = () => {
    return (
        <>
            <div className="abt-container">
                <div className="content1">
                    <div className="about-head">
                        <h2>Hackathon Description</h2>
                    </div>
                    <div className="abt-desc">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis laboriosam incidunt, neque ut hic voluptatem id nostrum eveniet error ducimus quisquam. Accusantium vel expedita vitae ea ut praesentium vero quidem harum assumenda ullam itaque incidunt. Lorem ipsum dolor sit amet consectetur !
                        </p>
                    </div>

                </div>
                <div className="abt-img1">
                    <img src={vector1} alt="" />
                </div>
            </div>
            <div className="about-head2" data-aos="flip-up">
                <h2>About</h2>
            </div>
            <div className="abt-container1">
                <div className="abt-img2">
                    <img src={vectorimg2} alt="" />
                </div>
                <div id='abt-content1' className="content1">
                    <div className="about-head3">
                        <h2>Heading</h2>
                    </div>
                    <div className="abt-desc1">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis laboriosam incidunt, neque ut hic voluptatem id nostrum eveniet error ducimus quisquam. Accusantium vel expedita vitae ea ut praesentium vero quidem harum assumenda ullam itaque incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, suscipit. Laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="abt-container">
                <div className="content1">
                    <div id='abt-head3' className="about-head3">
                        <h2>Heading</h2>
                    </div>
                    <div id='about-desc1' className="abt-desc">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis laboriosam incidunt, neque ut hic voluptatem id nostrum eveniet error ducimus quisquam. Accusantium vel expedita vitae ea ut praesentium vero quidem harum assumenda ullam itaque incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloremque.
                        </p>
                    </div>
                </div>
                <div id='abt-img3' className="abt-img1">
                    <img src={vector1} alt="" />
                </div>
            </div>
            <div className="judges-head">
                <h2>Our Judges</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div id="box" class="desc-box">
                                    <i><img src={vectorimg1} alt="#" /></i>
                                    <h2>Name</h2>
                                    <p>Description</p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div id="box" class="desc-box">
                                    <i><img id='desc-box1' src={vectorimg1} alt="#" /></i>
                                    <h2>Name</h2>
                                    <p>Description</p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div id="box" class="desc-box">
                                    <i><img src={vectorimg1} alt="#" /></i>
                                    <h2>Name</h2>
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

export default About;
