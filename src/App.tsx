import React from 'react';
import { StatusBar, View } from 'react-native';
import Login from './pages/LogIn';

// import { Container } from './styles';

const src: React.FC = () => {
  return (
    <>

      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Login />
      </View>
    </>
  )
}

export default src;
