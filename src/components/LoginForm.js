import React, {Component} from 'react';
import { Text } from 'react-native'
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {

    state = { 
        email: '',
        password: '',
        error: '',
        loading: false,
    }

    onLoginPress() {
        const { email, password } = this.state 

        this.setState({error: ''})
        this.setState({loading: true})

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false,
        })
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed.',
            loading: false,
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small'/>
        } else {
            return(
                <Button onPress={this.onLoginPress.bind(this)}>
                    Log In
                </Button> 
            )  
        }
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
                    { this.renderButton() }
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