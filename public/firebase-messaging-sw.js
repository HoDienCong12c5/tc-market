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

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});

messaging.onMessage((payload) => {
  console.log('Message received.firebase-messaging-sw ', payload);
  // ...
});
