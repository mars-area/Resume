// Dark Mode
const lightMode = document.querySelector(':root');
const lightModeButton = document.querySelector('.btn');

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
        sessionStorage.clickcount = 1;
        }
        if (sessionStorage.clickcount % 2 == 0) {
            lightMode.style.setProperty('--color-1', '#eeeeee');
            lightMode.style.setProperty('--color-2', '#222831');
            lightMode.style.setProperty('--color-4', '#f7f7f7');
        } else {
            lightMode.style.setProperty('--color-1', '#222831');
            lightMode.style.setProperty('--color-2', '#eeeeee');
            lightMode.style.setProperty('--color-4', '#393e46');
        }
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

// Animasi
const circle1 = document.querySelector('.c1');
const circle2 = document.querySelector('.c2');
const circle3 = document.querySelector('.c3');
