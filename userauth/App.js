import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const DrawerContent = () => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require('./profile.png')}
          style={{ height: 200, resizeMode: 'contain', marginVertical: 20 }}
        />
        <TouchableOpacity onPress={() => setCurrentScreen('Home')}>
          <Text style={{ fontSize: 20, marginVertical: 10 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('About')}>
          <Text style={{ fontSize: 20, marginVertical: 10 }}>About</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderScreen = () => {
    if (currentScreen === 'Home') {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24 }}>Home Screen</Text>
        </View>
      );
    } else if (currentScreen === 'About') {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24 }}>About Screen</Text>
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContent />
      {renderScreen()}
    </View>
  );
};

export default App;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { View, Text, Button } from 'react-native';

// const App = () => {
//   const [accessToken, setAccessToken] = useState(null);

//   const handleLogin = () => {
//     const postData = {
//       email: 'demp_apis@gmail.com',
//       password: '12121212',
//       rest_id: 95
//     };

//     axios({
//       method: 'post',
//       url: 'https://newapis.clicknfeed.co.uk/api/auth/login',
//       timeout: 10000,
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       data: postData
//     })
//       .then(response => {
//         const { access_token } = response.data;
//         setAccessToken(access_token);
//         console.log('User logged in successfully:', response.data);
//       })
//       .catch(error => {
//         console.log('Error logging in:', error, error?.response?.status);
//       });
//   };

//   const handleLogout = () => {
//     axios({
//       method: 'post',
//       url: 'https://newapis.clicknfeed.co.uk/api/auth/logout',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`
//       }
//     })
//       .then(response => {
//         setAccessToken(null);
//         console.log('User logged out successfully:', response.data);
//       })
//       .catch(error => {
//         console.log('Error logging out the user:', error);
//       });
//   };

//   return (
//     <View>
//       {accessToken ? (
//         <Button title="Logout" onPress={handleLogout} />
//       ) : (
//         <Button title="Login" onPress={handleLogin} />
//       )}
//     </View>
//   );
// };

// export default App;




//WORLKINGGG BELOWWWWWW

// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { View,Text } from 'react-native';
// const App = () => {
//   useEffect(() => {
//     console.log("sdas");
//     axios({
     
//       method: "get",
//       url: 'https://newapis.clicknfeed.co.uk/api/test',
      // url: 'https://jsonplaceholder.typicode.com/posts',
//       timeout:10000,
//       headers:{
//         "Accept":"application/json",
//         'Content-Type': 'application/json'
//       },
      
//     }).then(chk=>{
//       console.log(chk,"chkk");
//     }).catch(error=>{console.log(error,error?.response?.status)})

    
//   }, []);

//   return (
//     // Your app's UI components go here
//     <View><Text>Imworling</Text></View>
//   );
// };

// export default App;

//WORLKINGGG ABOOVEEE


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './HomeScreen';
// import RegistrationScreen from './RegistrationScreen';
// import SplashScreen from './SplashScreen'; // Update the import path to your actual SplashScreen component
// // Update the import path to your actual OrderStatusScreen component
// import OrderScreen from './OrderStatus';
// import WelcomeScreen from './WelcomeScreen';
// import DetailScreen from './DetailScreen';
// import NewTour from './NewTour';
// import Naran from './Naran';


// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* Splash Screen */}
//         <Stack.Screen
//           name="Splash"
//           component={SplashScreen}
//           options={{ headerShown: false }} // Hide the header for the Splash screen
//         />
//         {/* Order Status Screen */}
//         <Stack.Screen
//           name="OrderStatus"
//           component={OrderScreen}
//           options={{ headerShown: false }} // Hide the header for the OrderStatus screen
//         />
// <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
// <Stack.Screen
//           name="Details"
//           component={DetailScreen}
//           options={{ headerShown: false }} // Hide the header for the OrderStatus screen
//         />
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="Tourscreen" component={NewTour} options={{ headerShown: false }}/>
//         <Stack.Screen name="Naran" component={Naran} options={{ headerShown: false }}/>
//       </Stack.Navigator>
      
//     </NavigationContainer>
//   );
// };

// export default App;




// import React from 'react';
// import { View, Button, StyleSheet, Text } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './HomeScreen';
// import WelcomeScreen from './WelcomeScreen';
// import RegistrationScreen from './RegistrationScreen';
// import MainPage from './MainPage';
// import OrderTracking from './OrderTracking';
// import Thoughts from './Thoughts';
// import ChooseScreen from './ChooseScreen';
// import DepressionDetected from './DepressionDetected';
// import {HighDepressionRecommendations} from './HighDepressionRecommendations';
// import { ModerateDepressionRecommendations } from './ModerateDepressionRecommendations';
// import { LowDepressionRecommendations } from './LowDepressionRecommendations';
// import Survey from './Survey';


// const Stack = createNativeStackNavigator();




// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="mainpage" component={MainPage} options={{ headerShown: false }} />
//         <Stack.Screen name="ordertracking" component={OrderTracking} options={{ headerShown: false }} />
//         <Stack.Screen name="thoughts" component={Thoughts} options={{ headerShown: false }} />
//         <Stack.Screen name="option" component={ChooseScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="DepressionDetected" component={DepressionDetected} options={{ headerShown: false }} />
//         <Stack.Screen name="HighDepressionRecommendations" component={HighDepressionRecommendations} options={{ headerShown: false }} />
//         <Stack.Screen name="ModerateDepressionRecommendations" component={ModerateDepressionRecommendations} options={{ headerShown: false }} />
//         <Stack.Screen name="LowDepressionRecommendations" component={LowDepressionRecommendations} options={{ headerShown: false }} />
//         <Stack.Screen name="Survey" component={Survey} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
// });

// export default App;




















