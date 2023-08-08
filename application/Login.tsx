import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Colors from './resources/colors';
import PrimaryButton from './resources/components/PrimaryButton';
import CustomTextInput from './resources/components/CustomTextField';
import apiService from './services/apiService';

function Login({navigation}: {navigation: any}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogginAction = async () => {
    try {
      const data = await apiService.getAllUsers();
      if (data) {
        navigation.navigate('PokemonList');
      }
    } catch (error) {
      console.error('Error calling API:', error);
      Alert.alert('Error', 'An error occurred while calling the API.');
    }
  };

  return (
    <View style={style.appContainer}>
      <SafeAreaView style={style.container}>
        <Image
          style={style.logo}
          source={require('./resources/images/pokedex_logo.png')}
        />

        <View style={style.form}>
          <Text style={style.label}> Email </Text>
          <CustomTextInput
            placeholder="Email"
            imageSource={require('./resources/icons/user-fill.png')}
            value={email}
            onChangeText={setEmail}
          />
          <Text style={style.label}> Password </Text>
          <CustomTextInput
            placeholder="Password"
            imageSource={require('./resources/icons/lock-2-fill.png')}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <PrimaryButton onPress={handleLogginAction}>
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
    paddingTop: 20,
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
    display: 'flex',
    width: '80%',
    alignContent: 'space-between',
  },
});
export default Login;
