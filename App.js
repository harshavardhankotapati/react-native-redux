/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Todo from './src/componet';
import { createStore,compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers())
export default class App extends Component {
  render() {
    return (
      <Provider  store={store}>
        <Todo />
      </Provider>
    );
  }
}


