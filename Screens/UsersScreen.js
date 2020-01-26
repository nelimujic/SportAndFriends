import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import UsersContainer from '../Containers/UsersContainer';
import UsersComponent from '../Components/UsersComponent';

export default class UsersScreen extends Component {
  render() {
    return (
      <Subscribe to={[UsersContainer]}>
        {(friends) => (
          <UsersComponent

            getList={friends.getList}
            user = {friends.state.user}

            onDetailsScreen={(item) => 
            
            this.props.navigation.navigate('UserDetailsScreen', {
              name: item.name,
              surname: item.surname,
              username: item.username,
              sport: item.sport
          }) }>
          </UsersComponent>
        )}
      </Subscribe>
    );  }
}

UsersScreen.navigationOptions = ({ navigation }) => ({
  title: "Users",
  headerStyle: {
    backgroundColor: '#141b23',
  },
  headerTitleStyle: { color: '#ffd5c0' },
  
})
