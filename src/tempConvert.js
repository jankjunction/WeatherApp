const tempConvert = (() => {
  // Kelvin to Fahrenheit
  const kToF = (temp) => {
    return ((temp - 273.15) * 9) / 5 + 32;
  };
  // Kelvin to Celsius
  const kToC = (temp) => {
    return temp - 273.15;
  };
  // Fahrenheit to Celsius
  const fToC = (temp) => {
    return ((temp - 32) * 5) / 9;
  };
  // Celsius to Fahrenheit
  const cToF = (temp) => {
    return (temp * 9) / 5 + 32;
  };

  return {
    kToF: kToF,
    kToC: kToC,
    fToC: fToC,
    cToF: cToF,
  };
})();

export { tempConvert };
