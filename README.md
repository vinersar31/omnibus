# Omnibus Launcher

Omnibus is a centralized app launcher built with Next.js (App Router) and Tailwind CSS. It serves as a static hub to route users to independent app submodules like Portfolio and Loan Tracker.

## Features
- **Sleek Interface**: Modern mobile OS-style layout with "squircles" and hover effects.
- **Static Export**: Fully static build for deployment on GitHub Pages.
- **Git Submodules**: Integrates individual apps into a cohesive workspace.

## Setup
To set up the project locally, run:

\`\`\`bash
# Clone the repo along with submodules
git clone --recurse-submodules <repository_url>

# Install dependencies
npm install

# Run the development server
npm run dev &
\`\`\`

## Deployment
Omnibus is configured to deploy via GitHub Actions to GitHub Pages. It will recursively check out submodules and generate a static output in the `out` directory.
