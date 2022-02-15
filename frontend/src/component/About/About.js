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
                            GDSC-BVM’s Event-name is a mini hackathon/mini version of Google’s Solution Challenge 2022 which basically invites and encourages students from all over the campus to build a solution which matches and aims to solve UN’s 17 Sustainable Development problems. We are motivating participants to learn new technologies and create solutions for the real-life world and explore your imagination and develop your skills. It is a learn & solve or solve & learn type of hackathon.
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
                    <div className="about-head3 my-3">
                        <h2>United Nations 17 Sustainable Development Goals</h2>
                    </div>
                    <div className="abt-desc1">
                        <p>
                            Created by the United Nations in 2015, with support from all 193 United Nations Member States, the 17 Sustainable Development Goals aim to end poverty, ensure prosperity, and protect the planet.
                        </p>
                    </div>
                </div>
            </div>
            <div className="abt-container">
                <div className="content1">
                    <div id='abt-head3' className="about-head3">
                        <h2>Goal</h2>
                    </div>
                    <div id='about-desc1' className="abt-desc">
                        <p>
                            The goal of a hackathon is to create functioning software or hardware by the end of the event. Hackathons tend to have a specific focus, which can include the programming languages used, the Operating system, an application, an API, or the subject and the demographic group of the programmers. In other cases, there is no restriction on the type of software being created. Hackathon is to create optimal solutions for particular problems.
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
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div id="box" className="desc-box">
                                    <i><img src={vectorimg1} alt="#" /></i>
                                    <h2>Vatsal Sir</h2>
                                    <p>GDSC Mentor and Assistant Professor</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div id="box" className="desc-box">
                                    <i><img id='desc-box1' src={vectorimg1} alt="#" /></i>
                                    <h2>Priyank Sir</h2>
                                    <p>Assistant Professor</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div id="box" className="desc-box">
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
