import React, { Component } from 'react';
import { TouchableOpacity, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../Style';

import { Subscribe } from 'unstated';
import FriendsContainer from '../Containers/FriendsContainer';
import FriendsComponent from '../Components/FriendsComponent';
import UsersDetailsContainer from '../Containers/UsersDetailsContainer';

export default class FriendsScreen extends Component {


  render() {

    return (

      <Subscribe to={[FriendsContainer]}>
        { friends => (


          <FriendsComponent

            getList={friends.getList}
            friend={friends.state.friend}
            isLoading={friends.state.isLoading}
            onDetailsScreen={(item) =>

              this.props.navigation.navigate('UserDetailsScreen', {
                name: item.name,
                surname: item.surname,
                username: item.username,
                sport: item.sport
              },
              //console.log(item)
              )
            }
          >
          </FriendsComponent>
        )

        }
      </Subscribe>
    );
  }
}

FriendsScreen.navigationOptions = ({ navigation }) => ({
  title: "Friends",
  headerStyle: {
    backgroundColor: '#141b23',
  },
  headerTitleStyle: { color: '#ffd5c0' },
  headerRight: <TouchableOpacity onPress={() => { navigation.navigate('UsersScreen') }} >
    <View style={styles.iconButton}>
      <Ionicons name="ios-person-add" size={24} color="#ffd5c0" />
    </View>
  </TouchableOpacity>
})
