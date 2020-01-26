import React, { Component } from 'react';
import UsersDetailsComponent from '../Components/UsersDetailsComponent';


export default class UserDetailsScreen extends Component {


    render() {

        return (

            <UsersDetailsComponent
            seeName={this.props.navigation.getParam('name')}
            seeSurname={this.props.navigation.getParam('surname')}
            seeUsername={this.props.navigation.getParam('username')}
            seeSport={this.props.navigation.getParam('sport')}

            />
        )
    }
}



UserDetailsScreen.navigationOptions = ({ navigation }) => ({
    title: "User Details",
    headerStyle: {
        backgroundColor: '#141b23',
    },
    headerTitleStyle: { color: '#ffd5c0' },
})
