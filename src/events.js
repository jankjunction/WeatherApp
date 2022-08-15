import fetchWeather from './fetch_weather';

const citySubmit = () => {
  let submit = document.getElementById('city-search-submit');

  submit.addEventListener('click', async () => {
    let citySearch = document.getElementById('city-search');
    let cityWeather = await fetchWeather(citySearch.value);
    console.log(cityWeather);
    return cityWeather;
  });
};

export { citySubmit };
