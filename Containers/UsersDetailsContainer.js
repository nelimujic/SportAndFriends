import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import { Container } from 'unstated';
import { PersistContainer } from 'unstated-persist';
import { Linking, AsyncStorage  } from 'react-native';

const ref = firebase.database(firebaseConfig).ref();

class UsersDetailsContainer extends PersistContainer {
    
        state = {
            friend: [],
        };

    
    addFriend = async (name, surname, username, sport) => {
        const userId = firebase.auth().currentUser.uid;
        const friendsRef = ref.child(`/friends/${userId}`)
        
        await friendsRef.push({
            name: name,
            surname: surname,
            username: username,
            sport: sport,
        });
        await friendsRef.once('value').then(snapshot => {
            const arr = Object.values(snapshot.val());
            this.setState({friend:arr});
        });
 
         return this.state.friend;
 
       }

       persist = {
		key: 'usersDetails',
		version: 1,
		storage: AsyncStorage,
	  };
}

export default UsersDetailsContainer
