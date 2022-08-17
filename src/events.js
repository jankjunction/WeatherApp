import fetchWeather from './fetch_weather';
import { buildContent } from './components';

const citySubmit = () => {
  let submit = document.getElementById('city-search-submit');

  submit.addEventListener('click', async () => {
    let citySearch = document.getElementById('city-search');
    let cityWeather = await fetchWeather(citySearch.value);
    console.log(cityWeather);
    buildContent(cityWeather);
  });
};

export { citySubmit };
