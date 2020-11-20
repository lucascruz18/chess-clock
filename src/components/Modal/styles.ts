import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const FormView = styled.View`
  width: 90%;
  height: 50%;
  min-height: 300px;
  justify-content: space-between;
  background-color: #f4f4f4;
  border-radius: 16px;
  padding: ${`${width * 0.1}px ${width * 0.07}px`};
`;

export const FormWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  elevation: 1;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.6)',
})`
  flex: 1;
  color: #333333;
  font-size: 16px;
  padding: 22px 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  background-color: ${({ color, disabled }) => (color || (disabled ? '#a3a3a3' : '#6C63FF'))};
  border-radius: 16px;
  padding: 22px 16px;

  ${(props) => props.group
    && css`
      height: 100%;
      width: 25%;
      border-radius: 0px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    `}
`;

export const ActionsButton = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  background-color: ${({ color }) => color || '#6C63FF'};
  border-radius: 4px;
  margin-top: 30px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ color }) => color || '#ffffff'};
  font-size: 16px;
  font-weight: bold;
`;
