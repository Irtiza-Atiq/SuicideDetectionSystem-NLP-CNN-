import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => { // Receive the navigation prop
  useEffect(() => {
    // After 2 seconds, navigate to the Welcome screen
    const timer = setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
    // source={require('./asset/background_image.jpg')}
    source={require('./imgtour.png')}
    style={styles.container}
  >
    <View style={styles.content}>
      <Text style={styles.welcomeText}>Welcome to Holiday Planner!</Text>
      <Text style={styles.themeText}>Plan your Next Trip!</Text>
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: 20,
      borderRadius: 10,
    },
    welcomeText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'lightblue',
      marginBottom: 10,
      textAlign: 'center',
    },
    themeText: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
    },
  });

export default SplashScreen;
