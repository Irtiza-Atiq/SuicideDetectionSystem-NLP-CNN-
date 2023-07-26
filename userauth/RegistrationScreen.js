import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    
    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully!', response.user);
      navigation.navigate('Home');
      // You can navigate to the desired screen after successful registration
    } catch (error) {
      console.log('Registration failed.', error);
    }
  };

  const handleSignIn = () => {
    navigation.navigate('Welcome');
  };

  return (
    <ImageBackground
      source={require('./imgj.jpg')} // Replace with your desired background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Register Yourself!</Text>
       
        <Text style={{ color: '#fff', fontSize: 15 }}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={{ color: '#fff', fontSize: 15 }}>Password:</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { color: '#fff' }]} // Set the text color to white
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={require('./images/eye.png')} // Replace with your eye icon image
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={handleRegister} />
          <View style={styles.buttonSpace} />
          <Button title="Sign In" onPress={handleSignIn} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity and color as desired
    padding: 16,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  heading: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 12,
    paddingLeft: 8,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  iconContainer: {
    padding: 8,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonSpace: {
    width: 16,
  },
});

export default RegistrationScreen;
