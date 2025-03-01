
function btnDis(id, task){
    document.getElementById(id).addEventListener('click', function(){
        document.getElementById(id).disabled = true;
        let taskNum = parseInt(document.getElementById("task").innerText);
        taskNum--;
        document.getElementById("task").innerText = taskNum;
        let done = parseInt(document.getElementById("done").innerText);
        done++;
        document.getElementById("done").innerText = done;
        let taskName = document.getElementById(task).innerText;
        let newTask = document.createElement("p");
        let time = new Date();
        let hours = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();
        let ampm = "";
        if(hours>=12){
            hours = hours % 12;
            ampm = "pm";
        }
        else{
            ampm = "am";
        }
        let newTime = hours+":"+mins+":"+secs+" "+ampm;
        newTask.innerText = 'You have completed the task ' + taskName +" at " + newTime;
        newTask.classList.add("log-text");
        document.getElementById("log").appendChild(newTask); 
    })
} 
