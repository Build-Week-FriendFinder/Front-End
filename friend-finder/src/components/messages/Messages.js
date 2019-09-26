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

if (friends.id === 0) {
return(
  <div> <h4>You need to add Friends</h4> </div>
)
}



  return (
    
    <div className="Message-Container">

    <div className="friend-List-container">
    <h2>FRIENDS</h2>

    <div>
        {friendName.name.length >= 1
          ? friendName.name.map((user1, index) => {
              return (
              <div className="friend-List">
              <h4>{user1}  key={index}</h4>
              </div>
                 
              );
            })
          : () => {
              return <div></div>;
            }}
      </div>
      <MessageForm/>

  </div>

    {/* <h4>I{friendName}I</h4>
    <h4>{friendName}</h4>
    <h4>{friendName}</h4>
    <h4>{friendName}</h4>  */}
   
    {/* <div className="imageholder">
    <img src="image"></img>
    </div> */}   

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