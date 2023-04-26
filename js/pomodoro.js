window.onload = ()=>{
    // pomodoro
    let workTime;
    let breakTime;
    let timesCompleted;
    let cyclesGoal ;
    let cyclesCompleted = 0;

    function isRestTime(){
        return timesCompleted == 7;
    }

    function pomodoroController(){
        if(isRestTime()){

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
        console.log(currentTime, seconds);
        setTimeout(timer, 1000);
    }
    else{
        console.log("El temporizador termino");
    }
    }
    
};
