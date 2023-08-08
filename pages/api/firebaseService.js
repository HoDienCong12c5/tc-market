import { setUserInfo } from '@/redux/slice/appSlice';
import { FirebaseUser } from '@/utils/firebaseConfig'
import store from '@/redux/configureStore';

const firebaseService = {
  callDispatch: (fun) => {
    store.dispatch(fun)
  },
  login: async (numberPhone, passWord, callBack) => {
    const dataUser = await FirebaseUser.getAllData()
    console.log({ dataUser, numberPhone, passWord })
    if (dataUser?.length > 0) {
      dataUser.forEach(user => {
        if (
          user.numberPhone?.toString().trim() === numberPhone?.toString().trim() &&
          user.pass === passWord.toString().trim()
        ) {
          console.log({ user });
          firebaseService.callDispatch(setUserInfo(user))
          callBack && callBack()

        }
      })
    }
  }
}
export default firebaseService
