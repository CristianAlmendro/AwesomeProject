import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from './resources/icons/BackIcon';
import Colors from './resources/colors';
import {useRoute} from '@react-navigation/native';
import {GET_POKEMON_DETAIL} from './services/GraphQLQuery';
import {useQuery} from '@apollo/client';
import {NavigationProp} from './resources/Types';
import {PokemonDetailData} from './models/PokemonDetailModel';
import {
  getPokemonArtWork,
  intToHexColor,
  uppercaseFirstLetter,
} from './resources/Utilities';
import PokemonBadge from './resources/components/PokemonBadge';

const PokemonDetail = ({navigation}: NavigationProp) => {
  const route = useRoute();
  const {pokemonId} = route.params;

  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailData>();
  const {loading, error, data} = useQuery(GET_POKEMON_DETAIL, {
    variables: {_eq: pokemonId},
  });

  if (data && !pokemonDetail) {
    setPokemonDetail(data.pokemonDetail[0]);
  }

  const goBackToList = () => {
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerContainer}>
        <TouchableOpacity style={style.backButton} onPress={goBackToList}>
          <BackIcon color={Colors.white} />
        </TouchableOpacity>
        {loading ? (
          <Text>Loading data...</Text>
        ) : (
          <View style={style.pokemonInfoContainer}>
            <View style={style.headerInfoContainer}>
              <Image
                style={style.pokemonImage}
                source={{
                  uri: getPokemonArtWork(pokemonId),
                }}
              />
              <View style={style.basicInfo}>
                <Text style={style.pokemonId}> {intToHexColor(pokemonId)}</Text>
                <Text style={style.pokemonName}>
                  {uppercaseFirstLetter(pokemonDetail?.name ?? '')}
                </Text>
                <FlatList
                  style={style.pokemonBadge}
                  data={pokemonDetail?.info[0].pokemonTypes}
                  renderItem={({item}) => (
                    <PokemonBadge item={item.type.name} />
                  )}
                  keyExtractor={item => String(item.type.id)}
                />
              </View>
            </View>
            <Text style={style.pokemonBaseHappiness}>base_happiness</Text>
            <Text style={style.pokemonBaseHappiness}>
              {pokemonDetail?.base_happiness}
            </Text>
            <Text style={style.pokemonBaseHappiness}>capture_rate</Text>
            <Text style={style.pokemonBaseHappiness}>
              {pokemonDetail?.capture_rate}
            </Text>
            <Text style={style.pokemonBaseHappiness}>gender_rate</Text>
            <Text style={style.pokemonBaseHappiness}>
              {pokemonDetail?.gender_rate}
            </Text>
            <Text style={style.pokemonBaseHappiness}>base_experience</Text>
            <Text style={style.pokemonBaseHappiness}>
              {pokemonDetail?.info[0].base_experience}
            </Text>
            <Text style={style.pokemonBaseHappiness}>height</Text>
            <Text style={style.pokemonBaseHappiness}>
              {pokemonDetail?.info[0].height}
            </Text>
            <Text style={style.pokemonBaseHappiness}>weight</Text>
            <Text style={style.pokemonBaseHappiness}>
              {pokemonDetail?.info[0].weight}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.backgroundTypeGrass,
  },
  headerContainer: {
    flexDirection: 'column',
    marginHorizontal: 40,
  },
  backButton: {
    marginTop: 40,
    width: 25,
    height: 25,
  },
  pokemonBadge: {
    flexDirection: 'row',
  },
  pokemonBaseHappiness: {
    fontSize: 14,
  },
  pokemonInfoContainer: {
    flexDirection: 'column',
  },
  pokemonImage: {
    width: 125,
    height: 125,
  },
  pokemonId: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.textPokemonId,
  },
  headerInfoContainer: {
    flexDirection: 'row',
  },
  basicInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    left: 25,
  },
  pokemonName: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.white,
  },
});

export default PokemonDetail;
