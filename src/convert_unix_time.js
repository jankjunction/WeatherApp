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
  const year = moment.getUTCFullYear();
  const month = months[moment.getUTCMonth()];
  const day = days[moment.getUTCDay()];
  const date = moment.getUTCDate();
  const hour = moment.getUTCHours();
  const min = moment.getUTCMinutes();
  const sec = moment.getUTCSeconds();
  const dateObj = { year, month, date, day, hour, min, sec };
  //   console.log(
  //     moment.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  //   );
  return dateObj;
};

export default convertUnixTime;
