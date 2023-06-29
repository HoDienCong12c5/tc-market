import React, { useMemo } from 'react'

import { Affix } from 'antd'
import { styled } from 'styled-components'
import dynamic from 'next/dynamic'
import SEO from './seo'
const MyModal = dynamic(()=>import('@/components/MyModal'))
const Header = dynamic(()=>import('./header'))
const Footer = dynamic(()=>import('./Footer'))
const ContainerApp = styled.div`
  max-width: 1550px;
  padding: 0px 50px;
  
`;
const Container = ({children}) => {
  const modalComponent = useMemo(() => <MyModal />, []);
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
      {modalComponent}
    </>
  )
}

export default Container