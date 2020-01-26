import React, { Component } from 'react';
import styles from '../Style';
import { SafeAreaView, View, Dimensions } from 'react-native';
import EventCalendar from 'react-native-events-calendar';

let { width } = Dimensions.get('window');

export default class CalendarComponent extends Component {

  constructor(props) {

    super(props);
    this.state = {

      dataSource: [],
    }
  }

  async componentDidMount() {
    const dataList = await this.props.getList();
    await this.setState({ dataSource: dataList });
  };


  eventClicked(event) {
    //On Click event showing alert
    alert('You will practise: ' + event.title + '\n Details: ' + event.summary);
  }


  render() {


    return (

      <SafeAreaView style={styles.container}>
        <View style={styles.container}>

          <EventCalendar style={styles.container}
            eventTapped={this.eventClicked.bind(this)}
            events={this.props.event}
            width={width}
            size={60}
            initDate={new Date()}
            scrollToFirst
          />
        </View>

      </SafeAreaView>
    );
  }
}