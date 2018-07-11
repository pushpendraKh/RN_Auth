import React, {Component} from 'react';
import { Text, View, TextInput } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyDx4p2mV_rCqAhTlhMDm5ulHePQN3PaMdg',
        authDomain: 'authentication-38add.firebaseapp.com',
        databaseURL: 'https://authentication-38add.firebaseio.com',
        projectId: 'authentication-38add',
        storageBucket: 'authentication-38add.appspot.com',
        messagingSenderId: '314287370088'
    })
  }

  render() {
    return (
      <View>
        <Header headerText = "Authentication"/>
        <LoginForm/> 
      </View>
    );
  }
}

const styles = {

}

export default App
