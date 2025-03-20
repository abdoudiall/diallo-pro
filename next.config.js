/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: *.linkedin.com *.malt.fr *.github.com",
      "font-src 'self' https://fonts.gstatic.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
      "manifest-src 'self'",
      "media-src 'none'",
      "worker-src 'self' blob:",
      "upgrade-insecure-requests",
      "block-all-mixed-content"
    ].join('; ')
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), gyroscope=(), layout-animations=(), legacy-image-formats=(), magnetometer=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin'
  },
  {
    key: 'Cross-Origin-Embedder-Policy',
    value: 'require-corp'
  }
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    emotion: true
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
    gzipSize: true,
    turbotrace: {
      logLevel: 'error',
      contextDirectory: __dirname,
    },
    optimizePackageImports: ['@mui/icons-material', '@mui/material', 'date-fns'],
    craCompat: false
  },
  images: {
    domains: ['linkedin.com', 'malt.fr', 'github.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: process.env.NODE_ENV === 'development'
  },
  compress: true,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  output: 'standalone',
  httpAgentOptions: {
    keepAlive: true
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  generateEtags: true,
  distDir: process.env.NODE_ENV === 'production' ? '.next' : '.next-dev',
  cleanDistDir: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.yourdomain.com' : ''
};

module.exports = nextConfig; 