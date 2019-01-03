module.exports = function(value) {
  var options = {
    timeZone: "UTC",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  };
  return value.toLocaleTimeString("en-US", options);
};
