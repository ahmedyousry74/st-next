
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.scientific-thought.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.github.io',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|ogv|pdf)$/,
      type: 'asset/resource',       
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    return config;
  },
};

export default withNextIntl(nextConfig);
