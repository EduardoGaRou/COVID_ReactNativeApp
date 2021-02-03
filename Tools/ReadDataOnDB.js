import AsyncStorage from '@react-native-community/async-storage';
import FetchData from './FetchData';

const ReadDataOnDB = () => {
    console.log('Read info from db');
    return AsyncStorage.getItem('DataKey')
        .then((info) => {
            if(info != null) {
                //console.log('info != null');
                //console.log(JSON.parse(info));
                console.log("Retrieved existing data");
                return JSON.parse(info);
            }
            else {
                //console.log('info == null');
                //console.log(FetchData());
                console.log("Retrieved new data");
                return FetchData();
            }
        })
        .catch((error) => {
            console.error('Error while reading: '+ error);
        });
};

export default ReadDataOnDB;