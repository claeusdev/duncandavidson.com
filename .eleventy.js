const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
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
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return value.toLocaleDateString("en-US", options);
  });

  return {
    dir: {
      input: "src",
      includes: "../includes",
      data: "../data",
      output: "dist",
      templateFormats: [
        "md",
        "jpg" 
      ],
      passthroughFileCopy: true,
    }
  }
}