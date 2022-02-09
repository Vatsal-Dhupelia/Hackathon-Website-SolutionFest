import React from 'react';
import vectorimg1 from "../../images/vector5.jpg"
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
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis laboriosam incidunt, neque ut hic voluptatem id nostrum eveniet error ducimus quisquam. Accusantium vel expedita vitae ea ut praesentium vero quidem harum assumenda ullam itaque incidunt, voluptas obcaecati ipsa ratione pariatur velit aliquam, voluptate laboriosam reiciendis officiis quisquam. Maxime, modi velit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ex.
                        </p>
                    </div>

                </div>
                <div className="abt-img1">
                    <img src={vectorimg1} alt="" />
                </div>
            </div>
        </>
    );
};

export default About;
