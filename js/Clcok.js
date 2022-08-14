timeBox = document.querySelector(".time");
GetTime();

function GetTime() {
    let time = new Date();
    let hours = String(time.getHours()).padStart(2, 0);
    let minutes = String(time.getMinutes()).padStart(2, 0);
    let seconds = String(time.getSeconds()).padStart(2, 0);
    timeBox.innerText = `${hours} : ${minutes} : ${seconds}`;
}
window.setInterval(GetTime, 1000);