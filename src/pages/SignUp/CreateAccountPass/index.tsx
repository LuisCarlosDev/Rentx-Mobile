import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useCallback, useRef } from 'react';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container, Header, Title, SubTitle, BackButton, FormTitle } from './styles';

const CreateAccountPass: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (

    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon name="chevron-left" color="#aeaeb3" size={24} />
        </BackButton>
        <Title>
            Crie sua{"\n"}conta
        </Title>
        <SubTitle>
          Faça seu cadastro de{"\n"}forma rápida e fácil
        </SubTitle>
      </Header>

      <Form ref={formRef} onSubmit={() => {}}>

        <FormTitle>02. Senha</FormTitle>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => {
            emailInputRef.current?.focus();
          }}
          name="Password"
          icon="lock"
          placeholder="Senha"
        />
        <Input
          ref={emailInputRef}
          name="PasswordConfirmation"
          icon="lock"
          placeholder="Repetir senha"
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />

        <Button>
          Cadastrar
        </Button>

      </Form>
    </Container>
  );
}

export default CreateAccountPass;
