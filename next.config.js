/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  // Set the basePath to the repository name if deploying to a GitHub Pages project repository.
  // For example, if the repo is 'username/omnibus', the basePath should be '/omnibus'.
  // We'll assume the basePath is '/omnibus' as per the user's instructions.
  basePath: '/omnibus',

  // Since we are setting basePath, we also need to configure assetPrefix for static assets
  // assetPrefix: '/omnibus/', // Next.js handles assetPrefix automatically when basePath is set

  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
