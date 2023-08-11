import { useSelector } from 'react-redux'

const userUserInfo = () => {
  const userInfo = useSelector(state=>state.app.userInfo)
  return {
    isSigned:!!userInfo,
    userData:userInfo,
    isAdmin: Boolean(userInfo?.isAdmin === 'true'),
  }
}

export default userUserInfo
