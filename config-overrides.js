const { override } = require("customize-cra");
const path = require("path");

const libraryPlugin = (config) => {
  config.entry = "./src/index.tsx";

  config.output = {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    library: {
      name: "note",
      type: "umd",
    },
  };
  return config;
};

module.exports = {
  webpack: override(libraryPlugin),
};
