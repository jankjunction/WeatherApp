import clearDiv from './clearDiv';
import convertUnixTime from './convert_unix_time';
import { tempConvert } from './tempConvert';

const buildContainer = () => {
  let container = document.createElement('div');
  container.setAttribute('id', 'container');
  document.body.appendChild(container);
};

const buildLogo = (header) => {
  let logo = document.createElement('span');
  logo.setAttribute('id', 'logo');
  logo.innerText = 'Weather';
  header.appendChild(logo);
};

const buildCitySearch = (header) => {
  let citySearchForm = document.createElement('form');
  citySearchForm.setAttribute('id', 'city-search-form');
  let citySearch = document.createElement('input');
  citySearch.setAttribute('type', 'text');
  citySearch.setAttribute('id', 'city-search');
  citySearch.setAttribute('name', 'city-search');
  citySearch.setAttribute('placeholder', 'Enter a City');
  let citySearchSubmit = document.createElement('button');
  citySearchSubmit.setAttribute('type', 'button');
  citySearchSubmit.setAttribute('id', 'city-search-submit');
  citySearchSubmit.innerText = 'Search';
  citySearchForm.appendChild(citySearch);
  citySearchForm.appendChild(citySearchSubmit);
  header.appendChild(citySearchForm);
};

const buildHeader = () => {
  let header = document.createElement('div');
  header.setAttribute('id', 'header');
  let container = document.getElementById('container');
  container.appendChild(header);
  buildLogo(header);
  buildCitySearch(header);
};

const buildContent = (cityData) => {
  let container = document.getElementById('container');
  let isContent = document.getElementById('city-slug');
  let citySlug = document.createElement('div');
  citySlug.setAttribute('id', 'city-slug');
  container.appendChild(citySlug);

  const builder = () => {
    city();
    dateTime();
    currentTemp();
    currentWeather();
  };

  const city = () => {
    let cityContainer = document.createElement('div');
    cityContainer.setAttribute('id', 'city-container');
    citySlug.appendChild(cityContainer);

    let cityName = document.createElement('span');
    cityName.setAttribute('id', 'city-name');
    cityName.innerText = cityData[1].city.name + ', ';

    let countryName = document.createElement('span');
    countryName.setAttribute('id', 'country-name');
    countryName.innerText = cityData[1].city.country;

    cityContainer.appendChild(cityName);
    cityContainer.appendChild(countryName);
  };

  let dateTime = () => {
    let moment = document.createElement('div');
    moment.setAttribute('id', 'moment');
    let dateData = convertUnixTime(cityData[0].dt);
    console.log(cityData[0].timezone);

    let date = document.createElement('span');
    date.setAttribute('id', 'date');
    date.innerText = `${dateData.day}, ${dateData.month} ${dateData.date}`;

    let time = document.createElement('span');
    time.setAttribute('id', 'time');

    {
      let hour = dateData.hour + cityData[0].timezone / 3600;
      let min = dateData.min;
      let amPM = '';
      if (hour > 12) {
        hour -= 12;
        amPM = 'p.m.';
      } else {
        amPM = 'a.m.';
      }
      if (dateData.min < 10) {
        time.innerText = `${hour}:0${min} ${amPM}`;
      } else {
        time.innerText = `${hour}:${min} ${amPM}`;
      }
    }

    moment.appendChild(date);
    moment.appendChild(time);

    citySlug.appendChild(moment);
  };

  const currentTemp = () => {
    let currentWeatherContainer = document.createElement('div');
    currentWeatherContainer.setAttribute('id', 'current-weather-container');
    citySlug.appendChild(currentWeatherContainer);

    let temp = document.createElement('span');
    temp.setAttribute('id', 'current-temp');
    temp.innerText =
      Math.round(tempConvert.kToF(cityData[0].main.temp)) + '° F';
    currentWeatherContainer.appendChild(temp);
  };

  const currentWeather = () => {
    let weatherCondition = document.createElement('span');
    weatherCondition.setAttribute('id', 'condition');
    citySlug.appendChild(weatherCondition);
    weatherCondition.innerText = cityData[0].weather[0].main;

    let weatherDescription = document.createElement('span');
    weatherDescription.setAttribute('id', 'weather-description');
    citySlug.appendChild(weatherDescription);
    weatherDescription.innerText = cityData[0].weather[0].description;
  };

  if (isContent) {
    clearDiv(isContent);
    builder();
  } else {
    builder();
  }
};

export { buildContainer, buildHeader, buildContent };
