import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const WelcomeScreen = React.forwardRef((props, ref) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    try {
      console.log('Sign-in successful');
      
      navigation.navigate('option')
      // navigation.navigate('Tourscreen');
    } catch (error) {
      console.log('Sign-in error:', error);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
    console.log('Register button pressed');
  };

  const handleForgotPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      console.log('Password reset email sent!');
      Toast.show({
        type: 'success',
        text1: 'Email Sent',
        text2: 'Password reset email sent!',
      });
    } catch (error) {
      console.log('Failed to send password reset email.', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to send password reset email',
      });
    }
  };

  return (
    <ImageBackground
      source={require('./imgj.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={{ color: '#fff', fontSize: 15 }}>Email:</Text>
        <TextInput
          style={[styles.input, { color: '#fff' }]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={{ color: '#fff', fontSize: 15 }}>Password:</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { color: '#fff' }]}
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
              source={require('./images/eye.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Sign In" onPress={handleSignIn} style={styles.button} />
          <Button title="Register" onPress={handleRegister} style={styles.button} />
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={{ color: '#fff', fontSize: 15, textAlign: 'center', marginTop: 10 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <Toast ref={ref} />
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 12,
    paddingLeft: 8,
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
  button: {
    flex: 1,
    paddingVertical: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 12,
  },
});

export default WelcomeScreen;
