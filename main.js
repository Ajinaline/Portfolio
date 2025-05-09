/*function autoRefresh() {
    window.location = window.location.href;
}
setInterval('autoRefresh()', 1000);*/
const colors = ["#AE445A", "#E8BCB9", "#4B4376", "#A64D79", "#006A67", "#C63C51", "#EB3678"];

document.getElementById("language").style.backgroundColor = colors[Math.floor(Math.random() * 7)];