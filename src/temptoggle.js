import { tempConvert } from './tempConvert';

const tempToggle = () => {
  let temps = document.getElementsByClassName('temp');
  let unit = document.getElementsByClassName('active');

  if (temps[0]) {
    for (let item of temps) {
      if (unit[0].id === 'fahrenheit') {
        item.innerText = `${Math.round(
          tempConvert.cToF(parseInt(item.innerText.substring(0, 2)))
        )}° F`;
      }
      if (unit[0].id === 'celsius') {
        item.innerText = `${Math.round(
          tempConvert.fToC(parseInt(item.innerText.substring(0, 2)))
        )}° C`;
      }
    }
  }
};

export default tempToggle;
