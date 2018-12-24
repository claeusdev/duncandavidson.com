module.exports = {
  plugins: [
    require("postcss-import")({}),
    require("postcss-preset-env")({
      stage: 0,
      browsers: "last 2 versions"
    }),
    require("cssnano")({
      preset: "default"
    })
  ]
};
