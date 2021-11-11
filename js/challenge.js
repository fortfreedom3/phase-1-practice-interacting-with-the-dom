
document.addEventListener("DOMContentLoaded", counterMaker)
setTimeout(function counterMaker() {
    const counter = document.querySelector("#counter")
    for (let i = 0; i < 100; i++) {
        counter.textContent = i;
    }
}, 1000);




setInterval(()=> {
const counter = document.querySelector("#counter")
    for (let i = 0; i < 100; i++) {
        counter.textContent = i;
    }
}, 1000);

