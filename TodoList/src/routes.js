import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Todos from './pages/Todos';
import Raffle from './pages/Raffle';

export default function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todos"
          component={Todos}
          options={{
            title: 'Friends',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Raffle"
          component= {Raffle}
          options= {{
            title: 'Raffle',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
