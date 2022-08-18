import fetchWeather from './fetch_weather';
import { buildContent } from './components';

const citySubmit = () => {
  let submit = document.getElementById('city-search-submit');

  const cityHelper = async () => {
    let citySearch = document.getElementById('city-search');
    let cityWeather = await fetchWeather(citySearch.value);
    console.log(cityWeather);
    buildContent(cityWeather);
  };

  submit.addEventListener('click', () => {
    cityHelper();
  });

  let cityField = document.getElementById('city-search');

  cityField.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      cityHelper();
    }
  });
};

export { citySubmit };
