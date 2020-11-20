import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Overlay = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.View`
  width: 80%;
  height: 40%;
  min-height: 300px;
  justify-content: center;
  background-color: #f4f4f4;
  border-radius: 16px;
  padding: ${`${width * 0.1}px ${width * 0.07}px`};
  background: #333;
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.35);
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #D34E24;
`;

export const Message = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #d4d4d4;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  max-height: 100%;
  padding: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color || '#D34E24'};
  border-radius: 12px;
  margin-top: 50px;
  margin-bottom: 15px;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border: 2px #D34E24;
  border-radius: 12px;
`;

export const ButtonText = styled.Text`
  color: ${({ color }) => color || '#ffffff'};
  font-size: 14px;
`;
