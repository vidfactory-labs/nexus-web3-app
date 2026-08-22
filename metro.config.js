const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// @web3modal/wagmi (and other packages) rely on the "exports" field in
// package.json for subpath imports like "@web3modal/wagmi/react", which
// Metro does not resolve by default.
config.resolver.unstable_enablePackageExports = true;

module.exports = config;
