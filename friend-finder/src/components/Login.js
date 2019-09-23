import React from 'react';

import Signup from './Signup';

const submitLogin = (e) => {
  e.preventDefault();
  history.push('/home');
}

const Login = () => {
  return (
    <button onClick={submitLogin}>Login</button>
  );
}

export default Login;
