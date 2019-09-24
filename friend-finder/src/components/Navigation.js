//Ben Solt Code
import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";



// import './Navigation.css';





const Navigation = () => {


    // const HomeHeader = () => {
    //     var x = document.getElementById("h");
    //     if (x.innerHTML === "HOME") {
    //         x.innerHTML = "H";
    //     }else{
    //         x.innerHTML = "HOME";
    //     }
    // }
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

)
}
export default Navigation;