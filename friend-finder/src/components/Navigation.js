//Ben Solt Code
import React from "react";
import { Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// import './Navigation.css';

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

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
    </nav>

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
  );
};
export default Navigation;
