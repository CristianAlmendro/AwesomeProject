import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import PokemonItem from './resources/components/PokemonItem';
import Colors from './resources/colors';
import CustomTextInput from './resources/components/CustomTextField';

function PokemonList({navigation}: {navigation: any}): JSX.Element {
  const data = [
    {id: 1, name: '#001', description: 'Description for Item 1'},
    {id: 2, name: 'Item 2', description: 'Description for Item 2'},
    {id: 3, name: 'Item 3', description: 'Description for Item 3'},
    {id: 4, name: 'Item 4', description: 'Description for Item 4'},
  ];

  const [search, setSearch] = useState('');

  const logoutAction = () => {
    navigation.popToTop();
  };

  const Separator = () => <View style={style.separator} />;

  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.icons}>
          <TouchableOpacity style={style.icon}>
            <Image source={require('./resources/icons/Generation.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={style.icon}>
            <Image source={require('./resources/icons/Sort.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={style.icon}>
            <Image source={require('./resources/icons/Filter.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={style.icon} onPress={logoutAction}>
            <Image source={require('./resources/icons/logout-box-fill.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.title}>Pokédex</Text>
          <Text style={style.subtitle}>
            Search for Pokémon by name or using the National Pokédex number.
          </Text>
          <CustomTextInput
            placeholder="What Pokémon are you looking for?"
            imageSource={require('./resources/icons/Search.png')}
            value={search}
            onChangeText={setSearch}
          />
          <FlatList
            style={style.list}
            data={data}
            renderItem={({item}) => <PokemonItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={Separator}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
    height: '100%',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'flex-end',
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginTop: 40,
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
    marginTop: 20,
  },
  separator: {
    height: 5,
    backgroundColor: Colors.background,
  },
});

export default PokemonList;
