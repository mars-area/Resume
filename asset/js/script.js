// Dark Mode
const lightMode = document.querySelector(':root');
const lightModeButton = document.querySelector('.btn');
function lightColor() {
    lightMode.style.setProperty('--color-1', '#eeeeee');
    lightMode.style.setProperty('--color-2', '#222831');
    lightMode.style.setProperty('--color-4', '#f7f7f7');
}
function darkColor() {
    lightMode.style.setProperty('--color-1', '#222831');
    lightMode.style.setProperty('--color-2', '#eeeeee');
    lightMode.style.setProperty('--color-4', '#393e46');
}
lightModeButton.addEventListener('click', function(){
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
        sessionStorage.clickcount = 1;
        }
        if (sessionStorage.clickcount % 2 == 0) {
            lightColor();
        } else {
            darkColor();
        }
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
});