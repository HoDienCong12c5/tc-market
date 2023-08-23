import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <html lang={'vn'}/>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:type" content="website"/>
        <meta name="robots" content= "index, follow" />


        {/* <link href='https://fonts.googleapis.com/css2?family=Aldrich&display=swap' rel='stylesheet' /> */}
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
