<<<<<<< HEAD



































































































import React from 'react';
=======
import React, {useState, useEffect} from 'react';
import UserContext from './contexts/UserContext.js';
import { Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute.js';
import { axiosWithAuth } from './utils/axiosWithAuth';
import React, {useState} from 'react';
>>>>>>> 57544f95c84b694c71bef889b0069577cc51fb5d
import Navigation from "./components/Navigation.js";
import Friends from "./components/mutual/Friends";


// CSS
import './App.css';
import './CSS/Navigation.css';
import './CSS/Messages.css';

// Kelly Components
import Signup from './components/Signup.js';
import Survey from './components/Survey.js';

// Ben Components
import Home from './components/home/Home.js';
<<<<<<< HEAD
import Messages from './components/messages/Messages';

=======
import Navigation from "./components/Navigation.js";
>>>>>>> 57544f95c84b694c71bef889b0069577cc51fb5d


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
      
<<<<<<< HEAD
         <Navigation/>  

  <Route exact path="/" component={Home}/> 
  <Route exact path="/signup" component={Signup} />
  <Route exact path="/messages" component={Messages} />
=======
      <Navigation navTitle={navTitle}/>
      
  <Route exact path="/" render={(props)=> <Home {...props} setCurrentNavTitle={setCurrentNavTitle} />} /> 
  <Route exact path="/signup" render={(props)=> <Signup {...props} setCurrentNavTitle={setCurrentNavTitle} />} />
  <Route path="/friends" render={(props)=> <Friends {...props} setCurrentNavTitle={setCurrentNavTitle} />}  /> 

>>>>>>> 57544f95c84b694c71bef889b0069577cc51fb5d
      

      
      
 
    </div>

  );
}

export default App;
