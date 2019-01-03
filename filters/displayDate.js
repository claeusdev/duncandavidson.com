module.exports = function(value) {
  let options = {
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
};
