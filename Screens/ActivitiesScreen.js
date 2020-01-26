import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ActitivitiesContainer from '../Containers/ActivitiesContainer';
import ActivitiesComponent from '../Components/ActivitiesComponent';

export default class ActivitiesScreen extends Component {


    render() {


        return (

            <Subscribe to={[ActitivitiesContainer]}>
                {activities => (


                    <ActivitiesComponent

                        getList={activities.getList}
                        activity={activities.state.activity}
                        onDetailsScreen={(item) =>

                            this.props.navigation.navigate('ActivitiesDetailsScreen', {
                                sport: item.sport,
                                place: item.place,
                                details: item.details,
                                cost: item.cost,
                                number: item.number
                            },
                                //console.log(item)
                            )
                        }
                    >
                    </ActivitiesComponent>
                )
                }
            </Subscribe>
        );
    }
}

ActivitiesScreen.navigationOptions = ({ navigation }) => ({
    title: "Activities List",
    headerStyle: {
        backgroundColor: '#141b23',
    },
    headerTitleStyle: { color: '#ffd5c0' },
})