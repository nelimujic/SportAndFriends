import React, { Component } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import styles from '../Style';
import { Subscribe } from 'unstated';
import CredentialsContainer from '../Containers/CredentialsContainer';
import { Icon, Input } from 'react-native-elements';

export default class LoginComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Subscribe to={[CredentialsContainer]}>
                        {
                            users => {

                                return (

                                    <SafeAreaView style={styles.container}>
                                        <SafeAreaView >
                                            <Text style={styles.title}>SportAndFriends</Text>
                                            <Text style={styles.title3}>Login</Text>

                                        </SafeAreaView>
                                        <SafeAreaView style={styles.centre}>
                                            <SafeAreaView style={styles.margin}>

                                                <Text style={styles.title2}>Email Address</Text>

                                                <Input style={styles.textInput}

                                                    color="#D3D3D3"
                                                    placeholder="email@address.com"
                                                    placeholderTextColor="#D3D3D3"
                                                    autoCapitalize='none'
                                                    onChangeText={email => users.setNewEmail(email)}
                                                    leftIcon={
                                                        <Icon
                                                            margin="2%"
                                                            //marginLeft= "0%"
                                                            name='ios-mail'
                                                            type='ionicon'
                                                            size={24}
                                                            color='#D3D3D3'
                                                        />
                                                    }
                                                />
                                            </SafeAreaView>
                                            <SafeAreaView style={styles.margin2}>

                                                <Text style={styles.title2}>Password</Text>

                                                <Input style={styles.textInput}
                                                    color="#D3D3D3"
                                                    secureTextEntry={true}
                                                    placeholder="Password"
                                                    placeholderTextColor="#D3D3D3"
                                                    autoCapitalize='none'
                                                    onChangeText={password => users.setNewPassword(password)}
                                                    leftIcon={
                                                        <Icon
                                                            margin="2%"
                                                            name='ios-lock'
                                                            type='ionicon'
                                                            size={24}
                                                            color='#D3D3D3'
                                                        />
                                                    }

                                                />

                                            </SafeAreaView>

                                            <SafeAreaView style={styles.errorMessage}>
                                                {users.state.errorMessageLogin && <Text style={styles.error}>{users.state.errorMessageLogin}</Text>}
                                            </SafeAreaView>

                                        </SafeAreaView>
                                        <TouchableOpacity style={styles.deleteButton}
                                            onPress={() => users.handleLogin()} >
                                            <Text style={styles.buttonText}>Login</Text>
                                        </TouchableOpacity>

                                        <View style={{ flexDirection: 'row', alignContent: 'center', alignSelf: 'center', marginTop: 35 }}>

                                            <Text style={styles.or}>New to SportAndFriends?</Text>
                                            <TouchableOpacity
                                                onPress={this.props.onSignUpScreen}>
                                                <Text style={styles.buttonSignUp}> Sign Up</Text>
                                            </TouchableOpacity>
                                        </View>
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
