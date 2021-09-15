import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Cadastro from '../components/pages/Cadastro';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, title: 'Login' }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true, title: 'Home' }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false, title: 'Cadastro' }}
      />
    </Stack.Navigator>
  );
}
