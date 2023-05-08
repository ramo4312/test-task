/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// fontLoaders: [
	// 	{ loader: '@next/font/google', options: { subsets: ['latin'] } },
	// ],
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tecdn.b-cdn.net',
			},
		],
	},
}

module.exports = nextConfig
