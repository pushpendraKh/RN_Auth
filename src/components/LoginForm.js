import React, {Component} from 'react';
import { Text } from 'react-native'
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'

console.log('Button', Button);

class LoginForm extends Component {

    state = { 
        email: '',
        password: '',
        error: ''
    }

    onLoginPress() {
        const { email, password } = this.state 
        this.setState({error: ''})
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch( () => {
                        this.setState({
                            error: 'Authentication failed.'
                        })
                    })
            })
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='Enter email address'
                        value={this.state.email} 
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>    

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='Enter password'
                        value={this.state.password} 
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}> 
                    { this.state.error }
                </Text>    

                <CardSection>
                    <Button onPress={this.onLoginPress.bind(this)}>
                         Log In
                    </Button>
                </CardSection>
            </Card>    
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm