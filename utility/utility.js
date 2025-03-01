
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
        newTask.innerText = 'You have completed the task ' + taskName;
        newTask.classList.add("log-text");
        document.getElementById("log").appendChild(newTask); 
    })
} 
