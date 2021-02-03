import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CasesStack from './CasesStack';
import RecoveredStack from './RecoveredStack';
import DeathsStack from './DeathsStack';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAws from 'react-native-vector-icons/FontAwesome5';

const MainTabs = createBottomTabNavigator();

function TabsComponent({route}){
    //const {data} = route.params;
    return(
        <MainTabs.Navigator tabBarOptions={{activeTintColor: "#0000cd"}}>
            <MainTabs.Screen name="CasesSt" component={CasesStack} /*initialParams={{data: data}}*/
                options={{
                    tabBarLabel: "Cases",
                    tabBarIcon: ({color,size}) => (<MCIcons name="virus" color={color} size={size}/>)
                }}/>
            <MainTabs.Screen name="RecoveredSt" component={RecoveredStack} /*initialParams={{data: data}}*/
                options={{
                    tabBarLabel: "Recovered",
                    tabBarIcon: ({color,size}) => (<FontAws name="briefcase-medical" color={color} size={size}/>)
                }}/>
            <MainTabs.Screen name="DeathsSt" component={DeathsStack} /*initialParams={{data: data}}*/
                options={{
                    tabBarLabel: "Deaths",
                    tabBarIcon: ({color,size}) => (<FontAws name="skull" color={color} size={size}/>)
                }}/>
        </MainTabs.Navigator>
    );
}

export default TabsComponent;