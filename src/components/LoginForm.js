import React, {Component} from 'react';
import { Text, View, } from 'react-native';
import { Button, Card, CardSection, Input } from './common'

console.log('Button', Button);

class LoginForm extends Component {

    state = { 
        email: '',
        password: '',
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

                <CardSection>
                    <Button>
                         Log In
                    </Button>
                </CardSection>
            </Card>    
        )
    }
}

export default LoginForm