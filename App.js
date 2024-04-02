import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import DisasterDetailScreen from './screens/DisasterDetailScreen';
import MapScreen from './screens/MapScreen';
import EscapeRoutesScreen from './screens/EscapeRoutesScreen';
import FloorScreen from './screens/FloorScreen';
import NearbyScreen from './screens/NearbyScreen';
import Feedback from './screens/Feedback';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="DisasterDetail" component={DisasterDetailScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Nearby" component={NearbyScreen} />
        <Stack.Screen name="EscapeRoutes" component={EscapeRoutesScreen} />
        <Stack.Screen name="Floor" component={FloorScreen} />
        <Stack.Screen name="Feedback" component={Feedback} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
