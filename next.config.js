const path = require("path");

// Project root = directory containing this config (so resolution works even when cwd is a parent like E:\Work\Projects)
const projectRoot = __dirname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Acknowledge Turbopack (Next.js 16 default); webpack config is for --webpack builds
  turbopack: {},
  webpack: (config) => {
    // Force resolution from this project's node_modules, not parent directories
    config.context = projectRoot;
    config.resolve.modules = [
      path.join(projectRoot, "node_modules"),
      "node_modules",
    ];
    return config;
  },
};

module.exports = nextConfig;
