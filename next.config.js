/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    plausibleDomain: process.env.PLAUSIBLE_DOMAIN,
    plausibleCustomDomain: process.env.PLAUSIBLE_CUSTOM_DOMAIN,
  },
}

module.exports = nextConfig
