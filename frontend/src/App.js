import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
import Home from "./component/Home/Home"
import Navbar from "./component/Header/Navbar"
import About from "./component/About/About"
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>

      </Router> 
    </>
  );
}

export default App;
