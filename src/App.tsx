import React from 'react';
import { StatusBar } from 'react-native';
import Login from './pages/LogIn';

// import { Container } from './styles';

const src: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Login />
    </>
  )
}

export default src;
