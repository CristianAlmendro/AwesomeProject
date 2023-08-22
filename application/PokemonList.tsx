import {useQuery} from '@apollo/client';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PokemonData} from './models/Pokemon';
import Colors from './resources/colors';
import CustomTextInput from './resources/components/CustomTextField';
import PokemonItem from './resources/components/PokemonItem';
import FilterIcon from './resources/icons/FilterIcon';
import GenerationIcon from './resources/icons/GenerationIcon';
import PokeballIcon from './resources/icons/PokeballIcon';
import SortIcon from './resources/icons/SortIcon';
import {GET_POKEMONS} from './services/GraphQLQuery';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const limit = 100;

function PokemonList(): JSX.Element {
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonData[]>([]);
  const [search, setSearch] = useState('');
  const {loading, error, data, fetchMore} = useQuery(GET_POKEMONS, {
    variables: {limit: limit, offset: 0},
  });

  useEffect(() => {
    if (data && pokemonList.length === 0) {
      setPokemonList(data.pokemons);
    }
  }, [data, pokemonList]);

  const handleLoadMore = () => {
    fetchMore({
      variables: {limit, offset: data.pokemons.length},
      updateQuery: (prevResult, {fetchMoreResult}) => {
        if (!fetchMoreResult) {
          return prevResult;
        }
        setPokemonList(list => list.concat(fetchMoreResult.pokemons));
      },
    });
  };

  const handleSearch = (searchText: string) => {
    setSearch(searchText);
    setFilteredPokemons(
      pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };

  const separator = () => {
    return <View style={style.separator} />;
  };

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  function changeBottomSheetRef() {
    bottomSheetRef.current?.present();
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <SafeAreaView style={style.safeAreaContainer}>
          <View style={style.pokeballContainer}>
            <PokeballIcon />
          </View>
          <View style={style.container}>
            <View style={style.icons}>
              <TouchableOpacity
                onPress={changeBottomSheetRef}
                style={style.icon}>
                <GenerationIcon color={Colors.black} width={25} height={25} />
              </TouchableOpacity>
              <TouchableOpacity style={style.icon}>
                <SortIcon color={Colors.black} width={25} height={25} />
              </TouchableOpacity>
              <TouchableOpacity style={style.icon}>
                <FilterIcon color={Colors.black} width={25} height={25} />
              </TouchableOpacity>
            </View>
            <Text style={style.title}>Pokédex</Text>
            <Text style={style.subtitle}>
              Search for Pokémon by name or using the National Pokédex number.
            </Text>
            <CustomTextInput
              placeholder="What Pokémon are you looking for?"
              value={search}
              onChangeText={handleSearch}
            />
            {loading && pokemonList.length === 0 ? (
              <Text>Loading...</Text>
            ) : error ? (
              <Text>Error: {error.message}</Text>
            ) : (
              <FlatList
                style={style.list}
                data={search.length === 0 ? pokemonList : filteredPokemons}
                renderItem={item => <PokemonItem pokemon={item.item} />}
                keyExtractor={(item: PokemonData) => item.id.toString()}
                ItemSeparatorComponent={separator}
                showsVerticalScrollIndicator={false}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.3}
              />
            )}
          </View>
        </SafeAreaView>
        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}>
          <View style={style.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  pokeballContainer: {
    position: 'absolute',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  icons: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'flex-end',
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginTop: 40,
    color: Colors.black,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'normal',
    color: Colors.textBlack,
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    color: Colors.textGray,
    paddingBottom: 25,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    height: 5,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default PokemonList;
