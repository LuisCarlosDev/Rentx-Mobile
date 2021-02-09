import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  background: #dc1637;
  border-radius: 10px;
  margin-top: 30px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Medium';
  color: #ffffff;
  font-size: 18px;
`;
