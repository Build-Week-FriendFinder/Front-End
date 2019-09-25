import React, {useState} from 'react';
import Navigation from "./components/Navigation.js";
import Friends from "./components/mutual/Friends";

// CSS
import './App.css';
import './Navigation.css';


import Signup from './components/Signup.js';
import Home from './components/home/Home.js';

import { Route } from "react-router-dom";



function App() {
  const [navTitle, setNavTitle] = useState("");

const setCurrentNavTitle = (title) => setNavTitle(title)

  return (
    <div className="App">
      
      <Navigation navTitle={navTitle}/>
      
  <Route exact path="/" render={(props)=> <Home {...props} setCurrentNavTitle={setCurrentNavTitle} />} /> 
  <Route exact path="/signup" render={(props)=> <Signup {...props} setCurrentNavTitle={setCurrentNavTitle} />} />
  <Route path="/friends" render={(props)=> <Friends {...props} setCurrentNavTitle={setCurrentNavTitle} />}  /> 

      

      
      
 
    </div>
  );
}

export default App;
