/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  webpack(config) {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    }
    return config
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['ipfs.pantograph.app','ipfsgw.bountykinds.com','skywalker.infura-ipfs.io'],
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
