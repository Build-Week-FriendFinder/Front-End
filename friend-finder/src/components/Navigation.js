//Ben Solt Code
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

// import './Navigation.css';

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const Navigation = () => {


return (

<div className="NavBanner">

<nav className="NavItems">

<NavLink className="navlink" to="/">Home</NavLink>
<NavLink className="navlink" to="/friends">Friends</NavLink>
<NavLink className="navlink" to="/messages">Messages</NavLink>
<NavLink className="navlink" to="/logout">Log Out</NavLink>

</nav>

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