import React, { Component } from 'react';
import ActivitiesDetailsComponent from '../Components/ActivitiesDetailsComponent';


export default class ActivitiesDetailsScreen extends Component {


    render() {

        return (

            <ActivitiesDetailsComponent

            seeSport={this.props.navigation.getParam('sport')}
            seePlace={this.props.navigation.getParam('place')}
            seeDetails={this.props.navigation.getParam('details')}
            seeCost={this.props.navigation.getParam('cost')}
            seeNumber={this.props.navigation.getParam('number')}
            goToMap={() =>this.props.navigation.navigate('MapScreen')}

            />
        )
    }
}



ActivitiesDetailsScreen.navigationOptions = ({ navigation }) => ({
    title: "Activity Details",
    headerStyle: {
        backgroundColor: '#141b23',
    },
    headerTitleStyle: { color: '#ffd5c0' },
})
