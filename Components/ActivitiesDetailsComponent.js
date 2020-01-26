
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import styles from '../Style'
import { Subscribe } from 'unstated';
import PositionContainer from '../Containers/PositionContainer';

const ref = firebase.database(firebaseConfig).ref();

class ActivitiesDetailsComponent extends React.Component {

    constructor(props) {
        super(props)
    }


    addFriend = async () => {
        const userId = firebase.auth().currentUser.uid;
        const friendsRef = ref.child(`/users/friends/${userId}`);
        let friendsL = await friendsRef.push({
            name: this.props.seeName,
            surname: this.props.seeSurname,
            username: this.props.seeUsername,
            sport: this.props.seeSport,
        });
        return friendsL;
    }



    render() {
        return (

            <Subscribe to={[PositionContainer]}>
                {
                    (position) => {
                        position.geoLocate();
                        return (


                            <View style={styles.container}>

                                <View style={styles.row}>
                                    <View style={styles.placeview}>
                                        <Text style={styles.textInput2}>Sport:</Text>
                                    </View>
                                    <View style={styles.sportview3}><Text style={styles.textinputsport}>{this.props.seeSport}</Text>
                                    </View>
                                </View>


                                <View style={styles.row}>
                                    <View style={styles.placeview}>
                                        <Text style={styles.textInput2}>City:</Text>
                                    </View>
                                    <View style={styles.sportview3}><Text style={styles.textinputsport}>{this.props.seePlace}</Text>
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <View style={styles.placeview}>
                                        <Text style={styles.textInput2}>Details:</Text>
                                    </View>
                                    <View style={styles.sportview3}><Text style={styles.textinputsport}>{this.props.seeDetails}</Text>
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <View style={styles.placeview}>
                                        <Text style={styles.textInput2}>Cost:</Text>
                                    </View>
                                    <View style={styles.sportview3}><Text style={styles.textinputsport}>{this.props.seeCost}</Text>
                                    </View>
                                </View>


                                <View style={styles.row}>
                                    <View style={styles.placeview}>
                                        <Text style={styles.textInput2}>Number:</Text>
                                    </View>
                                    <View style={styles.sportview3}><Text style={styles.textinputsport}>{this.props.seeNumber}</Text>
                                    </View>
                                </View>



                                <TouchableOpacity style={styles.deleteButton} onPress={() => this.props.goToMap()}
                                >
                                    <Text style={styles.buttonText}>See activity on map</Text>
                                </TouchableOpacity>

                            </View>

                        );
                    }
                }
            </Subscribe >
        );
    }
}

ActivitiesDetailsComponent.navigationOptions = ({ navigation }) => (
    { title: 'Activity Details' })


export default ActivitiesDetailsComponent