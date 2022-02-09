import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./component/home/Home"
import Navbar from "./component/Header/Navbar"
<<<<<<< HEAD
import Domain from "./component/domain/Domain"

=======
import About from "./component/About/About"
>>>>>>> 5622a477934d15e81e58e9fac60c4a099b2eb31e
function App() {
  return (
    <>
      <Router>
<<<<<<< HEAD
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/domains" element={<Domain />} />
        </Routes>
      </Router>
=======
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>

      </Router> 
>>>>>>> 5622a477934d15e81e58e9fac60c4a099b2eb31e
    </>
  );
}

export default App;
