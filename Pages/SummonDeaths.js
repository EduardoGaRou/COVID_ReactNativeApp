import React, { useRef } from 'react';
import { View, Image, Animated, Text, StyleSheet, TouchableHighlight } from 'react-native';

const SummonDeths = () => {
    return(
        <Text>This is a Summon</Text>
    );
};

const SummonDeaths = ({route,navigation}) => {
    const {country} = route.params;
    const {continent} = route.params;
    const {population} = route.params;
    const {deaths} = route.params;
    const showTitleAnim = useRef(new Animated.Value(0)).current;
    const showInfoAnim = useRef(new Animated.Value(0)).current;
    const showExtraAnim = useRef(new Animated.Value(0)).current;
    const animatedSequence = () => {
        Animated.sequence([
            Animated.timing(showTitleAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(showExtraAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(showInfoAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start()
    };

    animatedSequence();

    return(
        <View style={styles.page}>
            <View style={[styles.section,{justifyContent: 'flex-end'}]}>
                <Animated.View
                    style={{
                        position: 'absolute',
                        bottom: 150,
                        transform: [
                            {
                                translateY: showTitleAnim.interpolate({
                                    inputRange: [0,1],
                                    outputRange: [0,120]
                                })
                            },
                            {
                                rotate: showTitleAnim.interpolate({
                                    inputRange: [0,1],
                                    outputRange: ['0deg','360deg']
                                })
                            }
                        ]
                    }}>
                    <Text style={styles.header}>{country}</Text>
                </Animated.View>
            </View>
            <View style={styles.section}>
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 40,
                        transform: [
                            {
                                scale: showInfoAnim.interpolate({
                                    inputRange: [0,1],
                                    outputRange: [0,1]
                                })
                            }
                        ]
                    }}>
                    <Text style={styles.info}>Deaths: {deaths}</Text>
                </Animated.View>
            </View>
            <View style={styles.section}>
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 30,
                        opacity: showExtraAnim.interpolate({
                            inputRange: [0,1],
                            outputRange: [0,1]
                        })
                    }}>
                    <Text style={styles.extra}>Population: {population}</Text>
                    <Text style={styles.extra}>Continent: {continent}</Text>
                </Animated.View>
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
                <TouchableHighlight
                    underlayColor="#101010"
                    onPress={() => navigation.navigate("Deaths")}>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>Return</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#2f4f4f"
    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        color: "#00bfff",
        fontWeight: 'bold',
        fontSize: 30
    },
    info: {
        color: "#f66666",
        fontWeight: '700',
        fontSize: 24
    },
    extra: {
        color: "#f0ffff",
        fontWeight: '300',
        fontSize: 16
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#dddddd",
        padding: 10
    },
    buttontext: {
        fontSize: 24,
        fontWeight: '500'
    }
});

export default SummonDeaths;