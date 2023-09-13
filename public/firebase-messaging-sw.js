import { initializeApp } from 'firebase/app';
import { onMessage } from 'firebase/messaging';
import { getMessaging } from 'firebase/messaging/sw';

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDxEJyOrx_vEo9bI0DcgUL0ajgZVvKXT-M',
  authDomain: 'mlem-coffe.firebaseapp.com',
  databaseURL: 'https://mlem-coffe-default-rtdb.firebaseio.com',
  projectId: 'mlem-coffe',
  storageBucket: 'mlem-coffe.appspot.com',
  messagingSenderId: '199865841313',
  appId: '1:199865841313:web:a2e7bab7874e65104fa2e0',
  measurementId: 'G-E236RFEPF9'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});
