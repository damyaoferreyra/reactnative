import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Name, IconButton } from './styles';

export default function TodoItem({ name, actionDelete, actionEdit }) {
  return (
    <Container>
      <Name>{name}</Name>
      <IconButton name="delete" color="red" onPress={actionDelete} />
      <IconButton name="edit" color="black" onPress={actionEdit} />
    </Container>
  );
}

/**
 * <Text key={index} style={{ textAlign: 'center', margin: 2 }}>
            {td}
          </Text>
 */
