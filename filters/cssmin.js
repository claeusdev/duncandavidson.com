const CleanCSS = require("clean-css");

module.exports = function(css) {
  return new CleanCSS({}).minify(css).styles;
};
