import { store } from './store';

export default class ReduxService {
  static async callDispatchAction(action) {
    store.dispatch(action)
  }
}