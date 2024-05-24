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


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
 
let tomorrowDate = new Date(2024,7,15,11,30); 
// console.log(tomorrowDate);

const year = tomorrowDate.getFullYear();
const hours = tomorrowDate.getHours();
const minutes = tomorrowDate.getMinutes();

let month = tomorrowDate.getMonth();
month = months[month];
const weekday = weekdays[tomorrowDate.getDay()];
const date = tomorrowDate.getDate();
  
giveAway.textContent = `Giveaway ends on ${date} ${month} ${year} ${hours} ${minutes}am`;



//future date in milliseconds

const futureTime = tomorrowDate.getTime()
// console.log(futureTime)

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);

//logging the values in milliseconds;.
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(days);
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach( (item, index) => {
    item.innerHTML = format(values[index]);
  });
// setting up incase date passed deadline
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
  //countdown
  let countdown = setInterval(getRemainingTime, 1000);
  getRemainingTime();
