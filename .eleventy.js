const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    typographer: true
  };
  let markdownLib = markdownIt(options);

  eleventyConfig.setLibrary("md", markdownLib);

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

  eleventyConfig.addFilter("parseDateFromYearMonth", function(value) {
    return new Date(value + "/01");
  });

  eleventyConfig.addFilter("archiveHeaderDate", function(value) {
    var options = {
      year: "numeric",
      month: "long"
    };
    if (value) {
      return value.toLocaleDateString("en-US", options);
    } else {
      return "";
    }
  });

  eleventyConfig.addFilter("blogPermalink", function(value) {
    // /posts/2018/12/blogging/ -> /blog/2018/12#blogging
    let p = value.split("/");
    return "/blog/" + p[2] + "/" + p[3] + "#" + p[4];
  });

  eleventyConfig.addFilter("archiveMonthDate", function(value) {
    // /blog/2019/01/ -> January 2019
    let p = value.split("/");
    let d = new Date(p[2] + "/" + p[3] + "/01");
    var options = {
      year: "numeric",
      month: "long"
    };
    return d.toLocaleDateString("en-US", options);
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
