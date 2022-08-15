import convertUnixTime from './convert_unix_time';

const fetchWeather = async (city) => {
  const apiKey = '3c68b43789bf56a9dc2ea91cc4a6309e';
  const weatherJSON = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`,
    { cors: true }
  );
  const weather = await weatherJSON.json();
  console.log(weather);
  console.log(convertUnixTime(weather.list[1].dt));
};
export default fetchWeather;
