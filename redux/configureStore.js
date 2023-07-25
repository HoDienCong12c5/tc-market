import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import appReducer from './slice/appSlice'
import { KEY_STORE } from '@/common/constant'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
const persistConfig = {
  key: 'root',
  storage,
  devTools: true,
  whitelist:[
    'language',
    'userInfo'
  ],
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = configureStore({
  reducer: {
    app: persistedReducer,
  },
})
export const persistor = persistStore(store)

export default store
