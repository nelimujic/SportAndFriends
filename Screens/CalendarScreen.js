import React, { Component } from 'react';
import { TouchableOpacity, View,} from 'react-native';
import styles from '../Style';
import { Subscribe}   from 'unstated';
import CalendarContainer from '../Containers/CalendarContainer';
import CalendarComponent from '../Components/CalendarComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CalendarScreen extends Component {
  render() {
    return (

      <Subscribe to={[CalendarContainer]}>
        {event => (
          <CalendarComponent
            getList={event.getList}
            event={event.state.event}
          />
        )
        }
      </Subscribe>
    );
  }
}

CalendarScreen.navigationOptions = ({ navigation }) => ({
  title: "Calendar",
  headerStyle: {
    backgroundColor: '#141b23',
  },
  headerTitleStyle: { color: '#ffd5c0' },
  headerRight: <TouchableOpacity onPress={() => { navigation.navigate('AddCalendarScreen') }} >
    <View style={styles.iconButton}>
      <Ionicons name="ios-add" size={26} color="#ffd5c0" />
    </View>
  </TouchableOpacity>
})