import { saveDataLocal } from '@/utils/function';
import { KEY_STORE, OBSERVER_KEY } from '@/common/constant';
import { setUserInfo } from '@/redux/slice/appSlice';
import { DATA_USER } from '@/utils/firebaseConfig'
import observer from '@/utils/observer';
import store from '@/redux/configureStore';

const firebaseService = {
  callDispatch:(fun)=>{
    store.dispatch(fun)
  },
  login:async(numberPhone,passWord,saveLogin = false)=>{
    const dataUser = await DATA_USER.getAllData()
    console.log({dataUser})
    if(dataUser?.length > 0){
      dataUser.forEach(user=>{
        if(user.numberPhone.toString().trim() === numberPhone.toString().trim() && user.pass === passWord.toString().trim()){
          console.log({user});
          firebaseService.callDispatch(setUserInfo(user))

          saveLogin && saveDataLocal(KEY_STORE.SET_USER, user)
          observer.emit(OBSERVER_KEY.LOGIN)
        }
      })
    }
  }
}
export default firebaseService
