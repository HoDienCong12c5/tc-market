
import { connect, useDispatch, useSelector } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { useEffect } from 'react';
import { KEY_STORE } from '@/common/constant';
import { initialState, setLanguage, setUserInfo } from '@/redux/slice/appSlice';
import { useCallback } from 'react';
import { getDataLocal } from '@/utils/function';

// const mapStateToProps = state => ({
//   locale: state.locale.lang,
//   key: state.locale.lang,
//   messages: state.locale.messages
// })
// import { IntlProvider } from 'react-intl';

function ReduxConnectIntl({children}) {
  const locale = useSelector(state => state.app.language)
  const dispatch = useDispatch()
  const checkLocalStoreToRedux = useCallback(
    ({key,action,initData}) => {
      if(getDataLocal(key)){
        dispatch(action(getDataLocal(key)))
      }else{
        dispatch(action(initData))
      }
    },
    [],
  )

  useEffect(() => {
    const listStore = [
      { key:KEY_STORE.SET_USER,action:setUserInfo,initialState:initialState.userInfo},
      { key:KEY_STORE.SET_LANGUAGE,action:setLanguage,initialState:initialState.language}
    ]
    const promiseArr = listStore.map((item) => {
      checkLocalStoreToRedux(item)
    })
    Promise.allSettled(promiseArr)
  }, [])
  return (
    <IntlProvider defaultLocale={locale.la} locale={locale.la} messages={locale.messages}>
      {children}
    </IntlProvider>
  );
}

export default ReduxConnectIntl
