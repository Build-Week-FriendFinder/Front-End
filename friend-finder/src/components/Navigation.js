//Ben Solt Code
import React, { useState } from 'react'
import { Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";



// import './Navigation.css';





//here
const Navigation = () => {


  
    const [headerText, setHeaderText] = useState("HOME")

    const TextHome = (e, str) => {
       setHeaderText('HOME')
    }
    const TextFriends = (e, str) => {
        setHeaderText('FRIENDS')
     }
    const TextMessages = (e, str) => {
        setHeaderText('MESSAGES')
     }
    
   

return (

<div className="HeaderContainer">



<div className="HeaderBanner">


{/* //////////////////////////////////</div> */}
{/* <div className="NavBanner">

<nav className="NavItems"> */}


<div className="Title">

<h1>{headerText}</h1>

</div>


<nav className="NavItems">
    
<NavLink onClick={TextHome} className="navlink" exact activeClassName="activeLink" to="/">Home</NavLink>
<NavLink onClick={TextFriends} className="navlink" exact activeClassName="activeLink" to="/friends">Friends</NavLink>
<NavLink onClick={TextMessages} className="navlink" exact activeClassName="activeLink" to="/messages">Messages</NavLink>
<NavLink className="navlink" exact activeClassName="activeLink" to="/logout">Log Out</NavLink>

</nav>

</div>

</div>

  //  <Dropdown text='Menu'>
  //    <Dropdown.Menu>
  //      <Dropdown.Item text='HOME' />
  //      <Dropdown.Divider />
  //      <Dropdown.Item text='FRIENDS'/>
  //      <Dropdown.Divider />
  //      <Dropdown.Item text='MESSAGES'/>
  //      <Dropdown.Divider />
  //      <Dropdown.Item text='LOG OUT' />
  //      <Dropdown.Divider />
  //    </Dropdown.Menu>
  //  </Dropdown> 

  

/* export default Navigation;
//here
const Navigation = ({navTitle}) => {
    navTitle =  navTitle ? navTitle : "";
  return (
    <nav className="NavBanner">
      <div className="nav-title">{navTitle}</div>
      <div>
        <NavLink exact  activeClassName="nav-active" className="navlink" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="nav-active" className="navlink" to="/friends">
          Friends
        </NavLink>
        <NavLink activeClassName="nav-active" className="navlink" to="/messages">
          Messages
        </NavLink>
        <NavLink activeClassName="nav-active" className="navlink" to="/logout">
          Log Out
        </NavLink>
      </div>
    </nav> */

   
  );
};
export default Navigation;

