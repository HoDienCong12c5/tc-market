import React, { Suspense, useEffect, useMemo, useState } from 'react'

import { Affix } from 'antd'
import { styled } from 'styled-components'
import SEO from './seo'
import Header from './header'
import MyModal from '@/components/MyModal'
import Footer from './Footer'
import { useRouter } from 'next/router'

const Container = ({children}) => {
  const route = useRouter()

  return (
    <>
      <SEO />
      <Affix >
        <Header />

      </Affix>
      <main className='main-body' >
        {children}
      </main>

      <Footer />
      <MyModal />
    </>
  )
}

export default Container
