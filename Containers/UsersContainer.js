import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import { Container } from "unstated";
import 'firebase/firestore';
import { PersistContainer } from 'unstated-persist';
import { Linking, AsyncStorage } from 'react-native';


const ref = firebase.database(firebaseConfig).ref();
export default class UsersContainer extends PersistContainer {

  state = {
    user: [],

  };


  getList = async () => {


    const userRef = ref.child(`users`);

    await userRef.once('value').then(snapshot => {
      const arr = Object.values(snapshot.val());
      this.setState({ user: arr });
    });
    return this.state.user;
  }

  persist = {
    key: 'users',
    version: 1,
    storage: AsyncStorage,
  };

}




