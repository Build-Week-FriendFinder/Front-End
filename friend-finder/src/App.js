import React, {useState, useEffect} from 'react';
import UserContext from './contexts/UserContext.js';
import { Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute.js';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Navigation from "./components/Navigation.js";
import Friends from "./components/mutual/Friends";


// CSS
import './App.css';
import './CSS/Navigation.css';
import './CSS/Messages.css';

// Kelly Components
import Signup from './components/Signup.js';
 import Survey from './components/Survey.js';
import Login from './components/Login';

// Ben Components
import Home from './components/home/Home.js';
import Messages from './components/messages/Messages';


//John
import FindFriends from './components/find-friends/FindFriends';

function App() {

  const [ user, setUser ] = useState(() => (localStorage.user ? JSON.parse(localStorage.user) : null));



  const getUser = currentUser => {
		setUser(currentUser);
	};

	useEffect(
		() => {
			user && localStorage.setItem('user', JSON.stringify(user));
		},
		[ user ]
	);

	console.log(user, 'I am the current user');
  

  return (

  <UserContext.Provider value = {{getUser}}>

      <div className="App">
        
        <Navigation/>

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* {FoundFriends} is new Home */}
          <Route exact path="/findfriends" component={FindFriends}/>
          <Route exact path="/messages" component={Messages}/>                      
          <Route exact path="/editprofile" component={Home} /> 
          {/* Home is the User - edit Profile page */}
          <Route exact path="/friendrequest" component={Friends}/>

          {/* Private Routes */}
          <PrivateRoute path="/protected/survey/:user_id" component={Survey} />
      </div>

    </UserContext.Provider>

  )}

    

  //const [navTitle, setNavTitle] = useState("");

// const setCurrentNavTitle = (title) => setNavTitle(title)

  // return (
  //   <div className="App">
      
  //        <Navigation/>  

  // <Route exact path="/" component={Home}/> 
  // <Route exact path="/signup" component={Signup} />
  // <Route exact path="/messages" component={Messages} />
      
    /* <Navigation navTitle={navTitle}/>
      
  <Route exact path="/" render={(props)=> <Home {...props} setCurrentNavTitle={setCurrentNavTitle} />} /> 
  <Route exact path="/signup" render={(props)=> <Signup {...props} setCurrentNavTitle={setCurrentNavTitle} />} />
  <Route path="/friends" render={(props)=> <Friends {...props} setCurrentNavTitle={setCurrentNavTitle} />}  />  */

      

    

export default App;
