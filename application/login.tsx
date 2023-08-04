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
  const [password, onChangePassword] = React.useState('');

  const handlePress = () => {
    // Handle the touch event here
    console.log('Button pressed!');
  };

  return (
    <View style={style.appContainer}>
      <SafeAreaView style={style.container}>
        <Image
          style={style.logo}
          source={require('./resources/images/pokedex_logo.png')}></Image>

        <View style={style.form}>
          <Text style={style.label}> Email </Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeEmail}
            placeholder="Email"></TextInput>
          <Text style={style.label}> Password </Text>

          <TextInput
            style={style.input}
            onChangeText={onChangePassword}
            placeholder="Password"
            numberOfLines={1}
            maxLength={50}></TextInput>
        </View>
        <PrimaryButton onPress={handlePress}>
          <Text style={style.submitText}>Login</Text>
        </PrimaryButton>
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
    marginTop: 60,
    marginBottom: 80,
    height: '100%',
  },
  logo: {
    width: '80%',
    height: 100,
    marginBottom: 50,
  },
  label: {
    fontWeight: 'normal',
    fontSize: 16,
    color: Colors.textGray,
  },
  submitText: {
    color: Colors.white,
    textAlign: 'center',
  },
  input: {
    height: 60,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.backgroundInput,
  },
  form: {
    width: '80%',
  },
});
export default Login;
