import { URL_NFT } from '@/common/constant'
import { notification } from 'antd'
import moment from 'moment'

export const roundingNumber = (number, rounding = 7) => {
  const powNumber = Math.pow(10, parseInt(rounding))
  return Math.floor(number * powNumber) / powNumber
}


export const isObject = (value) => {
  return value && typeof value === 'object' && value.constructor === Object
}

export const showNotification = (title = null, description = '', type = 'open', icon = '') => {
  let params = {
    placement: 'bottomRight',
    className: 'notification-class',
    bottom: 54,
    duration: 5,
    icon: icon || ''
  }
  if (title) {
    params['message'] = title
  }
  if (description) {
    params['description'] = description
  }
  notification[type](params)
}
export const saveDataLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const getDataLocal = (key) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key))
  } else {
    return false
  }
}
export const removeDataLocal = (key) => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem(key)
}
export const obToString = (key) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key))
  } else {
    return false
  }
}
export const ellipsisAddress = (
  address,
  prefixLength = 13,
  suffixLength = 4
) => {
  return `${address.substr(0, prefixLength)}...${address.substr(
    address.length - suffixLength,
    suffixLength
  )}`
}


export const viewExternal = (url) => {
  window.open(url, '_blank')
}

export const convertDateFormat = (strTimestamp,type = 'DD MMM YYYY') => {
  let timeStamp
  timeStamp = moment(strTimestamp).format(type)

  return timeStamp
}
export const getBase64Img = (file) =>{
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export const detectImageUrl = (url) => {
  if (!url || url === '') return ''
  if (url?.startsWith('https:')) {
    return url
  } else {
    return `${URL_NFT}/${url}`
  }
}
export const stingToArr = (text,index = 0) => {
  text = text.split('--')
  return text[index]
}
export const cloneObjArr = (data) => {
  return JSON.parse(JSON.stringify(data))
}
export const numberWithCommas = (x) => {
  var parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  if (parts.join('.') === '00') return 0
  return parts.join('.')
}
export const formatDateTime = (value, format = 'YYYY-MM-DD') => {
  return moment(value).format(format)
}
export default () => { }
