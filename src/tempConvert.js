const tempConvert = (() => {
  const kToF = (temp) => {
    return ((temp - 273.15) * 9) / 5 + 32;
  };

  const kToC = (temp) => {
    return temp - 273.15;
  };

  const fToC = (temp) => {
    return ((temp - 32) * 5) / 9;
  };

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
