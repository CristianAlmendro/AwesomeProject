import {useQuery} from '@apollo/client';
import {useRoute} from '@react-navigation/native';
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
import {PokemonDetailData} from './models/PokemonDetailModel';
import {NavigationProp} from './resources/Types';
import {getPokemonArtWork, intToHexColor} from './resources/Utilities';
import Colors from './resources/colors';
import CardAbout from './resources/components/CardAbout';
import CardEvolution from './resources/components/CardEvolution';
import CardStats from './resources/components/CardStats';
import PokemonBadge from './resources/components/PokemonBadge';
import {getDynamicStyles} from './resources/dynamicStyles';
import BackIcon from './resources/icons/BackIcon';
import {GET_POKEMON_DETAIL} from './services/GraphQLQuery';

const PokemonDetail = ({navigation}: NavigationProp) => {
  const route = useRoute();
  const {pokemonId} = route.params;

  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailData>();
  const [cardSelected, setCardSelected] = useState<number>(0);
  const {loading, error, data} = useQuery(GET_POKEMON_DETAIL, {
    variables: {_eq: pokemonId},
  });

  if (data && !pokemonDetail) {
    setPokemonDetail(data.pokemonDetail[0]);
  }

  const goBackToList = () => {
    navigation.popToTop();
  };

  const dynamicStyles = getDynamicStyles(
    pokemonDetail?.info[0].pokemonTypes[0].type.name ?? '',
  );

  const handleCardSelection = (cardId: number) => {
    setCardSelected(cardId);
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={dynamicStyles.background}>
        <View style={style.headerContainer}>
          <TouchableOpacity style={style.backButton} onPress={goBackToList}>
            <BackIcon color={Colors.white} />
          </TouchableOpacity>
          {loading ? (
            <Text>Loading data...</Text>
          ) : (
            <View style={style.pokemonContent}>
              <View style={style.headerInfoContainer}>
                <View style={style.pokemonImageContainer}>
                  <Image
                    style={style.pokemonImage}
                    source={{
                      uri: getPokemonArtWork(pokemonId),
                    }}
                  />
                </View>
                <View style={style.pokemonInfoContainer}>
                  <Text style={style.pokemonId}>
                    {intToHexColor(pokemonId)}
                  </Text>
                  <Text style={style.pokemonName}>
                    {pokemonDetail?.name ?? ''}
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
            </View>
          )}
        </View>
        {/* BUTTONS */}
        <View style={style.buttonSection}>
          <TouchableOpacity onPress={() => handleCardSelection(0)}>
            <Text
              style={
                cardSelected === 0
                  ? style.buttonSelected
                  : style.buttonUnselected
              }>
              About
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleCardSelection(1)}>
            <Text
              style={
                cardSelected === 1
                  ? style.buttonSelected
                  : style.buttonUnselected
              }>
              Stats
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleCardSelection(2)}>
            <Text
              style={
                cardSelected === 2
                  ? style.buttonSelected
                  : style.buttonUnselected
              }>
              Evolution
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.card}>
          {cardSelected === 0 ? (
            <CardAbout pokemonDetail={pokemonDetail} />
          ) : cardSelected === 1 ? (
            <CardStats pokemonDetail={pokemonDetail} />
          ) : (
            <CardEvolution />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  headerContainer: {
    marginLeft: 10,
  },
  backButton: {
    marginTop: 40,
    width: 25,
    height: 25,
  },
  pokemonBadge: {
    marginTop: 5,
    flexDirection: 'row',
  },
  pokemonBaseHappiness: {
    fontSize: 14,
  },
  pokemonInfoContainer: {
    marginLeft: 20,
    marginTop: 20,
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
    left: 25,
  },
  pokemonName: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.white,
  },
  pokemonImageContainer: {
    zIndex: 2,
  },
  pokemonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 140,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    marginTop: 61,
  },
  buttonSelected: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
  },
  buttonUnselected: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    opacity: 0.5,
  },
  card: {
    backgroundColor: Colors.white,
    padding: 40,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
  },
});

export default PokemonDetail;
