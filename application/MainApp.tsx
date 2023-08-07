import React from 'react';
import Login from './Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonList from './PokemonList';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

function MainApp() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="PokemonList" component={PokemonList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
export default MainApp;
