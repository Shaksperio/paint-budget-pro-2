'use strict';

const { NextFederationPlugin } = require('@module-federation/nextjs-react-18');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'paint-budget',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};