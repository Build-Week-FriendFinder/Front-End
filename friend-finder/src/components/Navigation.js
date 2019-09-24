//Ben Solt Code
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

// import './Navigation.css';





const Navigation = () => {


const HomeHeader = () => {
    var x = document.getElementById("h");
    if (x.innerHTML === "HOME") {
        x.innerHTML = "";
      }else{
          x.innerHTML = "HOME";
        }
    }

   
  const FriendHeader = () => {
    var x = document.getElementById("f");
    if (x.innerHTML === "FRIENDS") {
      x.innerHTML = "";
    }else{
        x.innerHTML = "FRIENDS";
      }
    }

    const MessageHeader = () => {
           var x = document.getElementById("m");
        if (x.innerHTML === "MESSAGES") {
          x.innerHTML = "HOME";
        }else{
            x.innerHTML = "MESSAGES";
          }
        }
return (

<div className="HeaderContainer">



<div className="HeaderBanner">

<div className="Title">
<h1 id='h' className="home">HOME</h1>
<h1 id='f' className="friends">FRIENDS</h1>
<h1 id='m' className="messages">MESSAGES</h1>
<h1 id='l' className="logout">LOG OUT</h1> 

</div>

<nav className="NavItems">

<NavLink onClick={HomeHeader} className="navlink" exact activeClassName="activeLink" to="/">Home</NavLink>
<NavLink onClick={FriendHeader} className="navlink" exact activeClassName="activeLink" to="/friends">Friends</NavLink>
<NavLink onClick={MessageHeader} className="navlink" exact activeClassName="activeLink" to="/messages">Messages</NavLink>
<NavLink className="navlink" exact activeClassName="activeLink" to="/logout">Log Out</NavLink>

</nav>

</div>

</div>

//   <Dropdown text='Menu'>
//     <Dropdown.Menu>
//       <Dropdown.Item text='HOME' />
//       <Dropdown.Divider />
//       <Dropdown.Item text='FRIENDS'/>
//       <Dropdown.Divider />
//       <Dropdown.Item text='MESSAGES'/>
//       <Dropdown.Divider />
//       <Dropdown.Item text='LOG OUT' />
//       <Dropdown.Divider />
//     </Dropdown.Menu>
//   </Dropdown>

  
)
}
export default Navigation;