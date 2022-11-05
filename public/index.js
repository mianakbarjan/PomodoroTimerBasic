const secondsElement = document.querySelector("#seconds");
const minutesElement = document.querySelector("#minutes");
const timerButton = document.querySelector("#timer-button")
const setting = document.querySelector("#setting");


let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let settingsToggle = false;
let progress = null; 
let progressStart = 0;
let progressEnd = parseInt(minutes)*60 + parseInt(seconds);
let secondsRemaining=0;
let minutesRemaining = 0;
let speed = 1000;



setting.onclick = function(){
    if (!settingsToggle){
        settingsToggle = true;
        minutes.contentEditable = true;
        seconds.contentEditable = true;

    }
    else {
        resetValues();
    }
};
//resets values once minutes come down to zero
minutes.onblur = function(){
    resetValues();
}
//resets values once seconds come down to zero
seconds.onblur = function(){
    resetValues();
}


function progressTrack(){
    progressStart++;
    secondsRemaining = Math.floor((progressEnd - progressStart)%60);
    minutesRemaining = Math.floor((progressEnd-progressStart)/60);
    secondsElement.innerHTML = secondsRemaining.toString().length ==2?secondsRemaining:`0${secondsRemaining}`;
    minutesElement.innerHTML = minutesRemaining.toString().length == 2?minutesRemaining:`0${minutesRemaining}`;
    if (progressStart==progressEnd){
    clearInterval(progress);
    timerButton.innerHTML = "Start";
    progress = null;
    progressStart = 0;
}
}

function timerProgress(){
    if (!progress){
        progress = setInterval(progressTrack, speed);
    }
    else {
        clearInterval(progress);
        progress = null;
        progressStart= 0;
    }
}

function resetValues(){
    if (progress){
        clearInterval(progress);
    }
    minutes = document.querySelector("#minutes").innerHTML;
    seconds = document.querySelector("#seconds").innerHTML;
    settingsToggle = false;
    minutesElement.contentEditable=false;
    secondsElement.contentEditable=false;
    progress = null;
    progressStart = 0;
    progressEnd = parseInt(minutes)*60 + parseInt(seconds);
}

timerButton.onclick = function(){
    if (timerButton.innerHTML==="Start"){
        if (!(parseInt(minutes)===0 && parseInt(seconds)===0)){
        timerButton.innerHTML = "Stop";
        timerProgress();
    }
  
    else {
        alert("Enter the duration before starting the timer!");
    }
}
else {
    timerButton.innerHTML = "Start";
    timerProgress();
}
};
setting.onclick = function(){
    if (!settingsToggle){
        settingsToggle = true;
        minutesElement.contentEditable = true;
        secondsElement.contentEditable = true;
    }
    else {
        resetValues();
    }
}
minutesElement.onblur = function (){
    resetValues();
};

secondsElement.onblur = function(){
    resetValues();
};


