import React from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
