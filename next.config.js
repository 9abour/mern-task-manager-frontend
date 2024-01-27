/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.licdn.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
