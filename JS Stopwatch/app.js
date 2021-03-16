//Selectors 
const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const appendColon = document.getElementById('colon');
let tens = 00;
let seconds = 00;
let interval;
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');
const lapsButton = document.getElementById('lap-btn');
const lapsList = document.getElementById('laps-list');
const clearLap = document.getElementById('clear-btn');


//Click events
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapsButton.addEventListener('click', addLap);
clearLap.addEventListener('click', clear);

//Functions
//Start Button
function startTimer () {
  interval = setInterval(start, 100);
  setInterval(interval);

  function start () {
    tens++;
    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    } else if ( tens > 9) {
      appendTens.innerHTML = tens;
    } else if (tens > 00) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    } else (seconds > 9) 
      appendSeconds.innerHTML = seconds;
  }
}

//Stop Button
function stopTimer () {
  clearInterval(interval);
}
stopTimer();

//Reset Button
function resetTimer () {
  clearInterval(interval)
  interval = null;
  seconds = 0;
  tens = 0;
  appendTens.innerHTML = "0" + 00;
  appendSeconds.innerHTML = "0" + 00;
}
resetTimer();

//Add Lap 
function addLap () {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(appendSeconds.innerHTML + colon.innerHTML + appendTens.innerHTML));
  lapsList.appendChild(li);
}
addLap();

//Clear Laps
function clear () {
  lapsList.innerHTML = "";
}
clear();