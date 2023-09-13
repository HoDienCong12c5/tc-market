const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  optimizeFonts:true,
  cleanDistDir:true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'images.unsplash.com',
      'ipfs.pantograph.app',
      'ipfs.pantograph.app/ipfs',
      'ipfsgw.bountykinds.com',
      'skywalker.infura-ipfs.io'
    ],
  },
  compiler: {
    // removeConsole: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'PRODUCTION',
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  eslint: {
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // env: {
  //   NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
  //   NEXT_PUBLIC_API_KEY:'AIzaSyDxEJyOrx_vEo9bI0DcgUL0ajgZVvKXT-M',
  //   NEXT_PUBLIC_AUTHDOMAIN:'mlem-coffe.firebaseapp.com',
  //   NEXT_PUBLIC_DATABASE_URL:'https://mlem-coffe-default-rtdb.firebaseio.com',
  //   NEXT_PUBLIC_PROJECT_ID_FB:'mlem-coffe',
  //   NEXT_PUBLIC_STORAGE_BUCKET: 'mlem-coffe.appspot.com',
  //   NEXT_PUBLIC_MESSAGINGSENDER_ID:'199865841313',
  //   NEXT_PUBLIC_APPID:'1:199865841313:web:a2e7bab7874e65104fa2e0',
  //   NEXT_PUBLIC_MEASUREMENT_ID:'G-E236RFEPF9',
  //   NEXT_PUBLIC_API_KEY_NODE_ENV : 'DEVELOPMENT'
  // },
}

module.exports = nextConfig
