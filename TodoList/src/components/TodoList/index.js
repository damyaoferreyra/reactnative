import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import TodoAdd from '../../components/TodoAdd';
import TodoItem from '../../components/TodoItem';

import { Alert, Button, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function TodoList() {
  const navigation = useNavigation();
  const [todos, setTodos] = useState(
    [
      'Damião',
      'Erivânia',
      'Júlio',
      'Renata',
      'Edina',
      'Luiz Filho',
      'Hélio',
      'Juliana',
    ].sort()
  );

  function addTodo(text) {
    setTodos([...todos, text].sort());
  }

  function handleEdit(indexItemSelected, ItemSelected) {
    // handleDelete(indexItemSelected);
    Alert.alert('Atenção', 'Função ainda não implementada');
  }

  function handleDelete(indexItemSelected) {
    let newTodos = todos.filter((item, index) => index != indexItemSelected);
    setTodos(newTodos);
  }

  function handleClean() {
    console.log('adsd');
    Alert.alert('Atenção', 'Deseja limpar a lista?', [
      { text: 'Sim', onPress: () => setTodos([]) },
      { text: 'Não' },
    ]);
  }

  return (
    <>
      <Container>
        <TodoAdd addTodo={addTodo} />
        <FlatList
          data={todos}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item, index }) => (
            <TodoItem
              key={index}
              name={item}
              actionEdit={() => handleEdit(index, item)}
              actionDelete={() => handleDelete(index)}
            />
          )}
        />
      </Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}
      >
        <Button
          onPress={handleClean}
          title="Clean"
          style={{ backgroundColor: 'red' }}
        />
        <Button
          onPress={() => {
            if (todos.length > 1) {
              navigation.navigate('Raffle', { todos });
            } else {
              Alert.alert('Atenção', 'Adicione ao menos 2 pessoa!', [
                { text: 'Ok' }
              ]);
            }
          }}
          title="Raffle"
          style={{ background: 'red' }}
        />
      </View>
    </>
  );
}
