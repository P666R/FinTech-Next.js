import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx'],
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
  },
};

export default nextConfig;
