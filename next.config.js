/** @type {import('next').NextConfig} */
const withSass = require('@zeit/next-sass');
const path = require('path');
const nextConfig = {
  // eslint:{
  //   ignoreDuringBuilds: true
  // },
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = withSass({
//   cssModule:true,
// })

module.exports = nextConfig
