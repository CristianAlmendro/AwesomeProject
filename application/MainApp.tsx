import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import PokemonList from './PokemonList';
import Login from './Login';
import PokemonDetail from './PokemonDetail';

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

function MainApp() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="PokemonList">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="PokemonList" component={PokemonList} />
          <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
export default MainApp;
