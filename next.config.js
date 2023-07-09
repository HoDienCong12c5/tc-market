/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['ipfs.pantograph.app','ipfsgw.bountykinds.com','skywalker.infura-ipfs.io'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'PRODUCTION',
    styledComponents: {
      displayName: true,
      ssr: false,
    },
  },
  eslint: {
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
