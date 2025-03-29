import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/app/image.ts'
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'raw.githubusercontent.com',
    //     pathname: '**',
    //   },
    // ],
  },
}

export default nextConfig
