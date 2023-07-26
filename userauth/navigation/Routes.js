import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthProvider } from './Authprovider';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import { AuthContext } from './Authprovider';


const Stack = createStackNavigator();

const RootComponent = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default RootComponent;
