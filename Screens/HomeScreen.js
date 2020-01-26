import React, { Component } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from '../Style';
import { Subscribe } from 'unstated';
import CredentialsContainer from '../Containers/CredentialsContainer';
import CounterContainer from '../Containers/HomeCounterContainer';
import CounterComponent from '../Components/HomeCounterComponent';

export default class HomeScreen extends Component {
   
    render() {
       
        return (

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Subscribe to={[CredentialsContainer, CounterContainer]}>
                        {
                            (users, counter) => {

                                return (

                                    <SafeAreaView style={styles.container}>
                                        <SafeAreaView >
                                            
                                            <View style={styles.logview}>
                                            <TouchableOpacity style={styles.logoutbutton} onPress={() => users.signOutUser()}>
                                            <Text style={styles.buttonLogOut}>Logout</Text>
                                        </TouchableOpacity>
                                        </View>
                                          
                                            <Text style={styles.title2}>Hi {users.state.email}!</Text>
                                            
                                           
                                           

                                            <CounterComponent

                                                getSteps={counter.getSteps}
                                                currentSteps={counter.state.currentStepCount}
                                            >


                                            </CounterComponent>
                                        </SafeAreaView>
                                        


                                    </SafeAreaView>
                                );
                            }

                        }
                    </Subscribe>
                </ScrollView>
            </SafeAreaView>
        );
    }
}



HomeScreen.navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerStyle: {
        backgroundColor: '#141b23',
    },
    headerTitleStyle: { color: '#ffd5c0' },
})