/*function autoRefresh() {
    window.location = window.location.href;
}
setInterval('autoRefresh()', 1000);*/
const colors = ["#AE445A", "#E8BCB9", "#4B4376", "#A64D79", "#006A67", "#C63C51", "#EB3678"];

var programcolor = document.getElementsByClassName("language");

if (!programcolor){
    console.log("Not working");
}
else{
    for (let i = 0; i < programcolor.length; i++){
        programcolor[i].style.backgroundColor = colors[Math.floor(Math.random()*7)];
    }
}