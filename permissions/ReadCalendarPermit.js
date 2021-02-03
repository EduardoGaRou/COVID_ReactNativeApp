import React, { Component } from 'react';
import { PermissionsAndroid, View } from 'react-native';

const requestPermit = async () => {
    try {
        const permitGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
            {
                title: "App Calendar Permission",
                message: "Calendar access is needed for React Native App",
                buttonPositive: "OK",
                buttonNeutral: "Ask Later"
            }
        );
        if (permitGranted === PermissionsAndroid.RESULTS.GRANTED)
            console.log("Calendar accessed successfully!");
        else
            console.log("Calendar access denied!")
    } catch(err) {
        console.log("Permit error found: "+err);
    }
};

class ReadCalendarPermit extends Component{
    
    async componentDidMount(){
        await requestPermit();
    }    
    
    render(){
        return(
            <View></View>
        );
    }
};

export default ReadCalendarPermit;