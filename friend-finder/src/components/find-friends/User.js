import React from 'react';

const User = ({ name, gender, dob, location, bio, next, request }) => {
  return (
    <div className='user-container'>
      <div className='container'>
        <div className='image-container'>
          <img src={`https://robohash.org/${dob}?set=set4&size=180x180`} alt='user-profile' />
        </div>
        <div className='button-container'>
          <button onClick={request}>Request</button>
          <button onClick={next}>Next</button>
        </div>
        <div className='user-info-container'>
          <h2>{name}</h2>
          <h2>{gender}</h2>
          <h2>birthday: {dob}</h2>
          <h2>location: {location}</h2>
        </div>
        <div className='interests-container'>
          <h2>Bio: {bio}</h2>
        </div>
      </div>
    </div>
  );
}

export default User;