import React from 'react';
import { Modal } from 'react-native';

import { Container } from './styles';

export default function MainModal({ children, visibleModal }) {
  return (
    <Modal visible={visibleModal} animationType="fade" transparent>
      <Container>{children}</Container>
    </Modal>
  );
}
