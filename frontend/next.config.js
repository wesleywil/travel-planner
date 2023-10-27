/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'http://localhost:8000/api/:path*',
          },
        ]
      },
}

module.exports = nextConfig
