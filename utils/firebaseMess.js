import { getMessaging, getToken } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyDxEJyOrx_vEo9bI0DcgUL0ajgZVvKXT-M',
  authDomain: 'mlem-coffe.firebaseapp.com',
  databaseURL: 'https://mlem-coffe-default-rtdb.firebaseio.com',
  projectId: 'mlem-coffe',
  storageBucket: 'mlem-coffe.appspot.com',
  messagingSenderId: '199865841313',
  appId: '1:199865841313:web:a2e7bab7874e65104fa2e0',
  measurementId: 'G-E236RFEPF9'
};

export function requestPermission () {
  const app = initializeApp(firebaseConfig)
  const mess = getMessaging(app)
  console.log('Requesting permission...')
  Notification.requestPermission().then(async (permission) => {
    if (permission === 'granted') {
      const token = await getToken(mess,{
        vapidKey: 'BC272vuHZ_2W-gtzlCcal_7XuiX32b84A9YT3THUo8fGI-e4L7vzF54oYDFRFxoKT2ToFj3Q4uwpuMQaQ-19kXc'
      })
      console.log({token});
    }
  })
}
