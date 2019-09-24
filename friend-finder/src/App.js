import React from 'react';
import Navigation from "./components/Navigation.js";

// CSS
import './App.css';
import './Navigation.css';


import Signup from './components/Signup.js';
import Home from './components/home/Home.js';
import Survey from './components/Survey.js';
import { Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      
      <Navigation/>
      
  <Route exact path="/" component={Home}/> 
  <Route exact path="/signup" component={Signup} />
  <Route exact path="/survey" component={Survey} />

      

      
      
 
    </div>
  );
}

export default App;
