import fetchWeather from './fetch_weather';

const citySubmit = () => {
  let submit = document.getElementById('city-search-submit');

  submit.addEventListener('click', () => {
    let cityInput = document.getElementById('city-search');
    let cityWeather = fetchWeather(cityInput.value);
    console.log(cityWeather);
    return cityWeather;
  });
};

export { citySubmit };
