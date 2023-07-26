import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('./imgj.jpg');

const options = [
  'Feeling sad and hopeless',
  'I feel loss of energy',
  'I feel changes in my appetite or weight',
  'I am having difficulty concentrating',
  'Feelings of worthlessness or guilt',
  'I am having thoughts of death or suicide',
  'I am excessively sleeping',
   'I am feeling irritated and agitated',
   'I have no interest in outdoor activities',
   'I feel changes in my academic performance exponentially',
   'engaging in any self-destructive behaviors',
   'I am feeling confident and positive about myself',
   'There been recent major life events',
   'stressful situations rising frequently',
   'Noticing any physical symptoms, such as headaches, stomachaches, or body aches',
   'I often feel guilty or worthless',
   'lost pleasure in activities that I used to enjoy',
   'I am feeling socially withdrawn or isolated from others',
   'I don\'t have any people or group I can rely on'
   

];

export default function Survey() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [averagePrediction, setAveragePrediction] = useState(null);
  const [showDepressionDetected, setShowDepressionDetected] = useState(false);
  const navigation = useNavigation();

  const handlePredict = () => {
    const predictionPromises = selectedOptions.map((index) =>
      fetch('https://88c3-35-247-172-219.ngrok-free.app/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `text=${encodeURIComponent(options[index])}`,
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
        const average =
          filteredPredictions.reduce((sum, prediction) => sum + prediction, 0) / filteredPredictions.length;
        setAveragePrediction(average);
        setShowDepressionDetected(true);
      })
      .catch((error) => console.error(error));
  };

  const handleCheckboxChange = (index) => {
    const updatedSelectedOptions = [...selectedOptions];
    if (updatedSelectedOptions.includes(index)) {
      updatedSelectedOptions.splice(updatedSelectedOptions.indexOf(index), 1);
    } else {
      updatedSelectedOptions.push(index);
    }
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleShowRecommendations = () => {
    navigation.navigate('DepressionDetected', { depressionValue: averagePrediction });
  };

  
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>Select the statements that apply to you</Text>
            {options.map((option, index) => (
              <View key={index} style={styles.checkboxContainer}>
                <CheckBox
                  value={selectedOptions.includes(index)}
                  onValueChange={() => handleCheckboxChange(index)}
                  style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>{option}</Text>
              </View>
            ))}
            <Button title="Predict" onPress={handlePredict} />
            {showDepressionDetected && averagePrediction !== null && (
              <>
                <Text style={styles.predictionText}>
                  {averagePrediction >= 0.5 ? 'User is Depressed' : 'User is Not Depressed'}
                </Text>
                <Button title="View Recommendations" onPress={handleShowRecommendations} />
              </>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxLabel: {
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