import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase'; 
import LoginForm from './components/LoginForm';
import Router from "./Router"; 

class App extends React.Component{
  
  componentWillMount(){
    
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAcm5omVdP_qR2YDN4iAFWhfQWRZ0BCkFA",
    authDomain: "manager-employee-management.firebaseapp.com",
    databaseURL: "https://manager-employee-management.firebaseio.com",
    projectId: "manager-employee-management",
    storageBucket: "manager-employee-management.appspot.com",
    messagingSenderId: "522820571083"
    };
    
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }  
}

export default App;
