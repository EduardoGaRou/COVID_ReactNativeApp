import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CasesPage from './../Pages/CasesPage';
import SummonCases from './../Pages/SummonCases';

const CStack = createStackNavigator();

function CasesStack({route}) {
    //const {data} = route.params;
    return(
        <CStack.Navigator>
            <CStack.Screen name="Cases" component={CasesPage} /*initialParams={{data: data}}*/ />
            <CStack.Screen name="SummonC" component={SummonCases}/>
        </CStack.Navigator>
    );
};

export default CasesStack;