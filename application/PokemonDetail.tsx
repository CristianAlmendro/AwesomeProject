import {useQuery} from '@apollo/client';
import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PokemonDetailData} from './models/PokemonDetailModel';
import {NavigationProp} from './resources/Types';
import Colors from './resources/colors';
import CardAbout from './resources/components/CardAbout';
import CardEvolution from './resources/components/CardEvolution';
import CardStats from './resources/components/CardStats';
import DetailHeader from './resources/components/DetailHeader';
import DetailTabs from './resources/components/DetailTabs';
import {getDynamicStyles} from './resources/dynamicStyles';
import BackIcon from './resources/icons/BackIcon';
import {GET_POKEMON_DETAIL} from './services/GraphQLQuery';

const PokemonDetail = ({navigation}: NavigationProp) => {
  const route = useRoute();
  const {pokemonId} = route.params;

  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailData>();
  const [tabSelected, setTabSelected] = useState<number>(0);
  const {loading, error, data} = useQuery(GET_POKEMON_DETAIL, {
    variables: {_eq: pokemonId},
  });

  if (data && !pokemonDetail) {
    setPokemonDetail(data.pokemonDetail[0]);
  }

  const goBackToList = () => {
    navigation.pop();
  };

  const dynamicStyles = getDynamicStyles(
    pokemonDetail?.info[0].pokemonTypes[0].type.name ?? '',
  );

  const handleCardSelection = (cardId: number) => {
    setTabSelected(cardId);
  };

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
      <View>
        <DetailTabs
          tabSelected={tabSelected}
          setTabSelected={handleCardSelection}
        />
      </View>
      <View style={style.cardsContainer}>
        {tabSelected === 0 ? (
          <CardAbout pokemonDetail={pokemonDetail} />
        ) : tabSelected === 1 ? (
          <CardStats pokemonDetail={pokemonDetail} />
        ) : (
          <CardEvolution pokemonDetail={pokemonDetail} />
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
  cardsContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default PokemonDetail;
