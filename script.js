const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const christmas = '25 Dec 2022';

function countdown(){
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const totalSeconds = new Date(christmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secsEl.innerHTML = formatTime(seconds);

    //console.log(christmasDate);
    //console.log(currentDate);
    // console.log(days, hours, minutes, seconds);
    // console.log(christmasDate - currentDate);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();
setInterval(countdown, 1000);
