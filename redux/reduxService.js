import store from './configureStore';
import { setUserInfo } from './slice/appSlice';


class ReduxService{
  static callDispatch(fuc){
    store.dispatch(fuc)
  }
  static resetUser(){
    this.callDispatch(setUserInfo(null))
  }
}
export default ReduxService
