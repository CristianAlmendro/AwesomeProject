import React from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Colors from './resources/colors';
import PrimaryButton from './resources/components/primaryButton';
function Login(): JSX.Element {
  const [email, onChangeEmail] = React.useState('');

  const handlePress = () => {
    // Handle the touch event here
    console.log('Button pressed!');
  };

  return (
    <View style={style.appContainer}>
      <SafeAreaView style={style.container}>
        <Image source={require('./resources/images/pokedex_logo.png')}></Image>
        <Text style={style.title}> LOGIN </Text>
        <TextInput style={style.input} onChangeText={onChangeEmail}></TextInput>
        <PrimaryButton onPress={handlePress}>
          <Text style={style.submitText}>Login</Text>
        </PrimaryButton>
        {/* <TouchableHighlight
          onPress={() => Alert.alert('Simple Button pressed')}
          style={style.button}>
          <Text style={style.submitText}>Login</Text>
        </TouchableHighlight> */}
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    marginTop: 100,
    marginBottom: 80,
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  submitText: {
    color: Colors.text,
    textAlign: 'center',
  },
  input: {
    height: 60,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    width: '80%',
    backgroundColor: Colors.backgroundInput,
  },
});
export default Login;
