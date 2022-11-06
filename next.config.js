/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {dangerouslyAllowSVG: true, domains: ['tailwindui.com', "images.unsplash.com", "xmtp.org", "forkast.news", "seeklogo.com", "worldcoin.org"]},
};

webpack: (config, { isServer }) => {
  if (!isServer) {
    config.resolve.fallback.fs = false
  }
  return config
}

module.exports = nextConfig;
