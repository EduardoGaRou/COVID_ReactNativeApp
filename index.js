/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BackgroundTask from './Natives/BackgroundTask';

const myHeadlessTask = async () => {
    console.log("Background updates for calendar have started...");
    setTimeout(() => {
      console.log("Updates are finished!!");  
    }, 2500);
};

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('BackgroundTask',() => myHeadlessTask);
