// Ben Solt
import React, { useState, useEffect } from "react";

import * as Yup from "yup";
import axios from "axios";

import MessageForm from './MessageForm'

 // LIST OF FRIENDS

  

// GET FRIENDS - display list of friends on left in scroll bar.

export default function Messages() {

  const [friendName, setFriendName] = useState([])
  const user_id = 1;


useEffect(() => {
  // e.preventDefault();
  axios
    .get(`https://friend-finder-levi.herokuapp.com/api/friends/${user_id}`)
    .then(res => {
      setFriendName(res.data);
    })
    .catch(err => console.log(err.response));
}, [])

// if (friends.id === 0) {
// return(
//   <div> <h4>You need to add Friends</h4> </div>
// )
// }


console.log('friendname array',friendName)
  return (
    
    <div className="Message-Container">

    <div className="friend-List-container">
    <h2>FRIENDS</h2>
    <div className="friend-List" >
      
    
        {friendName.length >= 0
          ? friendName.map((user1, index) => {
              return (
             <h4 key={index}>{user1.name}</h4>
              );
            })
          : () => {
              return 
            }}
    
    </div>

    </div>
    
      <MessageForm/>


   
    {/* <div className="imageholder">
    <img src="image"></img>
    </div>  */}








</div>


)}

      









    
    // DELETE FRIEND

        // useEffect(user, { setUser}) => {
        // e.preventDefault();
        //   axios
        //     .delete('https://friend-finder-levi.herokuapp.com/api/friend/user_id')
        //     .then(res => {
        //       setUser(res.data);
        //     })
        //     .catch(err => console.log(err.response));
        // }





// .post = MESSAGE friend

        // handleSubmit(e, user, { setUser}) {
        //     e.preventDefault();
        //     const user_id = 1;
        //     axios
        //       .get(`https://friend-finder-levi.herokuapp.com/api/friends/${user_id}`)
        //       //.post("https://friend-finder-levi.herokuapp.com/api/messages/user_id/:friend_id", user)
        //       .then(res => {
        //         setUser(res.data);
        //       })
        //       .catch(err => console.log(err.response));
        //   }