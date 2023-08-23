import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PokemonDetail from './PokemonDetail';
import PokemonList from './PokemonList';

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
          <Stack.Screen name="PokemonList" component={PokemonList} />
          <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
export default MainApp;
