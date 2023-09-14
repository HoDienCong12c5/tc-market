import { DATA_FIREBASE } from '@/common/constant';
import FirebaseFun from '@/utils/FirebaseFun';
import { initializeApp } from 'firebase/app';
import {
  collection, getFirestore,
  setLogLevel
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getMessaging, getToken } from 'firebase/messaging';
class FirebaseConfig {
  static firebase
  constructor() {

  }
  static initFirebase() {
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
    this.firebase = initializeApp(firebaseConfig)
    return this.firebase;
  }
  static getFireStore(nameData) {
    if (!this.firebase) {
      this.initFirebase()
    }
    const collectionData = collection(getFirestore(this.firebase), nameData)
    return FirebaseFun(collectionData)
  }
  static getFireStorage(nameData) {
    if (!this.firebase) {
      this.initFirebase()
    }
    const collectionData = collection(getStorage(this.firebase), nameData)
    return FirebaseFun(collectionData)
  }
  static async cloudMess() {
    const mess = getMessaging()
    const token = await getToken(mess, {
      vapidKey: 'BC272vuHZ_2W-gtzlCcal_7XuiX32b84A9YT3THUo8fGI-e4L7vzF54oYDFRFxoKT2ToFj3Q4uwpuMQaQ-19kXc'
    })
    console.log({ token, mess });
    return token
  }

}
export const FirebaseCoffee = FirebaseConfig.getFireStore(DATA_FIREBASE.coffee)
export const FirebaseUser = FirebaseConfig.getFireStore(DATA_FIREBASE.user)
export const FirebaseCart = FirebaseConfig.getFireStore(DATA_FIREBASE.cart)
export const FirebaseAvatar = FirebaseConfig.getFireStore(DATA_FIREBASE.avatar)
export const FirebaseContact = FirebaseConfig.getFireStore(DATA_FIREBASE.contact)
export const FirebaseMess = FirebaseConfig
