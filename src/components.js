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
  citySearch.setAttribute('placeholder', 'input city');
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

export { buildContainer, buildHeader };
