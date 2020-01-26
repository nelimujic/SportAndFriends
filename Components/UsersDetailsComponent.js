import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import styles from '../Style'
import UsersDetailsContainer from '../Containers/UsersDetailsContainer';
import { Subscribe } from 'unstated';
import FriendsContainer from '../Containers/FriendsContainer';


const ref = firebase.database(firebaseConfig).ref();

class UsersDetailsComponent extends React.Component {

    constructor(props) {
        super(props)
    }




    render() {
        return (

            <Subscribe to={[FriendsContainer]}>
                {
                    users => {
                        let addButton;
                        if (!users.state.friend.some(u => u.username === this.props.seeUsername)) {
                            addButton = (
                                <TouchableOpacity style={styles.saveFriend} onPress={() => {
                                    users.addFriend(this.props.seeName, this.props.seeSurname, this.props.seeUsername, this.props.seeSport)
                                }}>
                                    <Text style={styles.buttonText}>Add user</Text>
                                </TouchableOpacity>
                            );
                        }
                        else {
                            addButton = (
                                <TouchableOpacity style={styles.deleteFriend} 
                                onPress={() => users.deleteFriend(this.props.seeUsername)}
                                //onPress={() => {
                                //    users.addFriend(this.props.seeName, this.props.seeSurname, this.props.seeUsername, this.props.seeSport)
                                //}}
                                >
                                    <Text style={styles.buttonText}>Delete user</Text>
                                </TouchableOpacity>
                            );
                        }
                        return (

                            <View style={styles.container}>

                                <View style={styles.row}>
                                    <View style={styles.usernameview}>
                                        <Text style={styles.textInput2}>Name:</Text>
                                    </View>
                                    <View style={styles.sportview2}><Text style={styles.textinputsport}>{this.props.seeName}</Text>
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <View style={styles.usernameview}>
                                        <Text style={styles.textInput2}>Surname:</Text>
                                    </View>
                                    <View style={styles.sportview2}><Text style={styles.textinputsport}>{this.props.seeSurname}</Text>
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <View style={styles.usernameview}>
                                        <Text style={styles.textInput2}>Username:</Text>
                                    </View>
                                    <View style={styles.sportview2}><Text style={styles.textinputsport}>@{this.props.seeUsername}</Text>
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <View style={styles.usernameview}>
                                        <Text style={styles.textInput2}>Favourite Sport:</Text>
                                    </View>
                                    <View style={styles.sportview2}><Text style={styles.textinputsport}>{this.props.seeSport}</Text>
                                    </View>
                                </View>

                                {addButton}

                            </View>

                        );
                    }
                }
            </Subscribe >
        );
    }
}

UsersDetailsComponent.navigationOptions = ({ navigation }) => (
    { title: 'UserDetails' })


export default UsersDetailsComponent