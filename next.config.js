// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withPlugins = require("next-compose-plugins");
// const withSass = require("sass");
const withImages = require("next-images");
const path = require("path");
// const withSass = require("@zeit/next-sass");
// const withCSS = require("@zeit/next-css");
const webpack = require("webpack");

module.exports = withPlugins([[withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  images: {
    disableStaticImages: true,
  },
});