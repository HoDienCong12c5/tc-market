import Head from 'next/head'
import React from 'react'

const HeaderSeo = ({
  title,
  description,
  image,
  url,
  keyWord
}) => {
  return (
    <>
      <Head>
        {/*  HTML Meta Tags  */}
        <meta charSet="utf-8" />
        <title>{title || process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="title" content={title || process.env.NEXT_PUBLIC_TITLE}/>
        <meta name="description" content={description || process.env.NEXT_PUBLIC_TITLE_DES}/>


        {/* Google / Search Engine Tags  */}
        <meta itemProp="name" content={title || process.env.NEXT_PUBLIC_TITLE}/>
        <meta itemProp="description" content={description || process.env.NEXT_PUBLIC_TITLE_DES}/>
        <meta itemProp="image" content={image || process.env.NEXT_PUBLIC_IMG_LOGO}/>

        {/* Facebook Meta Tags */}
        <meta property="og:title" content={title || process.env.NEXT_PUBLIC_TITLE}/>
        <meta property="og:description" content={description || process.env.NEXT_PUBLIC_TITLE_DES}/>
        <meta property="og:image"content={image || process.env.NEXT_PUBLIC_IMG_LOGO}/>
        <meta property="og:url" content={url || process.env.NEXT_PUBLIC_URL_WEBSITE} />


        {/* Twitter Meta Tags */}
        <meta property="twitter:title" content={title || process.env.NEXT_PUBLIC_TITLE}/>
        <meta property="twitter:description" content={description || process.env.NEXT_PUBLIC_TITLE_DES}/>
        <meta property="twitter:image" content={image || process.env.NEXT_PUBLIC_IMG_LOGO}/>
        <meta property="twitter:url" content={url || process.env.NEXT_PUBLIC_URL_WEBSITE} />


        {/* Twitter Meta Tags --heymeta.com */}
        <meta name="twitter:title" content={title || process.env.NEXT_PUBLIC_TITLE}/>
        <meta name="twitter:description" content={description || process.env.NEXT_PUBLIC_TITLE_DES}/>
        <meta name="twitter:image" content={image || process.env.NEXT_PUBLIC_IMG_LOGO}/>
        <meta name="twitter:url" content={url || process.env.NEXT_PUBLIC_URL_WEBSITE} />

        {/* key   word */}
        <meta name="keywords" content={keyWord || process.env.NEXT_PUBLIC_KEY_WORD}/>
      </Head>
    </>
  )
}

export default HeaderSeo
