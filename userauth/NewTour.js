import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const NewTour = () => {
    const navigation = useNavigation();
  const handlePackageSelection = (packageName) => {
    // Handle package selection here
    if(packageName==='Naran Kaghan')
    {
        navigation.navigate('Naran');
    }
    console.log('Selected package:', packageName);
  };

  const packages = [
    {
      name: 'Naran Kaghan',
      image: require('./naran.jpg'),
    },
    {
      name: 'Swat Valley',
      image: require('./swat.jpg'),
    },
    {
      name: 'Neelum Valley',
      image: require('./neelum.jpg'),
    },
    {
      name: 'Skardu',
      image: require('./skrdu.jpg'),
    },
    {
      name: 'Chitral Valley',
      image: require('./chitral.jpg'),
    },
  ];

  return (
    <ImageBackground
      source={require('./imgtour.png')} // Replace with your desired background image
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Available Packages</Text>
        <View style={styles.packageContainer}>
          {packages.map((packageItem) => (
            <TouchableOpacity
              key={packageItem.name}
              style={styles.packageItem}
              onPress={() => handlePackageSelection(packageItem.name)}
            >
              <Image source={packageItem.image} style={styles.packageImage} />
              <Text style={styles.packageName}>{packageItem.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.footer}
          onPress={() => console.log('Clicked to get lucky')}
          activeOpacity={0.8}
        >
          <Text style={styles.footerText}>Click to Get Lucky</Text>
        </TouchableOpacity>
      </ScrollView>
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
  packageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  packageItem: {
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  packageImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  packageName: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default NewTour;
