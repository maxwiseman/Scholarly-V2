/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: true,
  },
  async rewrites() {
     return [
      {
        source: '/api/canvas/knoxschools/:path*',
        destination: 'https://knoxschools.instructure.com/:path*',
      },
      {
        source: '/api/canvas/k12/:path*',
        destination: 'https://k12.instructure.com/:path*',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'inst-fs-iad-prod.inscloudgate.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'instructure-uploads.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
}
