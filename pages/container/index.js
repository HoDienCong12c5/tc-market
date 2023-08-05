import React from 'react'
import { Affix } from 'antd'
import SEO from './seo'
import Header from './header'
import MyModal from '@/components/MyModal'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Container = ({children}) => {
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
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  )
}

export default Container
