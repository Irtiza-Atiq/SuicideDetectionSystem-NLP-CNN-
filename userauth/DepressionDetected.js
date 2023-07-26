import React from 'react';
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';

export default function DepressionDetected({ navigation, route }) {
  const { depressionValue } = route.params;

  const handleYes = () => {
    // Handle the case when the user wants recommendations
    if (depressionValue >= 0.8) {
      // High depression, provide specific recommendations
      navigation.navigate('HighDepressionRecommendations');
    } else if (depressionValue >= 0.5) {
      // Moderate depression, provide moderate recommendations
      navigation.navigate('ModerateDepressionRecommendations');
    } else {
      // Low depression, provide general recommendations
      navigation.navigate('LowDepressionRecommendations');
    }
  };

  const handleNo = () => {
    navigation.navigate('option');
    // Handle the case when the user doesn't want recommendations
    // You can implement the logic here to navigate to a different screen or perform any other action
  };

  const formattedDepressionValue = (depressionValue * 100).toFixed(2); // Format the depression value to two decimal points

  return (
    <ImageBackground
      source={require('./imgj.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Depression Detected</Text>
        <Text style={styles.depressionValue}>You are {formattedDepressionValue}% depressed.</Text>
        <Text style={styles.question}>Do you want recommendations?</Text>
        <View style={styles.buttonContainer}>
          <Button title="Yes" onPress={handleYes} color="black" />
          <Button title="No" onPress={handleNo} color="black" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background color for better readability
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  depressionValue: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 20,
  },
  question: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },
  recommendation: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
