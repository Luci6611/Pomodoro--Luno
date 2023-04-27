window.onload = ()=>{
    // pomodoro
    let workTime;
    let breakTime;
    let timesCompleted;
    let cyclesGoal ;
    let cyclesCompleted = 0;

    function goalReached(){
        return cyclesGoal == cyclesCompleted;
    }

    function isRestTime(){
        return timesCompleted == 7;
    }

    function pomodoroController(){
        if(isRestTime()){
            cyclesCompleted++;
            if(!goalReached()){
                currentTime = restTime;
                timer();
                timesCompleted = 0;
            }else{
                console.log("Pomodoro terminado!");
            }
            return;
        }

        if(timesCompleted % 2 == 0){
            currentTime = workTime;
            timesCompleted++;
            timer();
            console.log("Hora de trabajar TC:" + timesCompleted)
        } else{
            currentTime = breakTime;
            timesCompleted++;
            timer();
            console.log("Hora de un descanso!! TC:" + timesCompleted)
        }
       
    }


    // timer
    let currentTime ;
    let seconds = 0;

    function timer(){
    if(currentTime > 0 || seconds >0){
        if(seconds == 0){
            seconds = 59;
            currentTime--;
        }
        else{
            seconds--;
        }
        updateClock();
        console.log(currentTime, seconds);
        setTimeout(timer, 1000);
    }
    else{
        pomodoroController();
        console.log("El temporizador termino");
    }
    }
   // conexion a frontend
let clock = document.getElementById("clock");
let cyclesInput = document.getElementById("cycles-input");
let startButton = document.getElementById("start-button");
let workTimeInput = document.getElementById("work-time");
let breakTimeInput = document.getElementById("break-time");
let restTimeinput = document.getElementById("rest-time");

// Funcionalidad del boton
startButton.onclick = () => {
    populateVariables();
    startPomodoro();
};
function startPomodoro(){
    console.log("Pomodoro iniciado...");
    pomodoroController();
}

function populateVariables(){
    console.log("Populate Variables...");
    workTime = workTimeInput.value;
    breakTime = breakTimeInput.value;
    restTime = restTimeinput.value;
    cyclesGoal = cyclesInput.value;
    timesCompleted = 0;
}

let clockMinutes;
let clockSeconds; 
function updateClock() {
    clockMinutes = formatNumbers(currentTime);
    clockSeconds = formatNumbers(seconds);
    clock.innerHTML = clockMinutes + ":" + clockSeconds;
}
function formatNumbers (time){
    let formattedDigits;
    if (time <10 ){
        formattedDigits = "0" + time;
    } else{
        formattedDigits = time;
    }
    return formattedDigits;
}
};


