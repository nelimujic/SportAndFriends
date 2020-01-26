import React, { Component, useState } from 'react';
import { Text, TouchableOpacity, ScrollView,} from 'react-native';
import styles from '../Style';
import { Subscribe } from 'unstated';
import CalendarContainer from '../Containers/CalendarContainer';
import { Input } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { Icon } from 'react-native-elements';


const colorScheme = Appearance.getColorScheme();
const isDarkModeEnabled = colorScheme === 'dark';


export default class AddCalendarComponent extends Component {

  
    state = {

        startDate: new Date(),
        endDate: new Date(),
        mode: "datetime"

    };

    render() {



        return (

            <SafeAreaView style={styles.container}>

                <ScrollView>
                    <Subscribe to={[CalendarContainer]}>
                        {
                            users => {

                                const { show, startDate, endDate, mode } = users.state;
                                return (


                                    <SafeAreaView style={styles.container}>
                                        <SafeAreaView style={styles.margin2}>
                                            <Text style={styles.title2}>Start</Text>
                                            <SafeAreaView style={styles.marginCalendar2}>


                                            <DatePicker

                                                value={startDate}
                                                style={{ width: 300 }}
                                                date={users.state.start}
                                                mode="datetime"
                                                placeholder="select date"
                                                format="YYYY-MM-DD HH:mm"
                                                minDate="2020-01-01"
                                                maxDate="2022-06-01"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"

                                                customStyles={{
                                                    dateIcon: {
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: 4,
                                                        marginLeft: 0
                                                    },
                                                    dateInput: {
                                                        marginLeft: 40,
                                                        borderRadius: 10,
                                                    },
                                                    datePicker: { backgroundColor: colorScheme === 'dark' ? '#222' : 'white' },
                                                    datePickerCon: { backgroundColor: colorScheme === 'dark' ? '#333' : 'white' },
                                                    dateText: {
                                                        fontSize: 18,
                                                        color: "white",
                                                        fontWeight: 'bold',
                                                    }

                                                }}


                                              
                                                onDateChange={endDate => users.setNewStart(endDate)}
                                            />


</SafeAreaView>





                                        </SafeAreaView>
                                        <SafeAreaView style={styles.margin2}>
                                            <Text style={styles.title2}>End</Text>

                                            <SafeAreaView style={styles.marginCalendar2}>


                                                <DatePicker

                                                    value={endDate}
                                                    style={{ width: 300 }}
                                                    date={users.state.end}
                                                    mode="datetime"
                                                    placeholder="select date"
                                                    format="YYYY-MM-DD HH:mm"
                                                    minDate="2020-01-01"
                                                    maxDate="2022-06-01"
                                                    confirmBtnText="Confirm"
                                                    cancelBtnText="Cancel"

                                                    customStyles={{
                                                        dateIcon: {
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: 4,
                                                            marginLeft: 0
                                                        },
                                                        dateInput: {
                                                            marginLeft: 40,
                                                            borderRadius: 10,
                                                        },
                                                        datePicker: { backgroundColor: colorScheme === 'dark' ? '#222' : 'white' },
                                                        datePickerCon: { backgroundColor: colorScheme === 'dark' ? '#333' : 'white' },
                                                        dateText: {
                                                            fontSize: 18,
                                                            color: "white",
                                                            fontWeight: 'bold',
                                                        }

                                                    }}


                                                   
                                                    onDateChange={endDate => users.setNewEnd(endDate)}
                                                />


                                            </SafeAreaView>

                                        </SafeAreaView>

                                        <SafeAreaView style={styles.margin2}>

                                            <Text style={styles.title2}>Title</Text>
                                            <Input style={styles.textInput}

                                                color="#D3D3D3"
                                                placeholder='Title of the event'
                                                placeholderTextColor="#D3D3D3"
                                                onChangeText={title => users.setNewTitle(title)}
                                                leftIcon={
                                                    <Icon
                                                        margin="2%"
                                                        name='ios-arrow-forward'
                                                        type='ionicon'
                                                        size={24}
                                                        color='#D3D3D3'
                                                    />
                                                }
                                            />


                                        </SafeAreaView>
                                        <SafeAreaView style={styles.margin2}>

                                            <Text style={styles.title2}>Details</Text>
                                            <Input style={styles.textInput}

                                                color="#D3D3D3"
                                                placeholder='Details of the event'
                                                placeholderTextColor="#D3D3D3"
                                                onChangeText={summary => users.setNewSummary(summary)}
                                                leftIcon={
                                                    <Icon
                                                        margin="2%"
                                                        name='ios-arrow-forward'
                                                        type='ionicon'
                                                        size={24}
                                                        color='#D3D3D3'
                                                    />
                                                }
                                            />
                                        </SafeAreaView>

                                        <SafeAreaView style={styles.errorMessage}>
                                            {users.state.errorMessageCalendar && <Text style={styles.error}>{users.state.errorMessageCalendar}</Text>}
                                        </SafeAreaView>

                                        <TouchableOpacity style={styles.deleteButton} onPress={() => {

                                            if (users.state.title == "" || users.state.summar == "") {

                                                users.setState({ errorMessageCalendar: 'You have to write the tile and the details' })

                                            }
                                            else {

                                                users.addEvent();
                                                this.props.goToCalendar();
                                            }

                                        }
                                        }>
                                            <Text style={styles.buttonText}>Create event</Text>
                                        </TouchableOpacity>
                                    </SafeAreaView>
                                );
                            }
                        }
                    </Subscribe>
                </ScrollView>

            </SafeAreaView>
        );
    }
}