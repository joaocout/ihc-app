import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './Dashboard';
import Gerenciamento from './Gerenciamento';
import Relatorios from './Relatorios';
import Login from './Login';
import Comodo from './Comodo';

import type { StackParamsList } from '../shared/types';

const Stack = createNativeStackNavigator<StackParamsList>();

const Entry = () => (
  <NavigationContainer>
    <Stack.Navigator id="Stack">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Gerenciamento" component={Gerenciamento} />
      <Stack.Screen name="Relatórios" component={Relatorios} />
      <Stack.Screen name="Cômodo" component={Comodo} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Entry;
