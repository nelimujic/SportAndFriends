import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Text, SafeAreaView, TouchableOpacity, View, TextInput, TouchableHighlight } from 'react-native';
import styles from '../Style';
import PositionContainer from '../Containers/PositionContainer';
import ActivitiesContainer from '../Containers/ActivitiesContainer';
import { Subscribe } from 'unstated';
import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import 'firebase/firestore';
import { Marker } from 'react-native-maps';

const ref = firebase.database(firebaseConfig).ref();

export default class MapScreen extends Component {

	//async componentDidMount() {
	//	await this.props.getList();
	//};

	render() {
		return (

			<Subscribe to={[ActivitiesContainer, PositionContainer]}>
				{
					(activities, position) => {
						const markers = activities.state.activity.map((activity) =>
							<Marker
								coordinate={{ latitude: activity.lat, longitude: activity.lon }}
								key={activity.name}>
								<MapView.Callout
								>
								

										<TouchableHighlight 
										//onPress={() => this.markerClick()} 
										//underlayColor='#222'
										>
											<View style={styles.calloutText}>
					<Text>{activity.lan}Click to see</Text>
											</View>
										</TouchableHighlight>

								</MapView.Callout>
							</Marker>);

						return (
							<MapView
								style={{ flex: 1 }}
								provider={PROVIDER_GOOGLE}
								showsUserLocation
								initialRegion={{
									latitude: position.state.latitude,
									longitude: position.state.longitude,
									latitudeDelta: 1,
									longitudeDelta: 1,
								}}>
								{
									markers
								}
							</MapView>
						);
					}
				}
			</Subscribe >
		);
	}
}
