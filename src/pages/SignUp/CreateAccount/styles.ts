import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  text-align: left;
  padding-top: 24px;
  margin-right: 24px;
  margin-left: 24px;
  background: #ffffff;
`;

export const Header = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 32px;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: #3d3d4d;
  font-size: 40px;
  line-height: 43px;
  font-family: 'Archivo-SemiBold';

  margin-top: 80px;
`;

export const SubTitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  line-height: 25px;
  color: #7a7a80;

  margin-top: 24px;
  margin-bottom: 110px;
`;

export const FormTitle = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 20px;
  margin-bottom: 24px;
`;

