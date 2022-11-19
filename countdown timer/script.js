const newYearDate = document.getElementById("countDownTo").textContent;
const displayDays = document.getElementById("days");
const displayHours = document.getElementById("hours");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");


function getCountDown() {
    const currentYear = new Date();
    const newYear = new Date(newYearDate);
    const milliSeconds = (newYear - currentYear) / 1000;

    let days = Math.floor(milliSeconds / 3600 / 24);
    let hours = Math.floor(milliSeconds / 3600) % 24;
    let minutes = Math.floor(milliSeconds % 3600 / 60);
    let seconds = Math.floor(milliSeconds % 3600 % 60);

    let obj = { "d": days, "h": hours, "m": minutes, "s": seconds };

    return obj;
}

getCountDown()

setInterval(() => {
    displayDays.textContent = getCountDown().d;
    displayHours.textContent = getCountDown().h;
    displayMinutes.textContent = getCountDown().m;
    displaySeconds.textContent = getCountDown().s;
}, 1000);