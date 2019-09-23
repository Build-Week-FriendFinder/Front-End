import React from 'react';
import Navigation from "./components/Navigation.js";
import './App.css';
import Signup from './components/Signup.js';
import Home from './components/Home.js';

import { Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      
      <Navigation/>
      
  {/* <Route exact path="/" component={Home}/>  */}

      <Home/>

      <h1>Testing in App.js</h1>
      {/* <Signup /> */}
 
    </div>
  );
}

export default App;
