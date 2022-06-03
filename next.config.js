const nextConf = require('next').NextConfig;
const {
    createVanillaExtractPlugin
  } = require('@vanilla-extract/next-plugin');
  const withVanillaExtract = createVanillaExtractPlugin();
  
  /** @type {import('next').NextConfig} */
  const nextConfig = nextConf
  
  module.exports = withVanillaExtract(nextConfig);