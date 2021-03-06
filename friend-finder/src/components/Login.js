import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Login = ({ history }) => {
  const [userCredentials, setCredentials] = useState({ 
    email: '', 
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();
    
    // Destructure what you're passing in to match login info
    // example: const login = ({ userSignIn }) =>
    // userSignIn(email, password);

    axios
    .post('https://friend-finder-levi.herokuapp.com/api/auth/login', userCredentials)
    .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);   
        history.push('/friendrequest');        
        
        
        
        
    })
    
    .catch(err => console.log('error in signup', err));
};

    
  

  const handleChange = event => {
    const { value, name } = event.target;
    console.log(userCredentials);

    setCredentials({...userCredentials, [name]: value });    
  }

  return (
    <div className='login-info'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          label='email'
          placeholder='Email'
          required
        />
        <input
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='password'
          placeholder='Password'
          required
        />

        <input type='submit' value='Submit Form' />
      </form>
    </div>
  );
  }

export default withRouter(Login);
