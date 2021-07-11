let display = document.getElementById("display")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let hours = 0;
let minutes = 0;
let seconds = 0;
let seconds10 = 0;

let interval;

function setButtonStateInitial(){
  start.disabled = false;
  stop.disabled = true; 
  reset.disabled = true;
}

function setButtonStateRunning(){
  start.disabled = true;
  stop.disabled = false; 
  reset.disabled = true;
}

function setButtonStateStopped(){
  start.disabled = false;
  stop.disabled = true; 
  reset.disabled = false;
}



function stopWatch(){
  seconds10++;
  if(seconds10 / 9 == 1){
    seconds++;
    seconds10 = 0;
    if(seconds / 60 == 1){
      minutes++;
      seconds = 0;
    }
    if(minutes / 60 == 1){
      hours++;
      minutes = 0;
    }
    
  }
  
  display.innerHTML = hours + ":" + minutes + ":" +seconds + ":" + seconds10
}

start.addEventListener("click" , function(){
  setButtonStateRunning();
  interval = setInterval(stopWatch, 100);
})

stop.addEventListener("click" , function(){
  setButtonStateStopped();
  clearInterval(interval);
})
  
reset.addEventListener("click" , function(){
  setButtonStateInitial();
  clearInterval(interval);
  display.innerHTML = 0 + ":" + 0 +":" + 0 + ":" + 0
  hours = 0;
  minutes = 0;
  seconds = 0;
  seconds10 = 0;
})


