import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background: #1b1b1f;
`;

export const Background = styled.View`
  margin-top: 96px;
`;

export const Checked = styled.View`
  align-items: center;
  justify-content: center;
  border: 5px solid #29292e;
  max-width: 60px;
  left: 146px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-SemiBold';
  text-align: center;
  color: #e1e1e6;
  font-size: 30px;
  margin-top: 46px;
`;

export const SubTitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  text-align: center;
  margin-top: 16px;
  color: #a8a8b3;
`;

export const OkButton = styled(RectButton)`
  background: #29292e;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  max-width: 80px;
  height: 56px;
  left: 141px;
`;

export const OkButtonText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #ffffff;

`;
