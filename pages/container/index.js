import React, { Suspense, useEffect, useMemo, useState } from 'react'

import { Affix } from 'antd'
import { styled } from 'styled-components'
import SEO from './seo'
import Header from './header'
import MyModal from '@/components/MyModal'
import Footer from './Footer'
import { useRouter } from 'next/router'
const ContainerApp = styled.main`
   max-width: 1550px;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
  background: #f2ece1 !important;
  padding: 0px 50px;

`;
const Container = ({children}) => {
  const route = useRouter()

  return (
    <>
      <SEO />
      <Affix >
        <Header />

      </Affix>
      <Suspense >
        <ContainerApp >
          {children}
        </ContainerApp>
      </Suspense>

      <Footer />
      <Suspense >
        <MyModal />

      </Suspense>
    </>
  )
}

export default Container
