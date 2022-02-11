import React from 'react';
import './Home.css';
import vector1 from '../../images/vector33.png';
import vectorimg2 from '../../images/vector2.png';
import vectorimg3 from '../../images/vector3.jpg';
import vectorimg4 from '../../images/vector4.jpg';

const Home = () => {
  return (
    <>
      <div className="main-container" data-aos="fade-up" data-aos-duration="2000">
        <div className="hack-name" data-aos="fade-up" data-aos-duration="2000">
          <h1>SOLUTION FEST</h1>
          <div className="caption" style={{letterSpacing: "3px"}}>
            <h3>THINK. CODE. EXECUTE.</h3>
          </div>
          <div className="caption" style={{paddingTop:"20px", letterSpacing: "2px", color: "#e26161"}}>
            <h3>Let's bring out a solution to every challenge.</h3>
          </div>
        </div>
        <div className="img-container" data-aos="fade-up" data-aos-duration="2000">
          <img src={vector1} alt="" />
        </div>
      </div>
      <div className="trailer my-5">
        <iframe src='https://www.youtube.com/embed/XBzU6XJ7Xvk'
          width='700'
          height='450'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
      <div id="home-desc" class="home-desc">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage" data-aos="flip-up" >
                <h1> HEADING </h1>
              </div>
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12" data-aos="fade-up" data-aos-duration="2000">
                  <div id="box" class="desc-box1">
                    <i><img src={vectorimg2} alt="#" /></i>
                    <h2>Think</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam delectus id ex, minus similique suscipit est ullam aliquam ipsum debitis placeat consequatur in aut facere, adipisci magnam dolorem ok.</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12" data-aos="fade-up" data-aos-duration="2000">
                  <div id="box" class="desc-box2">
                    <i><img id='desc-box1' src={vectorimg3} alt="#" /></i>
                    <h2>Code</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quo maxime aliquid inventore consectetur tempore doloremque placeat. Voluptatem porro amet error debitis, numquam cupiditate sit tempore voluptatum optio odit possimus!</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12" data-aos="fade-up" data-aos-duration="2000">
                  <div id="box" class="desc-box3">
                    <i><img src={vectorimg4} alt="#" /></i>
                    <h2>Execute</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptas aliquam odit vel hic saepe quibusdam a quisquam officia laborum pariatur reprehenderit sunt adipisci voluptates ut quaerat iusto, commodi corrupti.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
