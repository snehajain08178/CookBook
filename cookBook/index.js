/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/Reducer/Store';
import React from 'react';
import {Provider} from 'react-redux'

const redux = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };

AppRegistry.registerComponent(appName, () => redux);