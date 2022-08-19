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
  let citySearchForm = document.createElement('div');
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

const tempFC = (header) => {
  let toggle = document.createElement('div');
  toggle.setAttribute('id', 'toggle');

  let celsius = document.createElement('span');
  celsius.setAttribute('id', 'celsius');
  celsius.innerText = 'C°';

  let fahrenheit = document.createElement('span');
  fahrenheit.setAttribute('id', 'fahrenheit');
  fahrenheit.innerText = 'F°';
  fahrenheit.classList.toggle('active');

  toggle.appendChild(celsius);
  toggle.appendChild(fahrenheit);

  header.appendChild(toggle);
};

const buildHeader = () => {
  let header = document.createElement('div');
  header.setAttribute('id', 'header');
  let container = document.getElementById('container');
  container.appendChild(header);
  buildLogo(header);
  buildCitySearch(header);
  tempFC(header);
};

const buildContent = (cityData) => {
  let container = document.getElementById('container');
  let isContent = document.getElementById('city-slug');
  let is3hr = document.getElementById('three-hr-container');
  let citySlug = document.createElement('div');
  citySlug.setAttribute('id', 'city-slug');
  container.appendChild(citySlug);

  const builder = () => {
    city();
    dateTime();
    currentTemp();
    currentWeather();
    build3Hour();
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
      console.log(Math.sign(hour) === -1);
      if (Math.sign(hour) === -1) {
        hour += 20;
      }
      if (hour < 12) {
        amPM = 'a.m.';
      }
      if (hour > 12) {
        hour -= 12;
        amPM = 'p.m.';
      } else {
        amPM = 'p.m.';
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
    temp.setAttribute('class', 'temp');
    temp.innerText =
      Math.round(tempConvert.kToF(cityData[0].main.temp)) + '° F';
    currentWeatherContainer.appendChild(temp);
  };

  const currentWeather = () => {
    let conditionContainer = document.createElement('div');
    conditionContainer.setAttribute('id', 'condition-container');
    citySlug.appendChild(conditionContainer);

    let weatherCondition = document.createElement('span');
    weatherCondition.setAttribute('id', 'condition');
    conditionContainer.appendChild(weatherCondition);
    weatherCondition.innerText = cityData[0].weather[0].main;

    let weatherDescription = document.createElement('span');
    weatherDescription.setAttribute('id', 'weather-description');
    conditionContainer.appendChild(weatherDescription);
    weatherDescription.innerText = cityData[0].weather[0].description;

    let weatherIcon = document.createElement('img');
    weatherIcon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${cityData[0].weather[0].icon}@2x.png`
    );
    weatherIcon.setAttribute('id', 'weather-icon');
    conditionContainer.appendChild(weatherIcon);
  };

  const build3Hour = () => {
    let threeHourContainer = document.createElement('div');
    threeHourContainer.setAttribute('id', 'three-hr-container');
    container.appendChild(threeHourContainer);

    const threeHourHelper = (segment) => {
      let threeHrChunk = document.createElement('div');
      threeHrChunk.setAttribute('class', 'three-hr-chunk');
      threeHourContainer.appendChild(threeHrChunk);

      let dateData = convertUnixTime(segment.dt);
      let time = document.createElement('span');
      {
        let hour = dateData.hour + cityData[0].timezone / 3600;
        let min = dateData.min;
        let amPM = '';
        if (Math.sign(hour) === -1) {
          hour += 24;
        }
        if (hour < 12) {
          amPM = 'a.m.';
        }
        if (hour > 12) {
          hour -= 12;
          amPM = 'p.m.';
        }
        if (hour === 12) {
          amPM = 'p.m.';
        }
        if (dateData.min < 10) {
          time.innerText = `${hour}:0${min} ${amPM}`;
        } else {
          time.innerText = `${hour}:${min} ${amPM}`;
        }
      }

      let threeHrTemp = document.createElement('span');
      threeHrTemp.setAttribute('class', 'temp');
      threeHrTemp.innerText =
        Math.round(tempConvert.kToF(segment.main.temp)) + '° F';

      let threeHrCondition = document.createElement('span');
      threeHrCondition.innerText = segment.weather[0].main;

      let threeHrRain = document.createElement('span');
      threeHrRain.innerText = segment.pop + '% PoP';

      [time, threeHrTemp, threeHrCondition, threeHrRain].forEach((element) => {
        threeHrChunk.appendChild(element);
      });
    };

    cityData[1].list.forEach((element) => {
      threeHourHelper(element);
    });
  };

  if (isContent && is3hr) {
    clearDiv(isContent);
    clearDiv(is3hr);
    builder();
  } else {
    builder();
  }
};

export { buildContainer, buildHeader, buildContent };
