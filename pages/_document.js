import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no' />
        <meta property="og:type" content="website"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="robots" content= "index, follow" />
        <meta name="twitter:app:name:iphone" content="twitter_app" />
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
