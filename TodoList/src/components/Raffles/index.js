import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Container, Button, Detail } from './styles';
import { Alert, Text } from 'react-native';

export default function Raffle() {
  const route = useRoute();
  const { todos } = route.params;

  const [todosRaffle, setTodosRaffle] = useState(todos);
  const [indexRaffled, setIndexRaffled] = useState(0);
  const [confirmation, setConfirmation] = useState(false);
  const [raffledItem, setRaffledItem] = useState('Toque na tela');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    console.log(todosRaffle);
    let mounted = true;

    setTimeout(() => {
      if (mounted) {
        if (todosRaffle.length > 1 && confirmation) {
          setConfirmation(false);
          Alert.alert('Atenção', `Você é ${raffledItem}?`, [
            {
              text: 'Sim',
              onPress: () => {
                setDisabled(false);
                setRaffledItem('Toque na tela');
              },
            },
            {
              text: 'Não',
              onPress: () => {
                selectItem();
              },
            },
          ]);
        }
      } else {
        if (todosRaffle.length == 1) {
          selectItem();
        }
      }
    }, 5000);

    return function cleanup() {
      mounted = false;
    };
  });

  function selectItem() {
    let todosRest = todosRaffle.filter(
      (item, indexCurrent) => indexCurrent != indexRaffled
    );

    setTodosRaffle(todosRest);
    console.log(todosRest);

    if (todosRest.length == 0) {
      setRaffledItem('Finished');
      setDisabled(true);
    } else {
      setDisabled(false);
      setRaffledItem('Toque na tela');
    }
  }

  function handleRaffle() {
    setDisabled(true);
    setConfirmation(true);

    let index = Math.floor(Math.random() * Math.floor(todosRaffle.length));
    console.log(index);
    let item = todosRaffle[index];
    setRaffledItem(item);
    setIndexRaffled(index);
  }

  return (
    <Container>
      <Button onPress={handleRaffle} disabled={disabled}>
        <Detail>{raffledItem}</Detail>
      </Button>
    </Container>
  );
}
