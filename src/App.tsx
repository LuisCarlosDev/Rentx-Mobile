import React from 'react';
import { StatusBar, View } from 'react-native';
import CreateAccount from './pages/SignUp/CreateAccount';
import Login from './pages/LogIn';
import CreateAccountPass from './pages/SignUp/CreateAccountPass';
import CreatedAccount from './pages/SignUp/CreatedAccount';
import Date from './pages/Date';

// import { Container } from './styles';

const src: React.FC = () => {
  return (
    <>

      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Date />
      </View>
    </>
  )
}

export default src;
