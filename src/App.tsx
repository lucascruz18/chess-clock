import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from './components/Modal';
import ResetModal from './components/Modal/ResetModal';
import FinishMatchModal from './components/Modal/FinishMatch';

import {
  Container, Content, Box, TimerText, ActionsWrapper,
} from './styles';

Icon.loadFont();

const App: React.FC = () => {
  const [timePlayer1, setTimePlayer1] = useState(30);
  const [timePlayer2, setTimePlayer2] = useState(30);
  const [player1, setPlayer1] = useState(false);
  const [player2, setPlayer2] = useState(false);
  const [resetModal, setResetModal] = useState(false);
  const [finishMatchModal, setFinishMatchModal] = useState(false);
  const [playerWinner, setPlayerWinner] = useState('');

  useEffect(() => {
    if (timePlayer1 === 0) {
      setPlayerWinner('1');
      setPlayer1(false);
      setFinishMatchModal(true);
    }
    let startTimerPlayer1: number;

    if (player1) {
      setPlayer2(false);
      startTimerPlayer1 = setInterval(() => {
        setTimePlayer1(timePlayer1 - 1);
      }, 1000);
    }

    return () => clearInterval(startTimerPlayer1);
  }, [timePlayer1, player1]);

  useEffect(() => {
    if (timePlayer2 === 0) {
      setPlayerWinner('2');
      setPlayer2(false);
      setFinishMatchModal(true);
    }
    let startTimerPlayer2: number;

    if (player2) {
      setPlayer1(false);
      startTimerPlayer2 = setInterval(() => {
        setTimePlayer2(timePlayer2 - 1);
      }, 1000);
    }

    return () => clearInterval(startTimerPlayer2);
  }, [timePlayer2, player2]);

  const stopAllTimer = () => {
    setPlayer1(false);
    setPlayer2(false);
  };

  const resetTimers = () => {
    setPlayer1(false);
    setPlayer2(false);
    setTimePlayer1(30);
    setTimePlayer2(30);
    setFinishMatchModal(false);
    setResetModal(false);
  };

  return (
    <Container>
      <Content>
        <Box onPress={() => setPlayer2(!player2)} color={player1 && '#D34E24'}>
          <TimerText color={player1 ? '#FFF' : '#000'}>{timePlayer1}</TimerText>
        </Box>
        <ActionsWrapper>
          <Icon name="settings" size={50} color="#B9C6AE" style={{ marginRight: 50 }} />
          {player1 || player2 ? (
            <Icon
              name="pause"
              size={50}
              color="#B9C6AE"
              onPress={() => stopAllTimer()}
            />
          ) : null}
          <Icon
            name="repeat"
            size={50}
            color="#B9C6AE"
            style={{ marginLeft: 50 }} onPress={() => setResetModal(true)} />
        </ActionsWrapper>
        <Box onPress={() => setPlayer1(!player1)} color={player2 && '#D34E24'}>
          <TimerText color={player2 ? '#FFF' : '#000'}>{timePlayer2}</TimerText>
        </Box>
      </Content>
      {resetModal && (
        <Modal visibleModal={resetModal}>
          <ResetModal
            visibleModal={setResetModal}
            reset={resetTimers}
          />
        </Modal>
      )}
      {finishMatchModal && (
        <Modal visibleModal={finishMatchModal}>
          <FinishMatchModal
            visibleModal={setFinishMatchModal}
            reset={resetTimers}
            player={playerWinner}
          />
        </Modal>
      )}
    </Container>
  );
};

export default App;
