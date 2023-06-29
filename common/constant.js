import { images } from './images'

export const KEY_STORE = {
  SET_USER:'SET_USER',
  SET_LANGUAGE:'SET_LANGUAGE',
}
export const REQUEST_TYPE = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
}

export const REACT_QUERY = {
  GET_ALL_NFT:'GET_ALL_NFT',
  GET_ALL_MY_NFT:'GET_ALL_MY_NFT',
  GET_ACCOUNT:'GET_ACCOUNT',
  GET_ALL_PRODUCT:'GET_ALL_PRODUCT',
  GET_CONTACT:'GET_CONTACT',
  GET_TOKEN:'GET_TOKEN',
  GET_FILTER_COFFEE:'GET_FILTER_COFFEE',
  GET_FILTER_NFT:'GET_FILTER_NFT',
  GET_ALL_ORDER:'GET_ALL_ORDER',
  GET_ALL_COFFEE:'GET_ALL_COFFEE',
  GET_ALL_POD:'GET_ALL_POD',
  GET_ALL_CART:'GET_ALL_CART'
}
export const COOKIE = {
  TOKEN_USER:'TOKEN_USER',
  TOKEN_REFRESH:'TOKEN_USER',
  TOKEN_ACCESS:'TOKEN_ACCESS'
}

export const LOCALE_DATA = {
  JA: 'ja',
  CN: 'cn',
  EN: 'en'
}

export const CONNECTION_METHOD = {
  METAMASK: 'METAMASK',
  WALLET_CONNECT: 'WALLET_CONNECT',
  PANTOGRAPH: 'PANTOGRAPH'
}
export const MODAL_CONFIG = {
  wrapClassName: '',
  width: 500,
  //click over modal to close
  clickOverClose:true,
  isDisableIcon: false,
  //show icon close modal
  showIconClose:true,
  maskStyle: {},
  title: null,
  footer: null,
  //click esc modal to close
  clickESCClose:true,
}
export const GlobalModal = {
  body: <></>,
  modalConfig:MODAL_CONFIG
}
export const OBSERVER_KEY = {
  CHANGED_ACCOUNT:'CHANGED_ACCOUNT',
  LOGIN:'LOGIN'
}
export const dataFireBase = {
  'time': 0,
  'hash': '0',
  'to': '0',
  'from': '0',
  'title': '0',
  'contract': '0',
  'data': {
    'image': '0',
    'address': '0xbB47BDD15Aee646b66c03b8cCd1AD1C2AfE5d72c',
    'nameUser': '0',
    'title': '0'
  },
  'id': '0'
}
export const PAGE_SIGN = [
  '/Screen/MyProfile',
]
export const BG_BTN = {
  bgMain:'#45cacd',
  bgClose:'#AFB0B1',
  bgWarning:'#f67d91',
  bgBlue1:'#e4e8e6'
}
export const CHAIN_ID_SUPPORT = {
  '5':'0x1',
  '97':'0x61'
}
export const COLOR = {
  green1:'#66FF33',
  green:'green',
  yellow:'yellow',
  white1:'#f5f5f5'
}

export const PAGE_NO_HEADER_FOOTER = [
  '/register',
  '/landing-page',
  '/login'
]
export const TYPE_CHART = {
  barChart:'barChart',
  pieChart:'pieChart'
}
export const PAGE_PROFILE = {
  myCard:'my-card',
  myProfile:'my-profile',
  historyBuy:'my-history',
  other:'my-other'
}

export const ICON_PAGE_PROFILE = {
  myCard:images.icon.iconCart,
  myProfile:images.userDetail.iconUserDetail,
  historyBuy:images.icon.iconHistory,
  order:images.icon.iconOrder
}

export const URI_NFT = process.env.NEXT_PUBLIC_URI_NFT
export const URI_NFT_CHAIN = process.env.NEXT_PUBLIC_URI_NFT_CHAIN
export const URL_NFT = process.env.NEXT_PUBLIC_IPFS

export default () => { }
