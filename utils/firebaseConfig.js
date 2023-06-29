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
export const DATA_COFFEE = FirebaseConfig.getFireStore('Coffee-Shop')
export const DATA_USER = FirebaseConfig.getFireStore('user')
export const DATA_CART = FirebaseConfig.getFireStore('user')
export const DATA_AVATAR = FirebaseConfig.getFireStore('avatar')
export default FirebaseConfig;