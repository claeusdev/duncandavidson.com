const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    typographer: true
  };
  let markdownLib = markdownIt(options);

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("cssmin", require("./filters/cssmin.js"));
  eleventyConfig.addFilter("displayDate", require("./filters/displayDate.js"));
  eleventyConfig.addFilter(
    "parseDateFromYearMonth",
    require("./filters/parseDateFromYearMonth.js")
  );
  eleventyConfig.addFilter(
    "archiveHeaderDate",
    require("./filters/archiveHeaderDate.js")
  );
  eleventyConfig.addFilter(
    "blogPermalink",
    require("./filters/blogPermalink.js")
  );
  eleventyConfig.addFilter(
    "archiveMonthDate",
    require("./filters/archiveMonthDate.js")
  );
  eleventyConfig.addFilter("clockTime", require("./filters/clockTime.js"));
  eleventyConfig.addFilter("limit", require("./filters/limit.js"));

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

  return {
    dir: {
      input: "content",
      includes: "../includes",
      data: "../data",
      output: "dist",
      templateFormats: ["md", "jpg"],
      passthroughFileCopy: true
    }
  };
};
