import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import 'firebase/firestore';
import MapComponent from '../Components/MapComponent';

const ref = firebase.database(firebaseConfig).ref();

export default class MapScreen extends Component {


	render() {
		return (

			<MapComponent
			></MapComponent>

		);
	}
}

MapScreen.navigationOptions = ({ navigation }) => ({
	title: "Map",
	headerStyle: {
		backgroundColor: '#141b23',
	},
	headerTitleStyle: { color: '#ffd5c0' },
})
