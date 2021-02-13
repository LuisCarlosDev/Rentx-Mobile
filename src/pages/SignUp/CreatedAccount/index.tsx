import React from 'react';
import { View, Image, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import backgroundImage from '../../../assets/background.png';


import { Container, Background, Checked, Title, SubTitle, OkButton, OkButtonText} from './styles';

const CreatedAccount: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1b1b1f" />
      <Background>
        <Image source={backgroundImage} />
      </Background>
      <Checked>
        <Icon name="check" size={50} color="#03b352" />
      </Checked>

      <Title>Conta criada!</Title>
      <SubTitle>Agora é só fazer login{"\n"} e aproveitar.</SubTitle>

      <OkButton>
        <OkButtonText>OK</OkButtonText>
      </OkButton>
    </Container>
  );
}

export default CreatedAccount;
