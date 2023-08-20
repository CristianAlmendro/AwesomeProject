import {useQuery} from '@apollo/client';
import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PokemonDetailData} from './models/PokemonDetailModel';
import {NavigationProp} from './resources/Types';
import Colors from './resources/colors';
import CardAbout from './resources/components/CardAbout';
import CardEvolution from './resources/components/CardEvolution';
import CardStats from './resources/components/CardStats';
import DetailHeader from './resources/components/DetailHeader';
import {getDynamicStyles} from './resources/dynamicStyles';
import BackIcon from './resources/icons/BackIcon';
import {GET_POKEMON_DETAIL} from './services/GraphQLQuery';
import {uppercaseFirstLetter} from './resources/Utilities';

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
  const pokemonName = uppercaseFirstLetter(pokemonDetail?.name ?? '');

  return (
    <View style={dynamicStyles.detailMainView}>
      <SafeAreaView style={style.safeArea}>
        <View style={style.headerContainer}>
          <TouchableOpacity style={style.backButton} onPress={goBackToList}>
            <BackIcon color={Colors.white} />
          </TouchableOpacity>
          <DetailHeader pokemonDetail={pokemonDetail} />
        </View>
      </SafeAreaView>

      {/* BUTTONS */}
      <View style={style.buttonSection}>
        <TouchableOpacity onPress={() => handleCardSelection(0)}>
          <Text
            style={
              cardSelected === 0 ? style.buttonSelected : style.buttonUnselected
            }>
            About
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCardSelection(1)}>
          <Text
            style={
              cardSelected === 1 ? style.buttonSelected : style.buttonUnselected
            }>
            Stats
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCardSelection(2)}>
          <Text
            style={
              cardSelected === 2 ? style.buttonSelected : style.buttonUnselected
            }>
            Evolution
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.cardsContainer}>
        {cardSelected === 0 ? (
          <CardAbout pokemonDetail={pokemonDetail} />
        ) : cardSelected === 1 ? (
          <CardStats pokemonDetail={pokemonDetail} />
        ) : (
          <CardEvolution />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    margin: 40,
  },
  safeArea: {
    height: 265,
  },
  backButton: {
    width: 25,
    height: 25,
    zIndex: 2,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  cardsContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default PokemonDetail;
