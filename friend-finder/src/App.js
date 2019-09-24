import React from 'react';
import Navigation from "./components/Navigation.js";

// CSS
import './App.css';
import './CSS/Navigation.css';
import './CSS/Messages.css';


import Signup from './components/Signup.js';
import Home from './components/home/Home.js';
import Messages from './components/messages/Messages';


import { Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      
         <Navigation/>  

  <Route exact path="/" component={Home}/> 
  <Route exact path="/signup" component={Signup} />
  <Route exact path="/messages" component={Messages} />
      

      
      
 
    </div>
  );
}

export default App;
