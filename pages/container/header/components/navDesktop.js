import ButtonBasic from '@/components/ButtonBasic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import styles from '../style.module.scss'
import MyMenu from '@/components/MyMenu';
const ContainerNavDesktop = styled.div`
    display: flex;
    flex:1;
`;
export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const H1Custom = styled.h1`
 margin-bottom: 0px;
 font-size: 14px;
`;

const NavDesktop = () => {
  const router = useRouter();
  const [listMenuNav, setListMenuNav] = useState([]);
  const messages = useSelector(state=>state?.app?.language?.messages)
  const [current, setCurrent] = useState('mail');

  // const arrNav = [
  //   {
  //     label: (
  //       <H1Custom>
  //         <ButtonBasic
  //           onClick={() => router.push('/CoffeeShop')}
  //           className={styles['btn-item-menu']}
  //         >
  //           {messages.header.coffee}
  //         </ButtonBasic>
  //       </H1Custom>

  //     ),
  //     key: 'coffee',
  //   },
  //   {
  //     label: (
  //       <H1Custom >
  //         <ButtonBasic
  //           onClick={() => router.push('/about')}
  //           className={styles['btn-item-menu']}
  //         >
  //           {messages.header.about}
  //         </ButtonBasic>
  //       </H1Custom>

  //     ),
  //     key: 'about',
  //   },
  //   {
  //     label: (
  //       <H1Custom >
  //         <ButtonBasic
  //           onClick={() => router.push('/Contact')}
  //           className={styles['btn-item-menu']}
  //         >
  //           {messages.header.contact}
  //         </ButtonBasic>
  //       </H1Custom>

  //     ),
  //     key: 'contact',
  //   },
  // ]
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
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <ContainerNavDesktop >
      {
        listMenuNav.length > 0 && (
          <MyMenu 
          style={{width:'100%'}} 
          onClick={onClick} 
          selectedKeys={[current]} 
          mode="horizontal" 
          items={listMenuNav} 
          />

        )
      }

    </ContainerNavDesktop>

  )
}

export default NavDesktop
