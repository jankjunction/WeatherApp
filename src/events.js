import fetchWeather from './fetch_weather';
import { buildContent } from './components';
import tempToggle from './temptoggle';

const citySubmit = () => {
  let submit = document.getElementById('city-search-submit');

  const cityHelper = async () => {
    let citySearch = document.getElementById('city-search');
    let cityWeather = await fetchWeather(citySearch.value);
    if (citySearch.value === '') {
    } else {
      if (cityWeather) {
        if (cityWeather[0].cod != '200') {
          throw console.error(`${cityWeather[0].message} Hey there`);
        } else {
          buildContent(cityWeather);
        }
      }
    }
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
    let container = document.getElementById('container');
    if (e.target.parentNode.id === 'toggle') {
      if (container.childNodes.length > 1) {
        let celsius = document.getElementById('celsius');
        celsius.classList.toggle('active');
        let fahrenheit = document.getElementById('fahrenheit');
        fahrenheit.classList.toggle('active');
        tempToggle();
      }
    }
  });
};

export { citySubmit, tempToggleBtn };
