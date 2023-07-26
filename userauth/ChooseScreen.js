import React from 'react';
import { View, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChooseScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToThoughts = () => {
    navigation.navigate('thoughts');
  };

  const handleNavigateToMainPage = () => {
    navigation.navigate('Survey');
  };

  return (
    <ImageBackground
      source={require('./imgj.jpg')} // Replace with your desired background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.heading}>Select your option:</Text>
        <View style={styles.buttonContainer}>
          <Button title="Enter your thoughts" onPress={handleNavigateToThoughts} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Take survey" onPress={handleNavigateToMainPage} />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});

export default ChooseScreen;
