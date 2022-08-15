const fetchWeather = async (city) => {
  try {
    const apiKey = '3c68b43789bf56a9dc2ea91cc4a6309e';
    const weather5d3hr = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`,
      { cors: true }
    );
    const weather = await weather5d3hr.json();
    return weather;
  } catch {
    console.log(err);
  }
};
export default fetchWeather;
