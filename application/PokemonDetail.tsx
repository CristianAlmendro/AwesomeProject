import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from './resources/icons/BackIcon';
import Colors from './resources/colors';
import {useRoute} from '@react-navigation/native';
import {GET_POKEMON_DETAIL} from './services/GraphQLQuery';
import {useQuery} from '@apollo/client';
import {PokemonModel} from './models/PokemonModel';

const PokemonDetail = ({navigation}: {navigation: any}) => {
  const route = useRoute();
  const {pokemonId} = route.params;

  const {loading, error, data} = useQuery(GET_POKEMON_DETAIL, {
    variables: {_eq: pokemonId},
  });
  console.log(data);
  // const pokemonDetail = new PokemonModel(data.data);

  const goBackToList = () => {
    navigation.popToTop();
  };

  if (loading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      <View>
        <TouchableOpacity onPress={goBackToList}>
          <BackIcon style={style.backButton} />
        </TouchableOpacity>
        <Text>{pokemonId} </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundTypeGrass,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 40,
  },
});

export default PokemonDetail;
