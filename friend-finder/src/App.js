import React, {useState, useEffect} from 'react';
import UserContext from './contexts/UserContext.js';
import { Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute.js';
import { axiosWithAuth } from './utils/axiosWithAuth';

// CSS
import './App.css';
import './Navigation.css';

// Kelly Components
import Signup from './components/Signup.js';
import Survey from './components/Survey.js';

// Ben Components
import Home from './components/home/Home.js';
import Navigation from "./components/Navigation.js";


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
