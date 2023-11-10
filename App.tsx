/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SignInScreen from './src/screens/SignInScreen';

function Tabs () {
  return(
    <Tab.Navigator>
        <Tab.Screen name="Menu" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    // <View style={backgroundStyle}>
    // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
