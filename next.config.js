/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './app/page.tsx',
  },
};

module.exports = {
  // Configure static HTML export
  // More details: https://nextjs.org/docs/advanced-features/static-html-export
  output: 'export',
};