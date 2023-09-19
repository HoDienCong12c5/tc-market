// import React from 'react'
// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   return (
//     <Html>
//       <Head>
//         <html lang={'vn'}/>
//         <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />

//         <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
//         <meta property="og:type" content="website"/>
//         <meta name="robots" content= "index, follow" />


//         {/* <link href='https://fonts.googleapis.com/css2?family=Aldrich&display=swap' rel='stylesheet' /> */}
//         <link rel='manifest' href='/manifest.json' />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

// pages/_document.tsx file
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />), //gets the styles from all the components inside <App>
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/*👇 insert the collected styles to the html document*/}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render(){
    return <Html lang='vi'>
      <Head>
        <link rel='preconnect' href='https:fonts.gstatic.com' crossOrigin='true' />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:type" content="website"/>
        <meta name="robots" content= "index, follow" />


        {/* <link href='https:fonts.googleapis.com/css2?family=Aldrich&display=swap' rel='stylesheet' /> */}
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}
