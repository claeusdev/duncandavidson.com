module.exports = function(value) {
  // /posts/2018/12/blogging/ -> /blog/2018/12#blogging
  let p = value.split("/");
  return "/blog/" + p[2] + "/" + p[3] + "#" + p[4];
};
