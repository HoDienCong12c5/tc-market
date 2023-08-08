import React from 'react';
import { Affix } from 'antd';
import SEO from './seo';
import Header from './header';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';
const MyModal = dynamic(import('@/components/MyModal'), { ssr: false });
const Footer = dynamic(import('./Footer'), { ssr: false });
const ToastContainer = dynamic(import('@/components/ToastWrapper'), { ssr: false });

const Container = ({ children }) => {
  return (
    <>
      <SEO />
      <Affix>
        <Header />
      </Affix>
      <main className="main-body">{children}</main>
      {/* {children} */}

      <Footer />
      <MyModal />
      <ToastContainer />
    </>
  );
};

export default Container;
