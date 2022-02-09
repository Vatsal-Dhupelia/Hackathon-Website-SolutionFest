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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/domain" element={<Domain />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
