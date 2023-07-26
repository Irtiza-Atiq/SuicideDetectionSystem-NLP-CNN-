import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

const Naran = () => {
  return (
    
    <ImageBackground
      source={require('./imgtour.png')} // Replace with your desired background image
      style={styles.background}
      resizeMode="cover"
    >
    <View style={styles.overlay}>
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.heading}>Naran Kaghan</Text>
    <View style={styles.contentContainer}>
      <Text style={styles.description}>
        Naran Kaghan is a beautiful tourist destination known for its stunning lakes, lush green meadows, and scenic views of the Himalayan mountains.
        It is located in the Mansehra District of Khyber Pakhtunkhwa province in Pakistan. The region is famous for its picturesque landscapes, including the mesmerizing Lake Saiful Muluk and Babusar Pass.
        Naran Kaghan attracts a large number of tourists every year who come to witness its natural beauty, indulge in outdoor activities like hiking and camping, and experience the local culture and hospitality.
      </Text>

      <Text style={styles.factsHeading}>Facts about Naran:</Text>
      <View style={styles.factsContainer}>
        <Text style={styles.factItem}>- Naran Kaghan is situated at an altitude of 2,409 meters above sea level.</Text>
        <Text style={styles.factItem}>- The area is famous for its abundance of wildlife, including various species of birds and mammals.</Text>
        <Text style={styles.factItem}>- Naran Kaghan is a popular destination for adventure sports such as paragliding and river rafting.</Text>
        <Text style={styles.factItem}>- The region is home to several hot springs known for their therapeutic properties.</Text>
      </View>
    </View>
  </ScrollView>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10,
    borderRadius: 8,
  },
  factsHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  factsContainer: {
    alignSelf: 'stretch',
  },
  factItem: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Naran;
