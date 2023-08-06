import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import PokemonItem from './resources/components/PokemonItem';

function PokemonList({navigation}: {navigation: any}): JSX.Element {
  const data = [
    {id: 1, name: 'Item 1', description: 'Description for Item 1'},
    {id: 2, name: 'Item 2', description: 'Description for Item 2'},
    {id: 3, name: 'Item 3', description: 'Description for Item 3'},
    {id: 4, name: 'Item 4', description: 'Description for Item 4'},
  ];
  const logoutAction = () => {
    navigation.popToTop();
  };

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={logoutAction}>
          <Image source={require('./resources/icons/logout-box-fill.png')} />
        </TouchableOpacity>
        <View>
          <Text>List of Items:</Text>
          <FlatList
            data={data}
            renderItem={({item}) => <PokemonItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PokemonList;
