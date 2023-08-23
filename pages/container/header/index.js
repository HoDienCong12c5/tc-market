import React, { useEffect, useState } from 'react'
import { BtnAccUser, ContainerBaseHeader, ContainerHeader } from './styled';
import Media from 'react-media'
import { images } from '@/common/images';
import ImageNext from '@/components/ImageNext';
import dynamic from 'next/dynamic';
import useModal from '@/hook/useModal';
import { useSelector } from 'react-redux';
import useUserInfo from '@/hook/useUserInfor';
import ButtonBasic from '@/components/ButtonBasic';
import { DownOutlined, MenuOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Drawer, Dropdown, Space } from 'antd';
import styles from './style.module.scss'
import { useRouter } from 'next/router';
import { setUserInfo } from '@/redux/slice/appSlice';
// import NavDesktop from './components/navDesktop';
import ReduxService from '@/redux/reduxService';
import { ROUTE_PAGE } from '@/common/constant';
import { showNotiToastError } from '@/utils/function';
const ModalLogin = dynamic(() => import('./components/ModalLogin'),{ssr:false})
const NavDesktop = dynamic(() => import('./components/navDesktop'),{ssr:false})

const Header = () => {
  const router = useRouter()

  const { openModal, closeModal } = useModal()
  const { isSigned, userData } = useUserInfo()
  const messages = useSelector(state => state.app.language.messages)
  const modal = useSelector(state => state.app.modal)

  const [showMenuMobile, setShowMenuMobile] = useState(false)

  useEffect(() => {

    if (modal && isSigned) {
      closeModal()
    }
    return () => { }

  }, [isSigned]);
  const handleSignOut = async () => {
    ReduxService.resetUser()
    showNotiToastError(messages.noti.logOut)
  }
  const handleLogin = async () => {
    setUserInfo({ name: 'diencong' })
    openModal({
      content: <ModalLogin />,
    })
  }

  const onClickMenuMobile = (key) => {
    setShowMenuMobile(false)
    router.push(key)
  }
  const renderDesktop = () => {
    const items = [
      {
        key: '1',
        label: (
          <div onClick={() => router.push('/profile/my-profile')}>
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
        <ImageNext className='hover' onClick={() => router.push('/')} width={50} height={50} src={images.landingPage.logo} />
        <NavDesktop />
        {
          isSigned ? (
            <Dropdown
              menu={{ items, }}
              trigger={['click']}
              className={'hover'}
            >
              <BtnAccUser className={styles['bnt-login']} >
                <ImageNext className={'h-25 w-25 mr-5'} src={images.icon.avatarDefault} />
                <Space>
                  {userData?.name}
                  <DownOutlined />
                </Space>
              </BtnAccUser>
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

  const renderItemMenuMobile = (keyPage,title) => {
    return <ButtonBasic
      onClick={() => onClickMenuMobile(keyPage)}
      className={styles['btn-item-menu']}
    >
      {title}
    </ButtonBasic>
  }
  const renderMobile = () => {
    return (
      <>
        <div className='flex justify-between'>
          <ImageNext width={50} height={50} src={images.landingPage.logo} />
          <div className='flex w-auto justify-end h-[50px] items-center'>

            {
              isSigned ? (
                <>
                  <ImageNext className={'h-25 w-25 mr-5'} src={images.icon.avatarDefault} />
                  <Space>
                    {userData?.name}
                  </Space>
                </>
              ) : (
                <div>
              Login
                </div>
              )
            }
            <MenuOutlined
              onClick={() => setShowMenuMobile(true)}
              className='ml-[10px]'
              style={{ fontSize: 30 }}
            />
          </div>

        </div>
        <Drawer
          title="Drawer with extra actions"
          placement={'right'}
          width={'90%'}
          onClose={() => setShowMenuMobile(false)}
          open={showMenuMobile}
          extra={
            <Space>
              <Button onClick={() => setShowMenuMobile(false)}>Cancel</Button>
              <Button type="primary" onClick={() => setShowMenuMobile(false)}>
              OK
              </Button>
            </Space>
          }
        >
          <div className='w-full flex items-start flex-col ' >
            {
              renderItemMenuMobile(ROUTE_PAGE.coffee,messages.header.coffee)
            }
            {
              renderItemMenuMobile(ROUTE_PAGE.about,messages.header.about)
            }
            {
              renderItemMenuMobile(ROUTE_PAGE.contact,messages.header.contact)
            }
            {
              renderItemMenuMobile(ROUTE_PAGE.myCart,messages.header.cart)
            }
          </div>

        </Drawer>
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
