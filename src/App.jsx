import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return <div>{isAuthenticated ? <Home /> : <Login />}</div>;
};

export default App;
