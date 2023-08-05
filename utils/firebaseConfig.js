import { DATA_FIREBASE } from '@/common/constant';
import FirebaseFun from '@/utils/FirebaseFun';
import { initializeApp } from 'firebase/app';
import {
  collection, getFirestore,
  setLogLevel
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
class FirebaseConfig{
  static firebase
  constructor(){

  }
  static initFirebase (){
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID_FB,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDER_ID,
      appId: process.env.NEXT_PUBLIC_APPID,
      measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
    };
    this.firebase = initializeApp(firebaseConfig)
    return this.firebase;
  }
  static getFireStore(nameData){
    if(!this.firebase){
      this.initFirebase()
    }
    const collectionData = collection(getFirestore(this.firebase), nameData)
    return FirebaseFun(collectionData)
  }
  static getFireStorage(nameData){
    if(!this.firebase){
      this.initFirebase()
    }
    const collectionData = collection(getStorage(this.firebase), nameData)
    return FirebaseFun(collectionData)
  }
}
export const FirebaseCoffee = FirebaseConfig.getFireStore(DATA_FIREBASE.coffee)
export const FirebaseUser = FirebaseConfig.getFireStore(DATA_FIREBASE.user)
export const FirebaseCart = FirebaseConfig.getFireStore(DATA_FIREBASE.cart)
export const FirebaseAvatar = FirebaseConfig.getFireStore(DATA_FIREBASE.avatar)
export const FirebaseContact = FirebaseConfig.getFireStore(DATA_FIREBASE.contact)
