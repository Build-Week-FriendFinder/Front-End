import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

import './FindFriends.css';

const FindFriends = () => {

  const [friends, setFriends] = useState([]);
  const [friendRequest, setRequest] = useState([]);
  const [nextUser, setNextUser] = useState(1);

  const swiper_id = 1;
  const swiped_id = 1;

  useEffect(() => {
    // console.log(props)
    axios
      .get(`https://friend-finder-levi.herokuapp.com/api/user/`)
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(error => {
      console.log('Data was not returned', error);
    })
  }, []);

  const request = () => {
    // request as friend
    axios
      .post(`https://friend-finder-levi.herokuapp.com/api/swipe/${swiper_id}/${swiped_id}/request`)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log('post error', error)
      });
  }

  const next = () => {
    // next profile
    axios.get(`https://friend-finder-levi.herokuapp.com/api/user/${nextUser}`)
    .then(res => {
      console.log(res)
      setNextUser(nextUser + 1)
    })
  }

  { /* Next Button Not Working 
    .filter i < (how many displays)
  */ }

  return (
    <div>
      {friends
        .filter((user, i) => i < 4)
        .map((user, index) => (
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
