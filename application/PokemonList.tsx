import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PokemonItem from './resources/components/PokemonItem';
import Colors from './resources/colors';
import CustomTextInput from './resources/components/CustomTextField';
import {useQuery} from '@apollo/client';
import FilterIcon from './resources/icons/FilterIcon';
import GenerationIcon from './resources/icons/GenerationIcon';
import SortIcon from './resources/icons/SortIcon';
import {GET_POKEMONS} from './services/GraphQLQuery';
import {Pokemon, PokemonData} from './models/Pokemon';
import PokeballIcon from './resources/icons/PokeballIcon';

function PokemonList(): JSX.Element {
  const [limit] = useState(20);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const {loading, error, data, fetchMore} = useQuery(GET_POKEMONS, {
    variables: {limit: limit, offset: 0},
  });

  if (data && pokemonList.length === 0) {
    setPokemonList(
      data.pokemons.map((pokemonData: PokemonData) => new Pokemon(pokemonData)),
    );
  }

  const handleLoadMore = () => {
    fetchMore({
      variables: {limit, offset: data.pokemons.length},
      updateQuery: (prevResult, {fetchMoreResult}) => {
        if (!fetchMoreResult) {
          return prevResult;
        }
        setPokemonList(list =>
          list.concat(
            fetchMoreResult.pokemons.map(
              (pokemonData: PokemonData) => new Pokemon(pokemonData),
            ),
          ),
        );
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

  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <View style={style.pokeballContainer}>
        <PokeballIcon />
      </View>
      <View style={style.container}>
        <View style={style.icons}>
          <TouchableOpacity style={style.icon}>
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
          <SafeAreaView>
            <Text>Loading...</Text>
          </SafeAreaView>
        ) : error ? (
          <SafeAreaView>
            <Text>Error: {error.message}</Text>
          </SafeAreaView>
        ) : (
          <FlatList
            style={style.list}
            data={search.length === 0 ? pokemonList : filteredPokemons}
            renderItem={({item}) => <PokemonItem pokemon={item} />}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={separator}
            showsVerticalScrollIndicator={false}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </SafeAreaView>
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
});

export default PokemonList;
