/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/resources',
        destination: 'https://docs.kublockchain.com',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
