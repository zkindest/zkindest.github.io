const path = require("path");
const withOffline = require("next-offline");

module.exports = withOffline({
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  webpack: (config, { webpack, defaultLoaders }) => {
    config.resolve.alias["@"] = path.resolve(__dirname, ".");
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        "@mdx-js/loader",
        path.join(__dirname, "./lib/mdx-data-loader"),
      ],
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.BACKEND_URL": JSON.stringify(""),
      })
    );

    return config;
  },
});
