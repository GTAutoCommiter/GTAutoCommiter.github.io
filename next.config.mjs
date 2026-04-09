/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your GitHub repo is not <username>.github.io, you might need a basePath
  // basePath: '/repo-name',
};

export default nextConfig;
