import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        {/* <link href='https://fonts.googleapis.com/css2?family=Aldrich&display=swap' rel='stylesheet' /> */}
        <link rel='manifest' href='/manifest.json' />
        {/* <meta name='description' content='Bridge Token' /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
