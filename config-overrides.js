const { override } = require("customize-cra");
const path = require("path");

const libraryPlugin = (config) => {
  return config;
};

module.exports = {
  webpack: override(libraryPlugin),
};
