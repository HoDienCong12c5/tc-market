import React, { useEffect, useState } from 'react'
import { ContainerBaseHeader, ContainerHeader } from './styled';
import Media from 'react-media'
import { images } from '@/common/images';
import ImageNext from '@/components/ImageNext';
import dynamic from 'next/dynamic';
import useModal from '@/hook/useModal';
import { useSelector } from 'react-redux';
import userUserInfo from '@/hook/useUserInfor';
import ButtonBasic from '@/components/ButtonBasic';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import styles from './style.module.scss'
import { useRouter } from 'next/router';
import {modalConfig} from '@/common/constant'
import { DATA_USER } from '@/utils/firebaseConfig';
import { setUserInfo } from '@/redux/slice/appSlice';
const NavDesktop = dynamic(()=>import('./components/navDesktop'))
const ModalLogin = dynamic(()=>import('./components/ModalLogin'))
const Header = () => {
  const router = useRouter()

  const {openModal,closeModal} = useModal()
  const{isSigned,name} = userUserInfo()
  const messages = useSelector(state=>state.app.language.messages)
  const modal = useSelector(state => state.app.modal)

  const [showMenuMobile, setShowMenuMobile] = useState(false)

  useEffect(() => {

    if(modal && isSigned){
      closeModal()
    }

  }, [isSigned]);
  const handleSignOut = async () => {
    // ReduxService.resetUser()
  }
  const handleLogin = async () => {
    setUserInfo({name:'diencong'})
    // openModal({
    //   content:<ModalLogin />,
    // })
  }
  const renderDesktop = () => {
    const items = [
      {
        key: '1',
        label: (
          <div onClick={()=>router.push('/profile/my-profile')}>
            {messages.header.myProfile}
          </div>
        )
      },
      {
        key: '1',
        label: (
          <div onClick={handleSignOut}>
            {messages.textPopular.logOut}
          </div>
        )
      }
    ]
    return (
      <>
        <ImageNext width={50} height={50} src={images.landingPage.logo}/>
        <NavDesktop />
        {
          isSigned ? (
            <Dropdown
              menu={{items,}}
              trigger={['click']}
              className={'hover'}
            >
              <ButtonBasic className={styles['bnt-login']} style={{ background: '#f5f5f5', borderRadius: 0, border: '1px solid; black' }}>
                <ImageNext className={'h-25 w-25 mr-5'} src={images.icon.avatarDefault}/>
                <Space>
                  {name}
                  <DownOutlined />
                </Space>
              </ButtonBasic>
            </Dropdown>
          ) : (
            <ButtonBasic
              onClick={handleLogin}
              className={styles['bnt-login']}
            >
              {messages.common.login}
            </ButtonBasic>
          )
        }

      </>
    )
  }
  const renderMobile = () => {
    return (
      <>
        <ImageNext width={50} height={50} src={images.landingPage.logo}/>
        <NavDesktop />
        <ImageNext width={50} height={50} src={images.landingPage.logo}/>

      </>
    )
  }
  return (
    <ContainerBaseHeader >
      <ContainerHeader>
        <Media query='(min-width: 768px)'>
          {(match) => {
            if (match) {
              return renderDesktop()
            }
            return renderMobile()
          }}

        </Media>
      </ContainerHeader>
    </ContainerBaseHeader>

  )
}

export default Header