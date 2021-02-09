import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';

import { Container, Header, Title, SubTitle, BackButton,  } from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);


  return (
    <Container>
      <Header>
        <BackButton>
          <Icon name="chevron-left" color="#aeaeb3" size={24} />
        </BackButton>
        <Title>
            Estamos{"\n"}quase lá.
        </Title>
        <SubTitle>
          Faça seu login para começar uma experiência incrível.
        </SubTitle>
      </Header>

      <Form ref={formRef} onSubmit={() => {}}>
        <Input
          name="e-mail"
          icon="email"
        />

      </Form>
    </Container>
  );
}

export default Login;
