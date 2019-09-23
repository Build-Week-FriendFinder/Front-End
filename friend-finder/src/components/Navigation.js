//Ben Solt Code
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const Navigation = () => (

    // <nav>
    //     <NavLink className="navlink" to="/">Home</NavLink>
    // </nav>
    



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

,
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}






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

export default Navigation;