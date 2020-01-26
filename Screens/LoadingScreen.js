import React, { Component } from 'react';
import { Text, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from '../Style';
import * as firebase from 'firebase';


export default class LoadingScreen extends Component {

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "TabNavigator": "AuthNavigator" )
        })

    }

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <SafeAreaView >
                    <Text style={styles.title}> Loading</Text>
                    <ActivityIndicator size= "large"></ActivityIndicator>

                </SafeAreaView>
            </SafeAreaView>
        );
    }
}