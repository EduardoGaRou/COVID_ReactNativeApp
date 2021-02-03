import React, { useState, useRef } from 'react';
import { 
    View, Image,
    Animated, 
    Text, StyleSheet, 
    TouchableHighlight, 
    Linking, ToastAndroid,
    UIManager, LayoutAnimation,
    Platform
} from 'react-native';
import FetchData from './../Tools/FetchData';
import ReadCalendarPermit from './../permissions/ReadCalendarPermit';
import CalendarStarter from './../Natives/CalendarStarter';

const HomePage = ({route,navigation}) => {
    const {username} = route.params;
    const myUrl = "https://coronastatistics.live/";
    var [data, setData] = useState(null);
    const showCovidAnim = useRef(new Animated.Value(0)).current;
    // if(data == null){
    //     ReadDataOnDB()
    //     .then((info) => {setData(info)})
    //     .catch((error) => console.log('An error ocurred with Data'));
    // }
    //console.log('This is directly from HOME'+ datac);
    const animatedSequence = () => {
        Animated.sequence([
            Animated.timing(showCovidAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            })
        ]).start()
    };
    //console.log("name: "+username);

    animatedSequence();

    CalendarStarter.callbackReact(true)
        .then(msg => console.log(msg))
        .catch(e => console.error(e));

    if(Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental)
        UIManager.setLayoutAnimationEnabledExperimental(true);

    const [changef,setChangef] = useState(false);
    const [changew,setChangew] = useState(false);
    const [changec,setChangec] = useState(false);
    const [changes,setChanges] = useState(false);

    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.headertext}>COVID-19 World Data</Text>
            </View>
            <View style={{flex: 4}}>
                <Animated.View
                    style={{
                        position: 'absolute',
                        left: 140,
                        top: 70,
                        // opacity: showCovidAnim.interpolate({
                        //     inputRange: [0,1],
                        //     outputRange: [0,1]
                        // })
                        transform: [
                        // {
                        //     translateX: showCovidAnim.interpolate({
                        //         inputRange: [0,1],
                        //         outputRange: [0,140]
                        //     })
                        // },
                        // {
                        //     translateY: showCovidAnim.interpolate({
                        //         inputRange: [0,1],
                        //         outputRange: [0,100]
                        //     })
                        // },
                        {
                            scale: showCovidAnim.interpolate({
                                inputRange: [0,1],
                                outputRange: [0,3]
                            })
                        },
                        {
                            rotate: showCovidAnim.interpolate({
                                inputRange: [0,1],
                                outputRange: ['0deg','360deg']
                            })
                        }
                        ]
                    }}>
                    <Image
                        style={styles.image}
                        source={require('../Images/covid-logo.png')}
                        resizeMode="cover" 
                    />
                </Animated.View>
            </View>
            <View style={styles.session}>
                <Text style={styles.sessiontext}>{username}'s Session</Text>
            </View>
            <View style={{flex: 1, paddingHorizontal: 70}}>
                <TouchableHighlight
                    underlayColor="#101010"
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                        setChangef(true);
                        setTimeout(() => {
                            setChangef(false);
                            data = setData(FetchData());
                        }, 1000);
                    }}>
                    <View style={styles.buttonB}>
                        <Text style={styles.buttontext}>{(changef) ? "Loading..." : "Fetch/Update"}</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
                <TouchableHighlight
                    underlayColor="#101010"
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        setChangew(true);
                        setTimeout(() => {
                            setChangew(false);
                            Linking.canOpenURL(myUrl)
                            .then(valid => {
                                if(valid)
                                    Linking.openURL(myUrl);
                                else
                                    ToastAndroid.show("Cannot open webpage",ToastAndroid.SHORT);
                            })
                            .catch(e => console.error("Linking Error"));
                        }, 1000);
                    }}>
                    <View style={[styles.buttonB,{backgroundColor: "#cccccc"}]}>
                        <Text style={styles.buttontext}>{(changew) ? "Loading..." : "Go to Webpage"}</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
                <TouchableHighlight
                    underlayColor="#101010"
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        setChangec(true);
                        setTimeout(() => {
                            setChangec(false);
                            CalendarStarter.startCalendarNativeActivity();
                        }, 1000);
                    }}>
                    <View style={[styles.buttonB,{backgroundColor: "#eeeeee"}]}>
                        <Text style={styles.buttontext}>{(changec) ? "Loading..." : "Calendar"}</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
                <TouchableHighlight
                    underlayColor="#808080"
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                        setChanges(true);
                        setTimeout(() => {
                            setChanges(false);
                            navigation.navigate("Corona Statistics")
                        }, 1000);
                    }}>
                    <View style={styles.buttonA}>
                        <Text style={[styles.buttontext,{color: "#ffffff"}]}>{(changes) ? "Loading..." : "START"}</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <ReadCalendarPermit />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#e0db8d",
        alignItems: 'stretch'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headertext: {
        fontWeight: 'bold',
        fontSize: 30,
        color: "#008080"
    },
    image: {
        //flex: 4,
        margin: 16,
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    session: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sessiontext: {
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonA: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000030",
        padding: 10
    },
    buttonB: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#aaaaaa",
        padding: 10
    },
    buttontext: {
        fontSize: 20,
        fontWeight: '500'
    }
});

export default HomePage;