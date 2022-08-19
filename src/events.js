import fetchWeather from './fetch_weather';
import { buildContent } from './components';
import tempToggle from './temptoggle';

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

const tempToggleBtn = () => {
  document.addEventListener('click', (e) => {
    if (e.target.parentNode.id === 'toggle') {
      let celsius = document.getElementById('celsius');
      celsius.classList.toggle('active');
      let fahrenheit = document.getElementById('fahrenheit');
      fahrenheit.classList.toggle('active');
      tempToggle();
    }
  });
};

export { citySubmit, tempToggleBtn };
