import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Header, Title, SubTitle, BackButton, ForgotPassword, ForgotPasswordText, } from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

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
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordInputRef.current?.focus();
          }}
          name="E-mail"
          icon="mail"
          placeholder="E-mail"
        />
        <Input
          ref={passwordInputRef}
          name="Password"
          icon="lock"
          placeholder="Senha"
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />

        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>

        <Button>
          Login
        </Button>

      </Form>
    </Container>
  );
}

export default Login;
