import React from 'react';
import { Affix } from 'antd';
import Header from './header';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
const MyModal = dynamic(import('@/components/MyModal'), { ssr: false });
const Footer = dynamic(import('./Footer'), { ssr: false });
const ToastContainer = dynamic(import('@/components/ToastWrapper'), { ssr: false });

const Container = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:type" content="website"/>
        <meta name="robots" content= "index, follow" />
        <meta property="twitter:card" content="summary_large_image"/>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:type" content="website"/>
        <meta name="robots" content= "index, follow" />
        {/* <meta name="twitter:app:name:iphone" content="twitter_app" />
        <meta name="twitter:app:id:iphone" content="twitter_app://iphone" />
        <meta name="twitter:app:id:ipad" content="twitter_app://ipad" />
        <meta name="twitter:app:id:googleplay" content="twitter_app://googleplay" />
        <meta name="twitter:app:url:iphone" content="https://iphone_url" />
        <meta name="twitter:app:url:ipad" content="https://ipad_url" />
        <meta name="twitter:app:name:ipad" content="twitter_app" />
        <meta name="twitter:app:name:googleplay" content="twitter_app" /> */}

      </Head>
      <Affix>
        <Header />
      </Affix>
      <main className="container-main-body">
        {
          router.asPath === '/'
            ? children
            : <div className='main-body '>
              {children}
            </div>
        }

      </main>
      {/* {children} */}

      <Footer />
      <MyModal />
      <ToastContainer />
    </>
  );
};

export default Container;
