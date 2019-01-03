module.exports = function(value) {
  // /blog/2019/01/ -> January 2019
  let p = value.split("/");
  let d = new Date(p[2] + "/" + p[3] + "/01");
  var options = {
    year: "numeric",
    month: "long"
  };
  return d.toLocaleDateString("en-US", options);
};
