import React, { Component } from 'react';
import { Provider } from 'unstated';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import MapScreen from './Screens/MapScreen';
import FriendsScreen from './Screens/FriendsScreen';
import ActivitiesScreen from './Screens/ActivitiesScreen';
import CalendarScreen from './Screens/CalendarScreen';
import SignUpScreen from './Screens/SignUpScreen';
import LoadingScreen from './Screens/LoadingScreen';
import UserDetailsScreen from './Screens/UserDetailsScreen';
import UsersScreen from './Screens/UsersScreen';
import AddCalendarScreen from './Screens/AddCalendarScreen';
import ActivitiesDetailsScreen from './Screens/ActivitiesDetailsScreen';


const stackRoutes = {
  HomeScreen: HomeScreen,
  FriendsScreen: FriendsScreen,
  ActivitiesScreen: ActivitiesScreen,
  CalendarScreen: CalendarScreen,
  MapScreen: MapScreen,
}

const stackOptions = {
  initialRouteName: 'HomeScreen'
}

const friendsScreen = {
  FriendsScreen: FriendsScreen,
  UserDetailsScreen: UserDetailsScreen,
  UsersScreen: UsersScreen,
}

const activitiesScreen = {
  ActivitiesScreen: ActivitiesScreen,
  ActivitiesDetailsScreen: ActivitiesDetailsScreen,
  MapScreen: MapScreen,
}

const calendarScreen = {
  CalendarScreen: CalendarScreen,
  AddCalendarScreen: AddCalendarScreen,
}

const mapScreen = {
  MapScreen: MapScreen,
}

const authScreen = {
  LoginScreen: LoginScreen,
  SignUpScreen: SignUpScreen,

}

const StackNavigator = createStackNavigator(stackRoutes, stackOptions)
const FriendsNavigator = createStackNavigator(friendsScreen)
const ActivitiesNavigator = createStackNavigator(activitiesScreen)
const CalendarNavigator = createStackNavigator(calendarScreen)
const MapNavigator = createStackNavigator(mapScreen)
const AuthNavigator = createStackNavigator(authScreen)


const getIcon = (name, focused, tintColor) => {
  const color = focused ? tintColor : 'white'
  return <Ionicons name={name} size={25} color={color} />
}

const tabRoutes = {
  'Home': StackNavigator,
  'Friends': FriendsNavigator,
  'Activities': ActivitiesNavigator,
  'Calendar': CalendarNavigator,
  'Map': MapNavigator,
}
StackNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => getIcon("ios-home", focused, tintColor),
  tabBarOptions: {
    activeTintColor: '#ffd5c0',
    inactiveTintColor: 'white',
    style: {
      backgroundColor: '#141b23',
    },
  }
}

FriendsNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => getIcon("ios-contacts", focused, tintColor),
  tabBarOptions: {
    activeTintColor: '#ffd5c0',
    inactiveTintColor: 'white',
    style: {
      backgroundColor: '#141b23',
    },
  }
}

ActivitiesNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => getIcon("ios-basketball", focused, tintColor),
  tabBarOptions: {
    activeTintColor: '#ffd5c0',
    inactiveTintColor: 'white',
    style: {
      backgroundColor: '#141b23',
    },
  }
}

CalendarNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => getIcon("ios-calendar", focused, tintColor),
  tabBarOptions: {
    activeTintColor: '#ffd5c0',
    inactiveTintColor: 'white',
    style: {
      backgroundColor: '#141b23',
    },
  }
}

MapNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => getIcon("ios-map", focused, tintColor),
  tabBarOptions: {
    activeTintColor: '#ffd5c0',
    inactiveTintColor: 'white',
    style: {
      backgroundColor: '#141b23',
    },
  }
}

const TabNavigator = createBottomTabNavigator(tabRoutes)

const switchRoutes = {
  Main: LoadingScreen,
  AuthNavigator: AuthNavigator,
  TabNavigator: TabNavigator,
  
}
const switchOptions = {
  initialRouteName: 'Main',
  //SignUpNavigator: SignUpNavigator,
}
const AppNavigator = createSwitchNavigator(switchRoutes, switchOptions)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    );
  }
}
