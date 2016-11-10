import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB0Irr90n1HDLQ1-64qv_8FxMa04SAgDPQ',
  authDomain: 'tic-tac-toe-ae1df.firebaseapp.com',
  databaseURL: 'https://tic-tac-toe-ae1df.firebaseio.com',
  storageBucket: 'tic-tac-toe-ae1df.appspot.com',
  messagingSenderId: '959262083106',
};

export const app = firebase.initializeApp(config);
export const database = app.database();
