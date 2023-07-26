import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';

const orders = [
  { id: 1, title: 'Order 1', status: 'active' },
  { id: 2, title: 'Order 2', status: 'pending' },
  { id: 3, title: 'Order 3', status: 'inactive' },
  { id: 4, title: 'Order 4', status: 'completed' },
  { id: 5, title: 'Order 5', status: 'completed' },
];

const App = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const closePopup = () => {
    setSelectedOrder(null);
  };

  const completedOrders = orders.filter((order) => order.status === 'completed');
  const pendingOrders = orders.filter((order) => order.status === 'pending');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Orders</Text>
      <View style={styles.scrollViewContainer}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContentContainer}>
          {orders.map((order) => (
            <TouchableOpacity
              key={order.id}
              style={[styles.orderContainer, { borderColor: getStatusColor(order.status) }]}
              onPress={() => handleOrderClick(order)}
            >
              <Text style={styles.orderTitle}>{order.title}</Text>
              <Text style={[styles.orderStatus, { color: getStatusColor(order.status) }]}>
                {order.status.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Text style={styles.completedHeading}>Order Completed</Text>
      <View style={styles.scrollViewContainer}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContentContainer}>
          {completedOrders.map((order) => (
            <TouchableOpacity
              key={order.id}
              style={[styles.orderContainer, { borderColor: getStatusColor(order.status) }]}
              onPress={() => handleOrderClick(order)}
            >
              <Text style={styles.orderTitle}>{order.title}</Text>
              <Text style={[styles.orderStatus, { color: getStatusColor(order.status) }]}>
                {order.status.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Text style={styles.pendingHeading}>Pending Orders</Text>
      <View style={styles.scrollViewContainer}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContentContainer}>
          {pendingOrders.map((order) => (
            <TouchableOpacity
              key={order.id}
              style={[styles.orderContainer, { borderColor: getStatusColor(order.status) }]}
              onPress={() => handleOrderClick(order)}
            >
              <Text style={styles.orderTitle}>{order.title}</Text>
              <Text style={[styles.orderStatus, { color: getStatusColor(order.status) }]}>
                {order.status.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Modal visible={selectedOrder !== null} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedOrder?.title}</Text>
            <Text style={[styles.modalStatus, { color: getStatusColor(selectedOrder?.status) }]}>
              {selectedOrder?.status.toUpperCase()}
            </Text>
            <Pressable style={styles.modalCloseButton} onPress={closePopup}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'active':
      return '#00FF00'; // Green color for active status
    case 'pending':
      return '#FFA500'; // Orange color for pending status
    default:
      return '#000000'; // Default color for inactive and completed status
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 16,
  },
  completedHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 16,
  },
  pendingHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 16,
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollViewContentContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 100, // Adjust the height as desired
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    height: 80, // Adjust the height as desired
    width: 200, // Adjust the width as desired
  },
  orderTitle: {
    marginRight: 8,
  },
  orderStatus: {
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalStatus: {    fontWeight: 'bold',

    marginBottom: 16,
  },
  modalCloseButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  modalCloseButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default App;
