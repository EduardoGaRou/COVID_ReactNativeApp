import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import RecoveredPage from './../Pages/RecoveredPage';
import SummonRecovered from './../Pages/SummonRecovered';

const RStack = createStackNavigator();

function RecoveredStack({route}) {
    //const {data} = route.params;
    return(
        <RStack.Navigator>
            <RStack.Screen name="Recovered" component={RecoveredPage} /*initialParams={{data: data}}*/ />
            <RStack.Screen name="SummonR" component={SummonRecovered}/>
        </RStack.Navigator>
    );
};

export default RecoveredStack;