import React, { useState,useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DetailScreen from './DetailScreen';
const OrderScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('current');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const tabs = [
    {
      id: 'current',
      title: 'Current',
      data: [
        { orderNumber: '12345', amountToPay: '$50.00', orderItems: ['Pizza', 'Burger'],location:"24F,USA,Amreka" },
        { orderNumber: '67890', amountToPay: '$25.00', orderItems: ['Salad', 'Fries'],location:"24F,USA,Amreka" }
      ],
      icon: require('./asset/cargo.png')
    },
    {
      id: 'onway',
      title: 'On the Way',
      data: [
        { orderNumber: '54321', amountToPay: '$75.00', orderItems: ['Chicken Wings', 'Soda'],location:"24F,USA,Amreka" },
        { orderNumber: '09876', amountToPay: '$40.00', orderItems: ['Sandwich', 'Ice Cream'],location:"24F,USA,Amreka" },
        { orderNumber: '09876', amountToPay: '$40.00', orderItems: ['Sandwich', 'Ice Cream'],location:"24F,USA,Amreka" },
        { orderNumber: '09876', amountToPay: '$40.00', orderItems: ['Sandwich', 'Ice Cream'],location:"24F,USA,Amreka" },
        { orderNumber: '09876', amountToPay: '$40.00', orderItems: ['Sandwich', 'Ice Cream'],location:"24F,USA,Amreka" }
      ],
      icon: require('./asset/way.png')
    },
    {
      id: 'completed',
      title: 'Completed',
      data: [
        { orderNumber: '24680', amountToPay: '$60.00', orderItems: ['Pasta', 'Cake'],location:"24F,USA,Amreka" },
        { orderNumber: '13579', amountToPay: '$15.00', orderItems: ['Coffee', 'Donut'],location:"24F,USA,Amreka" }
      ],
      icon: require('./asset/checked.png')
    }
  ];


  

  const renderTab = ({ item }) => {
    const isTabActive = activeTab === item.id;

    return (
      <TouchableOpacity
        style={[
          styles.tabButton,
          isTabActive ? styles.activeTabButton : styles.inactiveTabButton,
        ]}
        onPress={() => setActiveTab(item.id)}
      >
        <Image source={item.icon} style={styles.tabIcon} />
        <Text
          style={[
            styles.tabButtonText,
            isTabActive ? styles.activeTabText : styles.inactiveTabText,
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };


  const renderOrderItem = ({ item, index }) => (
    <View style={styles.orderItemContainer}>
      
        <View style={styles.orderNumberContainer}>
          <Text style={styles.orderNumberText}>Order {index + 1}</Text>
        </View>
  
        <View style={styles.orderAmountContainer}>
          <Text style={styles.orderItemText}>Amount to Pay:</Text>
          <Text style={styles.orderItemText}>{item.amountToPay}</Text>
        </View>
  
        {selectedOrder === item && (
          <View style={styles.orderItemsContainer}>
            <Text style={styles.orderItemsText}>Order Items:</Text>
            {item.orderItems.map((orderItem, index) => (
              <Text key={index} style={styles.orderItemText}>
                - {orderItem}
              </Text>
            ))}
          </View>
        )}
      
      {selectedOrder !== item && (
        <View style={styles.viewItemsButtonContainer}>
          <TouchableOpacity
            style={styles.viewItemsButton}
            onPress={() => navigation.navigate('Details', item)}
          >
            <Text style={styles.viewItemsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Add a border at the bottom of each orderItem container */}
      <View style={styles.orderItemBorder} />
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <FlatList
          data={tabs}
          renderItem={renderTab}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.orderTableContainer}>
        <Text style={styles.orderTableTitle}>
          {tabs.find((tab) => tab.id === activeTab)?.title}
        </Text>
        <View style={styles.orderTable}>
          <View style={styles.orderTableHeader}>
            {/* <Text style={styles.orderTableHeaderText}>Orders</Text>
            <Text style={styles.orderTableHeaderText}>Amount to Pay</Text> */}
          </View>
          <FlatList
            data={tabs.find((tab) => tab.id === activeTab)?.data}
            renderItem={renderOrderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  tabContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  activeTabButton: {
    borderBottomWidth: 4, // Increase this value to make the glow more prominent
    borderBottomColor: '#ff8800', // Use the glow color here
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: -1,
  },
  activeTabGlow: {
    borderColor: '#ff8800',
  },
  inactiveTabButton: {
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 0,
  },
  tabIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  tabButtonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  inactiveTabText: {
    color: 'black',
  },
  orderTableContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2'
  },
  orderTableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  orderTable: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10
  },
  orderTableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  orderTableHeaderText: {
    fontWeight: 'bold'
  },
  orderItem: {
    flexDirection: 'column',
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  },
  orderNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  orderNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff8800',
    marginBottom: 5
  },
  
  orderAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  orderItemText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  viewItemsButtonContainer: {
    marginTop: 10
  },
 
  
  orderItemsText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  orderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewItemsButtonContainer: {
    // Optional: You can set a width here if you want to control the button's size
  },
  viewItemsButton: {
    backgroundColor: '#ff8800',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  viewItemsButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  // Add the following style for the border
  orderItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 10, // Adjust this value if you want the border to be indented from the sides
  },
});

export default OrderScreen;
