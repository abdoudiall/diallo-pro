/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    emotion: true,
  },
  experimental: {
    optimizePackageImports: ['@mui/icons-material', '@mui/material', 'date-fns'],
  },
  images: {
    domains: ['linkedin.com', 'malt.fr', 'github.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
  compress: true,
  output: 'export',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
};

module.exports = nextConfig;
