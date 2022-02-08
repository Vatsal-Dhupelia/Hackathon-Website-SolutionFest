import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
import Home from "./component/Home/Home"
import Navbar from "./component/Header/Navbar"
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Route exact path="/" component={Home}/>
      </Router> 
    </>
  );
}

export default App;
