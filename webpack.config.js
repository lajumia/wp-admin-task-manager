const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

const adminConfig = {
  ...defaultConfig, // Extend the default @wordpress/scripts config
  entry: {
    index: "./admin/views-react/index.jsx",   // Admin React entry

  },
  output: {
    path: path.resolve(__dirname, "admin/views"),       // Admin build output
    filename: "[name].js",                             // Output file naming pattern
  },
};

module.exports = adminConfig;
