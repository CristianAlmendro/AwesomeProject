import React from 'react';
import Login from './Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonList from './PokemonList';

const Stack = createNativeStackNavigator();

function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PokemonList" component={PokemonList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainApp;
