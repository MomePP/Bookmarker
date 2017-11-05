import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCZhVPYEP__G7tluetZ1Q5AyS5TMpxYy_I',
  authDomain: 'mome-app.firebaseapp.com',
  databaseURL: 'https://mome-app.firebaseio.com',
  projectId: 'mome-app',
  storageBucket: 'mome-app.appspot.com',
  messagingSenderId: '639113260297'
}
let firebaseApp = firebase.initializeApp(config)
let firebaseDB = firebaseApp.database()

export { firebaseApp, firebaseDB }
