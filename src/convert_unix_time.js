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
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const year = moment.getFullYear();
  const month = months[moment.getMonth()];
  const day = days[moment.getDay()];
  const date = moment.getDate();
  const hour = moment.getHours();
  const min = moment.getMinutes();
  const sec = moment.getSeconds();
  const dateObj = { year, month, date, day, hour, min, sec };
  return dateObj;
};

export default convertUnixTime;
