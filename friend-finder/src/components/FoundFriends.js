import React from 'react';


function FoundFriend({ profile, name, gender, age, location, interests }) {
  const request = () => {
    // request as friend
  }

  const next = () => {
    // next profile
  }

  return (
    <div>
      <img alt='profile image' src={`http://linktoprofileimage/${profile}`} />
      <div>
        <h2>Name: {name}</h2>
        <h2>Gender: {gender}</h2>
        <h2>Age: {age}</h2>
        <h2>Location: {location}</h2>
      </div>
      <div>
        <button onClick={request}>Request</button>
        <button onClick={next}>Next</button>
      </div>
      <div>
        <h2>Interests: {interests}</h2>
      </div>
    </div>
  );
}

export default FoundFriend;
