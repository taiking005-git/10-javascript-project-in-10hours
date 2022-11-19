const newYearDate = document.getElementById("countDownTo").textContent;
const displayDays = document.getElementById("days");
const displayHours = document.getElementById("hours");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");


function getCountDown() {
    const currentYear = new Date();
    const newYear = new Date(newYearDate);
    // =================== get date time difference between currentYear and newYear
    const milliSeconds = (newYear - currentYear) / 1000;
    // =================== convert  milliSeconds to days, hours, minutes and seconds
    let days = Math.floor(milliSeconds / 3600 / 24);
    let hours = Math.floor(milliSeconds / 3600) % 24;
    let minutes = Math.floor(milliSeconds % 3600 / 60);
    let seconds = Math.floor(milliSeconds % 3600 % 60);
    let obj = { "d": formatTime(days), "h": formatTime(hours), "m": formatTime(minutes), "s": formatTime(seconds) };

    // ================== Returning a date object
    return obj;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}


// ============ set and interval to render the textContent every seconds
setInterval(() => {
    displayDays.textContent = getCountDown().d;
    displayHours.textContent = getCountDown().h;
    displayMinutes.textContent = getCountDown().m;
    displaySeconds.textContent = getCountDown().s;
}, 1000);