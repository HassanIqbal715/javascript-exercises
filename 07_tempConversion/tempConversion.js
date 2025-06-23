const convertToCelsius = function(x) {
  let C = (x - 32) * (5/9);
  C = parseFloat(C.toFixed(1));
  return C;
};

const convertToFahrenheit = function(x) {
  let F = (x * (9/5) + 32);
  F = parseFloat(F.toFixed(1));
  return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
