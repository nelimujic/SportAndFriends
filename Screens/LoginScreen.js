import React, { Component } from 'react';
import { View} from 'react-native';
import styles from '../Style';
import LoginComponent from '../Components/LoginComponent';


export default class LoginScreen extends Component {


    render() {
        return (

            <View style={styles.container}>
                    <LoginComponent
                        onSignUpScreen={() => this.props.navigation.navigate('SignUpScreen')}
                    />
        </View>

        );
    }
}

LoginScreen.navigationOptions = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: '#1D2733',
    },
    
})
