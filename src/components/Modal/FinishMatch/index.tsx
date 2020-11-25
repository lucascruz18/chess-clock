import React from 'react';

import {
  Container,
  Overlay,
  Header,
  Title,
  Content,
  Button,
  ButtonText,
} from './styles';

const FinishMatchModal = ({
  visibleModal,
  reset,
  player,
}) => (
    <Overlay>
      <Container>
        <Header>
          <Title>{`Congratulations, the player ${player} wins 🎉`}</Title>
        </Header>

        <Content>
          {/* <Message>Times have returned to the initial state</Message> */}

          <Button onPress={() => reset()}>
            <ButtonText>Start again!</ButtonText>
          </Button>
        </Content>
      </Container>
    </Overlay>
);

export default FinishMatchModal;
