import React from 'react';

// import { ButtonThird, ButtonSecondary } from "../../Buttons";
import {
  Container,
  Overlay,
  Header,
  Title,
  Message,
  Content,
  Button,
  CancelButton,
  ButtonText,
} from './styles';

const StartCleaningModal = ({
  visibleModal,
  reset,
}) => (
    <Overlay>
      <Container>
        <Header>
          <Title>Are you sure you want to restart ?</Title>
        </Header>

        <Content>
          <Message>Times have returned to the initial state</Message>

          <Button onPress={() => reset()}>
            <ButtonText>Reset</ButtonText>
          </Button>
          <CancelButton onPress={() => visibleModal(false)}>
            <ButtonText color="#D34E24">Cancel</ButtonText>
          </CancelButton>
        </Content>
      </Container>
    </Overlay>
);

export default StartCleaningModal;
