/*function autoRefresh() {
    window.location = window.location.href;
}
setInterval('autoRefresh()', 1000);*/
const languages = ["React Javascript", "React TypeScript", "Python", "Java", "Kotlin"];

var space = document.getElementById("language");

for (let i = 0; i < languages.length; i++){
    space.innerHTML += `<a> ${languages[i]} </a>`;
}

const frameworks = ["Github", "React TypeScript", "Python", "Java", "Kotlin"];

var space = document.getElementById("framework");

for (let i = 0; i < languages.length; i++){
    space.innerHTML += `<a> ${languages[i]} </a>`;
}