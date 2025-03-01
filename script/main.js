btnDis("completed-btn-1", "task-1");
btnDis("completed-btn-2", "task-2");
btnDis("completed-btn-3", "task-3");
btnDis("completed-btn-4", "task-4");
btnDis("completed-btn-5", "task-5");
btnDis("completed-btn-6", "task-6");

let today = new Date();
const day = today.toLocaleDateString("en-GB", {weekday : "short"});
const date = today.toLocaleDateString("en-GB", {month : "short", day : "numeric", year : "numeric"})
document.getElementById("today").innerText = day + ",";
document.getElementById("date").innerText = date;

document.getElementById("clear").addEventListener('click', function(){
    document.getElementById("log").innerHTML = ``;
})
document.getElementById("discover").addEventListener('click', function(){
    window.location.href = "./blogs.html";
})

let colors = ["#A9B5DF", "#FF9D23", "#A27B5C", "#F8F3D9", "#DDEB9D", "#EAFAEA", "#E8F9FF", "#FFCFCF", "#B9B28A"]

document.getElementById("theme-btn").addEventListener('click', function(){
    let n = Math.round(Math.random() * 9);
    newColor = colors[n];
    document.body.style.backgroundColor = newColor;
})
