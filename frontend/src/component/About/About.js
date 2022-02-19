import React from 'react';
import vectorimg2 from "../../images/vector24.jpg"
import vector2 from '../../images/vector1.jpg';
import vector3 from '../../images/vector13.jpg';
import "./About.css"

const About = () => {
    return (
        <>
            <div className="abt-container">
                <div className="content1">
                    <div className="about-head">
                        <h2>What is Solution Fest ?</h2>
                    </div>
                    <div className="abt-desc">
                        <p style={{ textAlign: "justify" }}>
                            Solution Fest invites and encourages students from all over the campus to build a solution which matches and aims to solve UN’s 17 Sustainable Development problems. We are motivating participants to learn new technologies and create solutions for the real-life world and explore your imagination and develop your skills. It is a learn & solve or solve & learn type of hackathon.
                        </p>
                    </div>

                </div>
                <div className="abt-img1">
                    <img src={vector2} alt="" />
                </div>
            </div>
            <div className="about-head2">
                <h2>ABOUT</h2>
            </div>
            <div className="abt-container1">
                <div className="abt-img2">
                    <img src={vectorimg2} alt="" />
                </div>
                <div id='abt-content1' className="content1">
                    <div className="about-head3 my-3">
                        <h2>OUTCOMES</h2>
                    </div>
                    <div className="abt-desc1">
                        <p style={{ textAlign: "justify" }}>
                            Created by the United Nations in 2015, with support from all 193 United Nations Member States, the 17 Sustainable Development Goals aim to end poverty, ensure prosperity, and protect the planet.
                        </p>
                    </div>
                </div>
            </div>
            <div className="abt-container">
                <div className="content1">
                    <div id='abt-head3' className="about-head3">
                        <h2>GOALS</h2>
                    </div>
                    <div id='about-desc1' className="abt-desc">
                        <p style={{ textAlign: "justify" }}>
                            Test your abilities: Hackathons permit your colleagues to fortify their delicate abilities like correspondence, authority, and collaboration, among others. Contingent upon the issue being tackled, it likewise offers a chance to hone specialized abilities like new work philosophies, project the executives, and courses.
                        </p>
                    </div>
                </div>
                <div id='abt-img3' className="abt-img1">
                    <img src={vector3} alt="" />
                </div>
            </div>
        </>
    );
};

export default About;
