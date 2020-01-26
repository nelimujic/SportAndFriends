import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import { Container } from "unstated";
import 'firebase/firestore';
import { PersistContainer } from 'unstated-persist';
import { Linking, AsyncStorage  } from 'react-native';

const ref = firebase.database(firebaseConfig).ref();
//const friendsRef = ref.child('calendar');

export default class CalendarContainer extends PersistContainer {

  state = {
    event: [],
    summary: "",
    title: "",
    end: new Date(),
    start: new Date(),
    username: "",
    displayName: "",
    errorMessageCalendar: null,
    events: [],
    mode: 'datetime',
    show: false,

  };

  setNewStart = (start) => {
    this.setState({ start: start });
  };

  setNewEnd = (end) => {
    this.setState({ end: end });
  };

  setNewTitle = (title) => {
    this.setState({ title: title });
  };

  setNewSummary = (summary) => {
    this.setState({ summary: summary });
  };




  addEvent = async () => {

    const userId = firebase.auth().currentUser.uid;
    const friendsRef = ref.child(`/calendar/${userId}`);

    this.setState({ title: "", summary: "", errorMessageCalendar: null });

    await friendsRef.push({

      start: this.state.start,
      end: this.state.end,
      title: this.state.title,
      summary: this.state.summary,
    });


    await friendsRef.once('value').then(snapshot => {
      const arr = Object.values(snapshot.val());
      this.setState({ event: arr });
    });
    //await this.getList();
    return this.state.event;


  };

  getList = async () => {

    const userId = firebase.auth().currentUser.uid;
    const friendsRef = ref.child(`/calendar/${userId}`);

    await friendsRef.once('value').then(snapshot => {
      const arr = Object.values(snapshot.val());
      this.setState({ event: arr });
    });
    return this.state.event;
  }

  persist = {
		key: 'event',
		version: 1,
		storage: AsyncStorage,
	  };



}
