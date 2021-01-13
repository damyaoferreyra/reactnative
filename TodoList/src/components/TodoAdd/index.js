import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container, SearchField, IconButton } from './styles';

export default function TodoAdd({ value, addTodo }) {
  const [newTodo, setNewTodo] = useState(value);

  function handleAddTodo() {
    if (newTodo) {
      addTodo(newTodo);
      setNewTodo('');
    }
  }

  return (
    <Container>
      <SearchField
        placeholder="write to do"
        onChangeText={(text) => setNewTodo(text)}
        value={newTodo}
      />
      <IconButton  name="add-box" color="green" size={30} onPress={handleAddTodo}/>
    </Container>
  );
}
