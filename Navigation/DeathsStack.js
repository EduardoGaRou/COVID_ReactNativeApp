import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DeathsPage from './../Pages/DeathsPage';
import SummonDeaths from './../Pages/SummonDeaths';

const DStack = createStackNavigator();

function DeathsStack({route}) {
    //const {data} = route.params;
    return(
        <DStack.Navigator>
            <DStack.Screen name="Deaths" component={DeathsPage} /*initialParams={{data: data}}*/ />
            <DStack.Screen name="SummonD" component={SummonDeaths}/>
        </DStack.Navigator>
    );
};

export default DeathsStack;