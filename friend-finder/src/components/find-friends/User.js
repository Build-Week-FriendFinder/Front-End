import React from 'react';

const User = ({ profile, name, gender, age, location, interests, next, request }) => {
  return (
    <div className='user-container'>
      <div className='container'>
        <div className='image-container'>
          Image
        </div>
        <div className='button-container'>
          <button onClick={request}>Request</button>
          <button onClick={next}>Next</button>
        </div>
        <div className='user-info-container'>
          <h2>Name: {name}</h2>
          <h2>gender: {gender}</h2>
          <h2>age: {age}</h2>
          <h2>location: {location}</h2>
        </div>
        <div className='interests-container'>
          <h2>interests: {interests}</h2>
        </div>
      </div>
    </div>
  );
}

export default User;