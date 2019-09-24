import React from 'react';
import { withRouter } from 'react-router-dom';

const Login = ({ history }) => {
  const submitLogin = () => {
    history.push('/');
  }

  return (
    <button onClick={submitLogin}>Login</button>
  );
}

export default withRouter(Login);
