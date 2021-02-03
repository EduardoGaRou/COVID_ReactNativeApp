/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './Pages/HomePage';
import TabsComponent from './Navigation/TabsComponent';
import osLog from './Tools/RequestOS';

const MainStack = createStackNavigator();

const App = (props) => {
  console.log("name: "+props.username);
  osLog();
  return(
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomePage} initialParams={{username: props.username}}/>
        <MainStack.Screen name="Corona Statistics" component={TabsComponent}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
  
}

export default App;
