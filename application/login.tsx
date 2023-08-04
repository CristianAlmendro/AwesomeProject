import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Colors from './resources/colors';
import PrimaryButton from './resources/components/primaryButton';
import CustomTextInput from './resources/components/customTextField';
function Login(): JSX.Element {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlePress = () => {
    // Handle the touch event here
    console.log('Button pressed!');
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
