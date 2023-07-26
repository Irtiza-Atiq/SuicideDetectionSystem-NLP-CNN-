import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const backgroundImage = require('./imgj.jpg');

export default function Thoughts() {
  const [inputTexts, setInputTexts] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [averagePrediction, setAveragePrediction] = useState(null);
  const [showDepressionDetected, setShowDepressionDetected] = useState(false);
  const navigation = useNavigation();
  const handlePredict = () => {
    const predictionPromises = inputTexts.map((inputText) =>
      fetch('https://88c3-35-247-172-219.ngrok-free.app/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `text=${encodeURIComponent(inputText)}`,
      })
        .then((response) => response.json())
        .then((data) => data.depression_probability)
        .catch((error) => {
          console.error(error);
          return null;
        })
    );

    Promise.all(predictionPromises)
      .then((predictions) => {
        const filteredPredictions = predictions.filter((prediction) => prediction !== null);
        setPredictions(filteredPredictions);
        const average = filteredPredictions.reduce((sum, prediction) => sum + prediction, 0) / filteredPredictions.length;
        setAveragePrediction(average);
        setShowDepressionDetected(true);
      })
      .catch((error) => console.error(error));
  };

  const handleInputChange = (index, value) => {
    const updatedInputTexts = [...inputTexts];
    updatedInputTexts[index] = value;
    setInputTexts(updatedInputTexts);
  };

 

  const handleShowRecommendations = () => {
    // Navigating to the DepressionDetected screen and passing the averagePrediction as a parameter
    // You'll need to implement the DepressionDetected component separately
    navigation.navigate('DepressionDetected', { depressionValue: averagePrediction });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Text style={styles.heading}>Enter your thoughts freely</Text>
        {inputTexts.map((inputText, index) => (
          <TextInput
            key={index}
            style={styles.textInput}
            value={inputText}
            onChangeText={(value) => handleInputChange(index, value)}
          />
        ))}
        <Button title="Add Input" onPress={() => setInputTexts([...inputTexts, ''])} />
        <Button title="Predict" onPress={handlePredict} />
        {showDepressionDetected && averagePrediction !== null && (
          <>
            <Text style={styles.predictionText}>
              {averagePrediction >= 0.5 ? 'User is Depressed' : 'User is Not Depressed'}
            </Text>
            <Button title="View Recommendations" onPress={handleShowRecommendations} />
          </>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  predictionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
