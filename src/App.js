import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyBodmtPwxefvIdZMEbDbLWxdKYLOJoz_Zg',
      authDomain: 'rn-manager-93888.firebaseapp.com',
      databaseURL: 'https://rn-manager-93888.firebaseio.com',
      projectId: 'rn-manager-93888',
      storageBucket: 'rn-manager-93888.appspot.com',
      messagingSenderId: '540822824466',
      appId: '1:540822824466:web:da99fe7c8e4bb96c'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
