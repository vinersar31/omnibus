/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  // Set the basePath to the repository name if deploying to a GitHub Pages project repository.
  // For example, if the repo is 'username/personal-ops', the basePath should be '/personal-ops'.
  // We'll assume the basePath is '/personal-ops' as per the user's instructions.
  basePath: '/personal-ops',

  // Since we are setting basePath, we also need to configure assetPrefix for static assets
  // assetPrefix: '/personal-ops/', // Next.js handles assetPrefix automatically when basePath is set

  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
