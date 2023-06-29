import ButtonBasic from '@/components/ButtonBasic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import styles from '../style.module.scss'
import MyMenu from '@/components/MyMenu';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const ContainerNavDesktop = styled.div`
    display: flex;
    flex:1;
`;
export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;
const IconNumberCart = styled.div`
  width: 17px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  left: 34px;
  top: -1px;
  font-size: 12px;
  background: rgba(6, 191, 123, 0.4);
`;
export const H1Custom = styled.h1`
 margin-bottom: 0px;
 font-size: 14px;
`;

const NavDesktop = () => {
  const router = useRouter();
  const [listMenuNav, setListMenuNav] = useState([]);
  const messages = useSelector(state=>state.app.language.messages)
  const arrNav = [
    {
      label: (
        <H1Custom>
          <ButtonBasic
            onClick={() => router.push('/CoffeeShop')}
            className={styles['btn-item-menu']}
          >
            {messages.header.coffee}
          </ButtonBasic>
        </H1Custom>

      ),
      key: 'coffee',
    },
    {
      label: (
        <H1Custom >
          <ButtonBasic
            onClick={() => router.push('/about')}
            className={styles['btn-item-menu']}
          >
            {messages.header.about}
          </ButtonBasic>
        </H1Custom>

      ),
      key: 'about',
    },
    {
      label: (
        <H1Custom >
          <ButtonBasic
            onClick={() => router.push('/Contact')}
            className={styles['btn-item-menu']}
          >
            {messages.header.contact}
          </ButtonBasic>
        </H1Custom>

      ),
      key: 'contact',
    },
  ]
  useEffect(() => {
    const initMenuNav = () => {
      const arrNav = [
        {
          label: (
            <H1Custom>
              <ButtonBasic
                onClick={() => router.push('/CoffeeShop')}
                className={styles['btn-item-menu']}
              >
                {messages.header.coffee}
              </ButtonBasic>
            </H1Custom>

          ),
          key: 'coffee',
        },
        {
          label: (
            <H1Custom >
              <ButtonBasic
                onClick={() => router.push('/about')}
                className={styles['btn-item-menu']}
              >
                {messages.header.about}
              </ButtonBasic>
            </H1Custom>

          ),
          key: 'about',
        },
        {
          label: (
            <H1Custom >
              <ButtonBasic
                onClick={() => router.push('/Contact')}
                className={styles['btn-item-menu']}
              >
                {messages.header.contact}
              </ButtonBasic>
            </H1Custom>

          ),
          key: 'contact',
        },
      ]
      setListMenuNav(arrNav)
    }
    initMenuNav()
  },[])
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <ContainerNavDesktop >
      <MyMenu style={{width:'100%'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={arrNav} />

    </ContainerNavDesktop>

  )
}

export default NavDesktop