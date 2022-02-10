import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./component/home/Home"
import Navbar from "./component/header/Navbar"
import Domain from "./component/domain/Domain"
import About from "./component/about/About"
import Timeline from "./component/timeline/Timeline"
import Footer from "./component/footer/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'

function App() {
  AOS.init();
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/domain" element={<Domain />} />
          <Route exact path="/timeline" element={<Timeline />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
