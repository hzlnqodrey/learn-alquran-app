const withBundlerAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === ' true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },

    // PWA Config
    async headers() {
        return [
            {
                sources: '/manifest.json',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    },
                ],
            },
            {
                source: '/sw.js',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=0, must-revalidate'
                    }
                ]
            }
        ];
    },

    // Image Optimzation
    images: {
        domains: [
            'api.quran.gading.dev',
            'localhost',
        ],
        formats: [
            'image/webp',
            'image/avif'
        ]
    },

    // Environment variables exposed to the browser
    // TODO:
    // Security can PENTEST the API key located here, please do more reach to keep env var safely
    env: {
        CUSTOM_KEY: process.env.CUSTOM_KEY, 
    },

    // Internalization
    // TODO:
    // - Add ID (Indonesia)
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
        localeDetection: true,
    },
    
    // Security Headers
    async headers() {
        return [
            {
                source: '/(.*)', // regex all
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
                            "style-src 'self' 'unsafe-inline'",
                            "img-src 'self' data: https:",
                            "font-src 'self' data:",
                            "connect-src 'self' https://api.quran.gading.dev http://localhost:8080",
                            "media-src 'self' https:",
                            "object-src 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                            "frame-ancestors 'none'",
                            "upgrade-insecure-requests",
                        ].join('; '),
                    },
                ],
            },
        ];
    },

    // Redirects
    async redirects() {
        return [
            {
                source: '/surah',
                destination: '/',
                permanent: true,
            },
        ];
    },

    // Rewrites for API proxy (DEVELOPMENT)
    async rewrites() {
        if (process.env.NODE_ENV === 'development') {
            return [
                {
                    source: '/api/backend/:path*',
                    destination: 'http://localhost:8080/api/v1/:path*'
                },
            ];
        }
        return [];
    },

    // Webpack Configuration
    webpack: (
        config, {
            buildId,
            dev,
            isServer,
            defaultLoaders,
            nextRuntime,
            webpack
        }
    ) => {
        // Add Custom webpack configuration here
        // TODO:
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        }

        return config;
    }

  // Output configuration for static export (if needed)
  // trailingSlash: true,
  // output: 'export',

}

module.exports = withBundlerAnalyzer(nextConfig);