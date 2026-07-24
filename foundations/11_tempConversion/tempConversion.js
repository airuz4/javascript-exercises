const convertToCelsius = function(fah) {
  let newCelcius = (fah  - 32) * (5/9);

  if (newCelcius % 1 != 0){
    return Number(newCelcius.toFixed(1));
  }
  return newCelcius
};

const convertToFahrenheit = function(celcius) {
  let newFah = (celcius * (9/5) + 32);
  if (newFah % 1 != 0){
    return Number(newFah.toFixed(1));
  }
  return newFah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
