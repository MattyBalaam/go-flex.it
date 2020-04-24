// postcss.config.js

module.exports = {
  plugins: {
    "postcss-copy-assets": {
      base: "public/build",
    },
  },
  to: "public/build/bundle.css",
};
