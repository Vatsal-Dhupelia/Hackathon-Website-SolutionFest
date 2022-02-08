import React from 'react';
import vectorimg1 from "../../images/vector1.jpg"
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="hack-name">
          <h1>Hackathon Name</h1>
          <div className="caption">
            <h3>Learn. Explore. Win.</h3>
          </div>
          <div className="caption">
            <h3>A Chance to showcase your skills.</h3>
          </div>
        </div>
        <div className="img-container">
          <img src={vectorimg1} alt="" />
        </div>
      </div>
      <div className="trailer">
        <iframe src='https://www.youtube.com/embed/XBzU6XJ7Xvk'
          width='700'
          height='450'
          frameborder='0'
          allow='autoplay; encrypted-media'
          allowfullscreen
          title='video'
        />
      </div>
    </>
  );
};

export default Home;
