import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import { Container } from "unstated";
import 'firebase/firestore';
import { PersistContainer } from 'unstated-persist';
import { Linking, AsyncStorage  } from 'react-native';

const ref = firebase.database(firebaseConfig).ref();


export default class FriendsContainer extends PersistContainer {

  state = {
    friend: [],
    isLoading: false,
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
      this.setState({ friend: arr });
    });

    return this.state.friend;

  }


  getList = async () => {
    
    const userId = firebase.auth().currentUser.uid;
    const friendsRef = ref.child(`/friends/${userId}`);

    await friendsRef.once('value').then(snapshot => {
      const arr = Object.values(snapshot.val());
      this.setState({ friend: arr });
    });
    return this.state.friend;
  }

  deleteFriend = (friendToDelete) => {
		let friends = this.state.friend.filter(a => a.username !== friendToDelete);
		this.setState({friend: friends});
  };
  
  persist = {
		key: 'friends',
		version: 1,
		storage: AsyncStorage,
	  };


}
