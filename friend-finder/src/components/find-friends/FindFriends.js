import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

import './FindFriends.css';

const FindFriends = () => {

  const [friends, setFriends] = useState([
    {
      name: 'Friend Finder',
      gender: 'M',
      age: '21',
      location: 'earth',
      interests: 'finding friends'
    }
  ]);

  useEffect(() => {
    console.log('users.js', friends);
  }, [])


  {/*
  useEffect(() => {
    axios
      .get('https://friend-finder-levi.herokuapp.com/api/')
      .then(res => {
        console.log(res);
      })
      .catch(error => {
      console.log('Data was not returned', error);
    })
  }, []);
  */}

  const request = () => {
    // request as friend
  }

  const next = () => {
    // next profile
  }

  return (
    <div>
      {friends.map((user, index) => (
        <User
          key={index}
          {...user}
          request={request}
          next={next}
        />
      ))}
    </div>
  );
}

export default FindFriends;
