import React from 'react';

import { Image, StatusBar } from 'react-native';

import backgroundArrowLeft from '../../assets/arrow.png';

import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, Header, HeaderTitle, InfoDate, InText, In, TillText, Till, InContent, TillContent, Calendar} from './styles';

const Date: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1b1b1f" />
      <Header>
        <HeaderTitle>Escolha a{"\n"}data e encontre{"\n"}um carro.</HeaderTitle>

        <InfoDate>
          <InContent>
            <InText>DE</InText>
            <In>12/02/2021</In>
          </InContent>

          <Image source={backgroundArrowLeft} />

          <TillContent>
            <TillText>ATÉ</TillText>
            <Till>20/06/2021</Till>
          </TillContent>
        </InfoDate>

      </Header>

      <Calendar>
        <DateTimePicker mode="date" value={new Date()} />
      </Calendar>
    </Container>
  );
};

export default Date;
