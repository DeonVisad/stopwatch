const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let tenths = 0;
    let appendMinutes = document.querySelector('#minutes')
    let appendSeconds = document.querySelector('#seconds')
    let appendTenths = document.querySelector('#tenths')
    let interval;

const startTimer = ()=> {
    tenths++
    if(tenths <= 9) {
        appendTenths.innerHTML = '0' + tens
    }
    if (tenths > 9) {
        appendTenths.innerHTML = tenths
    }
    if(tenths > 99) {
        seconds++
        appendSeconds.innerHTML = '0' + seconds;
        tenths = 0;
        appendTenths.innerHTML = '0' + 0;
    }
    if(seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if(seconds >59) {
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
    }
}


startBtn.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
};

stopBtn.onclick = () => {
    clearInterval(interval);
};

resetBtn.onclick = () => {
    clearInterval(interval);
    tenths = '00';
    seconds = '00';
    minutes = '00';
    appendTenths.innerHTML = tenths;
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
};


};