/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 👈 needed for static export
  basePath: '/your-repo-name', // 👈 replace with your repo name
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Next.js image optimization
  },
}

export default nextConfig
