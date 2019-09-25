import React, {useState, useEffect} from 'react';
import UserContext from './contexts/UserContext.js';
import { Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute.js';
import { axiosWithAuth } from './utils/axiosWithAuth';
import React, {useState} from 'react';
import Navigation from "./components/Navigation.js";
import Friends from "./components/mutual/Friends";


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

  <UserContext.Provider>

      <div className="App">
        
        <Navigation/>
        
          <Route exact path="/" component={Home}/> 
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/survey" component={Survey} />     
        
  
      </div>

    </UserContext.Provider>

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
