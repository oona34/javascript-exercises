const convertToCelsius = function(temp) {
  const result = (temp -32) * 5/9;
  if (!(result % 1 === 0)) return Number(result.toFixed(1)); else return Number(result.toFixed(0));
};

const convertToFahrenheit = function(temp) {
  const result = (temp * 9/5) + 32;
  if (!(result % 1 === 0)) return Number(result.toFixed(1)); else return Number(result.toFixed(0));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
