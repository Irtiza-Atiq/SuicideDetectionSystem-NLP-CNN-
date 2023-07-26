import jsonData from "./cnf_apis.postman_collection.json";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{jsonData.title}</Text>
      <Text style={styles.body}>{jsonData.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
  },
});
