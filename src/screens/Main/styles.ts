import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #312E2A;
`;

export const Content = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.TouchableOpacity`
  width: 90%;
  height: 40%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${(props) => (props.color ? props.color : '#8A95A5')};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
`;

export const TimerText = styled.Text`
  font-size: 100px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : '#000')};
`;

export const TimerTextTop = styled.Text`
  font-size: 100px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : '#000')};
  transform: rotate(180deg);
`;

export const ActionsWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
