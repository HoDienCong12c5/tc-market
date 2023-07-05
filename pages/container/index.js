import React, { Suspense, useMemo } from 'react'

import { Affix } from 'antd'
import { styled } from 'styled-components'
import dynamic from 'next/dynamic'
import SEO from './seo'
import Header from './header'
import MyModal from '@/components/MyModal'
import Footer from './Footer'
// const MyModal = dynamic(()=>import('@/components/MyModal'))
// const Footer = dynamic(()=>import('./Footer'))
const ContainerApp = styled.div`
  max-width: 1550px;
  padding: 0px 50px;
  
`;
const Container = ({children}) => {
  return (
    <>
      <SEO />
      <Affix >
        <Header />

      </Affix>
      <main className={'main-body'}>
        <ContainerApp >
          {children}
        </ContainerApp>
      </main>
      <Footer />
      <Suspense >
        <MyModal />

      </Suspense>
    </>
  )
}

export default Container