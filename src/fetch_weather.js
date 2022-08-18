const fetchWeather = async (city) => {
  try {
    const apiKey = '3c68b43789bf56a9dc2ea91cc4a6309e';
    const weather5d3hr = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&cnt=8`,
      { cors: true }
    );
    const currentWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const weather5d = await weather5d3hr.json();
    const cWeather = await currentWeather.json();
    return [cWeather, weather5d];
  } catch {
    console.log(err);
  }
};
export default fetchWeather;
