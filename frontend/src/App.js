import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./component/home/Home"
import Navbar from "./component/Header/Navbar"
import Domain from "./component/domain/Domain"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/domains" element={<Domain />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
