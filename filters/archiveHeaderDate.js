module.exports = function(value) {
  var options = {
    year: "numeric",
    month: "long"
  };
  if (value) {
    return value.toLocaleDateString("en-US", options);
  } else {
    return "";
  }
};
