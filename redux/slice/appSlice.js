import { createSlice } from '@reduxjs/toolkit'
import MessageEN from '@/static/lang/en.json'
import MessageVN from '@/static/lang/vn.json'
const localeEN = {
  la: 'en',
  messages: MessageEN
}
const localeVN = {
  la: 'vi',
  messages: MessageVN
}

export const initialState = {
  modal: null,
  userInfo:null,
  token:null,
  language:localeVN
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModal: (state, action) => {
      if (action.payload === null && state.modal?.afterClose) {
        state.modal?.afterClose()
      }
      state.modal = action.payload
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setLanguage: (state, action) => {
      console.log({action});
      switch (action.payload.la) {
      case 'en':
        state.language = localeEN
        break;
      default:
        state.language = localeVN
        break;
      }
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  }
})
export const {
  setLanguage,
  setToken,
  setUserInfo,
  setModal
} = appSlice.actions
export default appSlice.reducer
