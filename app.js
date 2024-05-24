const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//months indexed based.

const giveAway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tomorrowDate = new Date(2024,7,15,11,30); 
// console.log(tomorrowDate);

const year = tomorrowDate.getFullYear();
const hours = tomorrowDate.getHours();
const minutes = tomorrowDate.getMinutes();

let month = tomorrowDate.getMonth();
month = months[month];
const weekday = weekdays[tomorrowDate.getDay()];
const date = tomorrowDate.getDate();
  
giveAway.textContent = `Giveaway ends on ${date} ${month} ${year} ${hours} ${minutes} `;

