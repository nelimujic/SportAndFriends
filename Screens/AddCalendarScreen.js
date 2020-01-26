import React, { Component } from 'react';
import AddCalendarComponent from '../Components/AddCalendarComponent';

export default class AddCalendarScreen extends Component {


    render() {

        return (

         
            <AddCalendarComponent

                goToCalendar = {() => this.props.navigation.navigate('CalendarScreen')}>

                </AddCalendarComponent>
            
        )
    }
}

AddCalendarScreen.navigationOptions = ({ navigation }) => ({
    title: "Create event",
    headerStyle: {
        backgroundColor: '#141b23',
    },
    headerTitleStyle: { color: '#ffd5c0' },
    // headerTintColor:'#fff',
})
