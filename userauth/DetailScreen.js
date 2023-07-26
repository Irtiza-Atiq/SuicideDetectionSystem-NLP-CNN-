import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { orderNumber, amountToPay, orderItems, location } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Details</Text>
      <View style={styles.orderDetailContainer}>
        <Text style={styles.label}>Order Number:</Text>
        <Text style={styles.detail}>{orderNumber}</Text>
      </View>
      <View style={styles.orderItemsContainer}>
        <Text style={styles.label}>Order Items:</Text>
        {orderItems.map((item, index) => (
          <Text key={index} style={styles.detail}>
            - {item}
          </Text>
        ))}
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.detail}>{location}</Text>
      </View>
      <View style={styles.orderTotalContainer}>
        <Text style={styles.label}>Total:</Text>
        <Text style={styles.detail}>{amountToPay}</Text>
      </View>
      <View style={styles.dottedLine} />
      <Text style={styles.thankYouText}>Thank you for your order!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderDetailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  detail: {
    fontSize: 16,
  },
  orderItemsContainer: {
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  orderTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  dottedLine: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 1,
    marginBottom: 20,
  },
  thankYouText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetailScreen;
