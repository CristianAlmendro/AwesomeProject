import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from './resources/icons/BackIcon';
import Colors from './resources/colors';
import {useRoute} from '@react-navigation/native';
import {GET_POKEMON_DETAIL} from './services/GraphQLQuery';
import {useQuery} from '@apollo/client';
import {NavigationProp} from './resources/Types';
import {PokemonDetailModel} from './models/PokemonDetailModel';

const PokemonDetail = ({navigation}: NavigationProp) => {
  const route = useRoute();
  const {pokemonId} = route.params;

  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailModel>();
  const {loading, error, data} = useQuery(GET_POKEMON_DETAIL, {
    variables: {_eq: pokemonId},
  });
  if (data && !pokemonDetail) {
    console.log(data);
    console.log(data.pokemon_v2_pokemonspecies[0].base_happiness);
    const pokemon = new PokemonDetailModel(data.pokemon_v2_pokemonspecies[0]);
    setPokemonDetail(pokemon);
  }

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
    <SafeAreaView>
      <View style={style.headerContainer}>
        <TouchableOpacity style={style.backButton} onPress={goBackToList}>
          <BackIcon color={Colors.white} />
        </TouchableOpacity>
        <Text>Loading...</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <Text style={style.pokemonBaseHappiness}>
            {pokemonDetail?.base_happiness}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignContent: 'center',
    backgroundColor: Colors.backgroundTypeGrass,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 40,
  },
  pokemonBadge: {
    flexDirection: 'row',
  },
  pokemonBaseHappiness: {
    color: Colors.white,
    fontSize: 14,
  },
});

export default PokemonDetail;
