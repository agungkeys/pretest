/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [     
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
		domains: ['cdn2.thecatapi.com', 'https://placehold.co'],
	},
  env: {
    API_HOST: process.env.API_HOST,
    API_IMAGE: process.env.API_IMAGE,
    API_TOKEN: process.env.API_TOKEN,
    LOGO: process.env.LOGO,
    PLACEHOLD: process.env.PLACEHOLD,
  },
}

module.exports = nextConfig
