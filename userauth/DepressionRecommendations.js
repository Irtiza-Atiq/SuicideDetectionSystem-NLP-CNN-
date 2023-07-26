import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DepressionRecommendations({ depressionValue }) {
  // Define recommendations based on depression severity
  let recommendations = '';
  if (depressionValue >= 0.8) {
    recommendations = 'Recommendations for severe depression.';
  } else if (depressionValue >= 0.6) {
    recommendations = 'Recommendations for moderate depression.';
  } else if (depressionValue >= 0.4) {
    recommendations = 'Recommendations for mild depression.';
  } else {
    recommendations = 'Recommendations for low depression.';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Depression Recommendations</Text>
      <Text style={styles.recommendations}>{recommendations}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  recommendations: {
    fontSize: 18,
  },
});
