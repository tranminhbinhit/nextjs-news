/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //distDir: 'build',
  images: {
    loader: 'imgix', //akamai|imgix
    path: '',
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  env: {
    CDN_URL: process.env.CDN_URL,
    PREFIX_NAME: process.env.PREFIX_NAME,
  }
}

module.exports = nextConfig
