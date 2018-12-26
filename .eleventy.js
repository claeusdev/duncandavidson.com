const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  eleventyConfig.addFilter("displayDate", function(value) {
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    if (value) {
      return value.toLocaleDateString("en-US", options);
    } else {
      return "";
    }
  });

  return {
    dir: {
      input: "src",
      includes: "../includes",
      data: "../data",
      output: "dist",
      templateFormats: ["md", "jpg"],
      passthroughFileCopy: true
    }
  };
};
