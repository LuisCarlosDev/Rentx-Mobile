import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Header = styled.View`
  height: 292px;
  background: #1b1b1f;
`;

export const HeaderTitle = styled.Text`
  color: #ffffff;
  padding-top: 80px;
  margin-left: 24px;

  font-family: 'Archivo-SemiBold';
  font-size: 30px;
`;

export const InfoDate = styled.View`
  align-items: center;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 48px;

  svg {
    color: #7a7a7a;
  }
`;


export const InContent = styled.View`
  margin-left: 24px;
`;

export const InText = styled.Text`
  font-family: 'Archivo-SemiBold';
  color: #7a7a80;

`;

export const In = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  margin-top: 9px;
  color: #ffffff;
`;

export const TillContent = styled.View`
  margin-right: 24px;
`;

export const TillText = styled.Text`
  font-family: 'Archivo-SemiBold';
  color: #7a7a80;

`;

export const Till = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  margin-top: 9px;
  color: #ffffff;
`;
