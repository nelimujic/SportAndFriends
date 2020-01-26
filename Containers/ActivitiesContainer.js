import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import { Container } from "unstated";
import 'firebase/firestore';
import { PersistContainer } from 'unstated-persist';
import { Linking, AsyncStorage  } from 'react-native';

const ref = firebase.database(firebaseConfig).ref();
const friendsRef = ref.child('activities');

export default class ActivitiesContainer extends PersistContainer {
  
    state = {
        activity: [],
        isLoading: false,
      };

     getList = async() => {
         
       await friendsRef.once('value').then(snapshot => {
           const arr = Object.values(snapshot.val());
           this.setState({activity:arr});
       });
        return this.state.activity;
      }

      persist = {
        key: 'activities',
        version: 1,
        storage: AsyncStorage,
        };
}