//Samuels code
import React, { useState, useEffect } from "react";
import { mutualFriends } from "../../data";
import Friend from "./Friend";

const Friends = props => {
  const { setCurrentNavTitle } = props;

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    //replace with a request to the api
    setFriends(mutualFriends);
    
  }, []);

  const acceptFriend = () => {
    //implement a put request to the database
  };

  const declineFriend = () => {
    //implement a put request to the database to decline request
  };

  useEffect(() => {
    const componentTitle = "Mutual friends";
    setCurrentNavTitle(componentTitle);
  }, [props.match.url]);

  return (
    <div className="mutual-friends-container">
      {friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            {...friend}
            acceptFriend={acceptFriend}
            declineFriend={declineFriend}
          />
        );
      })}
    </div>
  );
};
export default Friends;
