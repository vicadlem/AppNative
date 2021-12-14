import React from 'react';
import {AppRegistry, Text} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
