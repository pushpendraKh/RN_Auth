import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    isLoggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyDx4p2mV_rCqAhTlhMDm5ulHePQN3PaMdg',
        authDomain: 'authentication-38add.firebaseapp.com',
        databaseURL: 'https://authentication-38add.firebaseio.com',
        projectId: 'authentication-38add',
        storageBucket: 'authentication-38add.appspot.com',
        messagingSenderId: '314287370088'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true})
      } else {
        this.setState({ isLoggedIn: false})
      }
    })
  }

  renderContent() {
    
    switch (this.state.isLoggedIn) {
      case true:
        return(
          <Card>
            <CardSection>
               <Button onPress = { () => firebase.auth().signOut() }>
                 Log Out 
               </Button>  
            </CardSection>  
           </Card>  
        )
      case false:
        return <LoginForm/>
      default:
        return <Spinner/>
    }
  }

  render() {
    return (
      <View>
          <Header headerText = "Authentication"/>
          { this.renderContent() }
      </View>
    );
  }
}

const styles = {

}

export default App
