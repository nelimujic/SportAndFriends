import React, { Component } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import styles from '../Style';
import { Subscribe } from 'unstated';
import CredentialsContainer from '../Containers/CredentialsContainer';
import { Icon, Input } from 'react-native-elements';

export default class SignUpComponent extends Component {

    render() {

        return (

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Subscribe to={[CredentialsContainer]}>
                        {
                            users => {
                                return (
                                        <ScrollView >
                                            <SafeAreaView >
                                                <Text style={styles.title}>SportAndFriends</Text>
                                                <Text style={styles.title3}>Sign Up</Text>
                                            </SafeAreaView>

                                            <SafeAreaView style={styles.centre}>

                                                <SafeAreaView style={styles.margin2}>

                                                    <Text style={styles.title2}>Name</Text>
                                                    <Input style={styles.textInput}
                                                        color="#D3D3D3"
                                                        placeholder="Name"
                                                        placeholderTextColor="#D3D3D3"
                                                        onChangeText={name => users.setNewName(name)}
                                                        leftIcon={
                                                            <Icon
                                                                margin="2%"
                                                                name='ios-contact'
                                                                type='ionicon'
                                                                size={24}
                                                                color='#D3D3D3'
                                                            />
                                                        }
                                                    />
                                                </SafeAreaView>
                                                <SafeAreaView style={styles.margin2}>

                                                    <Text style={styles.title2}>Surname</Text><Input style={styles.textInput}
                                                        color="#D3D3D3"
                                                        placeholder="Surname"
                                                        placeholderTextColor="#D3D3D3"
                                                        onChangeText={surname => users.setNewSurname(surname)}
                                                        leftIcon={
                                                            <Icon
                                                                margin="2%"
                                                                name='ios-contact'
                                                                type='ionicon'
                                                                size={24}
                                                                color='#D3D3D3'
                                                            />
                                                        }
                                                    />

                                                </SafeAreaView>
                                                <SafeAreaView style={styles.margin2}>
                                                    <Text style={styles.title2}>Username</Text>
                                                    <Input style={styles.textInput}
                                                        color="#D3D3D3"
                                                        placeholder="Username"
                                                        placeholderTextColor="#D3D3D3"
                                                        autoCapitalize='none'
                                                        onChangeText={username => users.setNewUsername(username)}
                                                        leftIcon={
                                                            <Icon
                                                                margin="2%"
                                                                name='ios-person'
                                                                type='ionicon'
                                                                size={24}
                                                                color='#D3D3D3'
                                                            />
                                                        }
                                                    />
                                                </SafeAreaView>
                                                <SafeAreaView style={styles.margin2}>
                                                    <Text style={styles.title2}>Email</Text>
                                                    <Input style={styles.textInput}
                                                        color="#D3D3D3"
                                                        placeholder="Email"
                                                        placeholderTextColor="#D3D3D3"
                                                        autoCapitalize='none'
                                                        onChangeText={email => users.setNewEmail(email)}
                                                        leftIcon={
                                                            <Icon
                                                                margin="2%"
                                                                name='ios-mail'
                                                                type='ionicon'
                                                                size={24}
                                                                color='#D3D3D3'
                                                            />
                                                        }
                                                    />
                                                </SafeAreaView>

                                                <SafeAreaView style={styles.margin2}>

                                                    <Text style={styles.title2}>Favorite Sport</Text>
                                                    <Input style={styles.textInput}
                                                        color="#D3D3D3"
                                                        placeholder="Favourite Sport"
                                                        placeholderTextColor="#D3D3D3"
                                                        onChangeText={sport => users.setNewSport(sport)}
                                                        leftIcon={
                                                            <Icon
                                                                margin="2%"
                                                                name='ios-heart'
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
                                            </SafeAreaView>
                                            <SafeAreaView style={styles.errorMessage}>
                                                {users.state.errorMessageSignUp && <Text style={styles.error}>{users.state.errorMessageSignUp}</Text>}
                                            </SafeAreaView>
                                            <TouchableOpacity style={styles.deleteButton} onPress={(email, password) => users.handleSignUp({ email, password })}>
                                                <Text style={styles.buttonText}>Sign Up</Text>
                                            </TouchableOpacity>

                                            <View style={{ flexDirection: 'row', marginLeft: 140, marginTop: 50 }}>
                                            </View>
                                        </ScrollView>
                                );
                            }
                        }
                    </Subscribe>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


