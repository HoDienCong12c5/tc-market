importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyCxnDsbYZBuS7TDTngP5I9arslzjhV48Vs',
  authDomain: 'keyring-hardwallet-dev.firebaseapp.com',
  projectId: 'keyring-hardwallet-dev',
  storageBucket: 'keyring-hardwallet-dev.appspot.com',
  messagingSenderId: '77440888837',
  appId: '1:77440888837:web:5127e6173881babcd9ac6c',
  measurementId: 'G-Y1KNSJBDX5'
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onMessage((payload) => {
  console.log('Message received.firebase-messaging-sw ', payload);
  // ...
});
