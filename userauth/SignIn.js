import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log('User signed in successfully!', response.user);
      // Navigate to Home screen if sign in is successful
      navigation.replace('Home');
    } catch (error) {
      console.log('Sign in failed.', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default SignInScreen;
