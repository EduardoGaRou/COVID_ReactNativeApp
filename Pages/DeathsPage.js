import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, TouchableHighlight, Button } from 'react-native';
import ReadDataOnDB from '../Tools/ReadDataOnDB';

const DeathsPae = () => {
    return(
        // <Button title="GET" onPress={getDataFromApi}/>
        <Text>Deaths Page</Text>
    );
};

const DeathsPage = ({route, navigation}) => {
    const [info, setInfo] = useState({covid: [{title: 'A', data: []}]});
    if(info.covid.length == 1){
        setTimeout(() => {
            ReadDataOnDB()
            .then((myInfo) => {setInfo(myInfo);})
            .catch((e) => console.log('Error from reading DB'))
        }, 3000);
    }
    return(
        <View style={styles.page}>
            <SectionList
                sections={info.covid}
                keyExtractor={(item,index) => index}
                renderItem={({item}) =>
                    <Item item={item} navigation={navigation}/>
                }
                renderSectionHeader={({section}) =>
                    <Text style={styles.header}>  {section.title}</Text>
                }
            />
        </View>
    );
};

const Item = ({item, navigation}) => {
    return(
        <TouchableHighlight
        underlayColor="#7f9f9f"
        onPress={() => navigation.push("SummonD",{country: item.country, continent: item.continent,
                                                      population: item.population, deaths: item.deaths})}>
            <Text style={styles.item}>{item.country}</Text>
        </TouchableHighlight>
    );
};


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#2f4f4f"
    },
    header: {
        //paddingLeft: 20,
        backgroundColor: "#dcdcdc",
        color: "#2f4f4f",
        fontWeight: 'bold',
        fontSize: 24
    },
    item: {
        paddingLeft: 10,
        paddingVertical: 10,
        backgroundColor: "#2f4f4f",
        fontWeight: '500',
        fontSize: 20,
        color: "#fefefe"
    }
});

export default DeathsPage;