import AsyncStorage from '@react-native-community/async-storage';

const SaveDataOnDB = (info) => {
    const infoString = JSON.stringify(info);
    AsyncStorage.setItem('DataKey',infoString)
        .then()
        .catch((err) => {
            console.error('Saving error: ' + err);
        });
};

export default SaveDataOnDB;