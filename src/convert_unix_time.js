const convertUnixTime = (dt) => {
  const moment = new Date(dt * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const year = moment.getFullYear();
  const month = months[moment.getMonth()];
  const date = moment.getDate();
  const hour = moment.getHours();
  const min = moment.getMinutes();
  const sec = moment.getSeconds();
  const dateObj = { year, month, date, hour, min, sec };
  return dateObj;
};

export default convertUnixTime;
