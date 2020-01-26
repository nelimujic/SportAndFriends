import React, { Component } from 'react';
import SignUpComponent from '../Components/SignUpComponent';

export default class SignUpScreen extends Component {


    render() {

        return (

            <SignUpComponent></SignUpComponent>
        )
    }
}

SignUpScreen.navigationOptions = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: '#1D2733',
    },
    // headerTintColor:'#fff',
})