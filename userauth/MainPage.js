import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const MainPage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: 'I am feeling lonely', checked: false },
    { id: 2, text: 'I want to kill myself', checked: false },
    { id: 3, text: 'I have lost interest in activities I used to enjoy', checked: false },
    { id: 4, text: 'I have trouble sleeping or sleeping too much', checked: false },
    { id: 5, text: 'I feel tired or lack energy most of the time', checked: false },
    { id: 6, text: 'I feel worthless or guilty', checked: false },
    { id: 7, text: 'I have difficulty concentrating or making decisions', checked: false },
    { id: 8, text: 'I have significant changes in appetite or weight', checked: false },
    { id: 9, text: 'I experience physical symptoms with no clear cause (e.g., headaches, stomachaches)', checked: false },
    { id: 10, text: 'I have recurring thoughts of death or suicide', checked: false },
    { id: 11, text: 'I feel irritable or agitated', checked: false },
    { id: 12, text: 'I have difficulty experiencing pleasure or joy', checked: false },
    // Add more questions here
  ]);

  const handleCheckboxToggle = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, checked: !question.checked } : question
      )
    );
  };

  const handleDetection = () => {
    // Perform depression detection logic here based on the checked questions
    // You can display the result or perform any other action as needed
    console.log(questions.filter((question) => question.checked));
  };

  return (
    <ImageBackground
      source={require('./imgj.jpg')}
      style={styles.container}
    >
      <Text style={styles.title}>Questionnaire Form</Text>
      <View style={styles.questionContainer}>
        {questions.map((question) => (
          <View key={question.id} style={styles.checkboxContainer}>
            <CheckBox
              value={question.checked}
              onValueChange={() => handleCheckboxToggle(question.id)}
            />
            <Text style={styles.checkboxText}>{question.text}</Text>
          </View>
        ))}
      </View>
      <Button title="Detect" onPress={handleDetection} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white', // Example color for the title text
  },
  questionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black background with opacity of 0.4
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 16,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 8,
    color: 'white', // Example color for the checkbox text
  },
});

export default MainPage;
