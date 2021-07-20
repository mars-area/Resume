// // Dark Mode
// const lightMode = document.querySelector(':root');
// const lightModeButton = document.querySelector('.btn');

// // light mode fucntion
// function lightColor() {
//     lightMode.style.setProperty('--color-1', '#eeeeee');
//     lightMode.style.setProperty('--color-2', '#222831');
//     lightMode.style.setProperty('--color-4', '#f7f7f7');
//     lightModeButton.innerHTML = 'Dark Mode';
// };

// // dark mode function
// function darkColor() {
//     lightMode.style.setProperty('--color-1', '#222831');
//     lightMode.style.setProperty('--color-2', '#eeeeee');
//     lightMode.style.setProperty('--color-4', '#393e46');
//     lightModeButton.innerHTML = 'Light Mode';
// };

// // monitoring light/dark mode button
// lightModeButton.addEventListener('click', function(){
//     if (typeof(Storage) !== "undefined") {
//         if (sessionStorage.clickcount) {
//             sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
//         } else {
//         sessionStorage.clickcount = 1;
//         }
//         updateTampilan();
//     } else {
//       document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//     }
// });

// // function to update page
// function updateTampilan() {
//     // jika nilai dari sessionStorage genap tampilkan light, jika nilai ganjil tampilkan dark
//     if (sessionStorage.clickcount % 2 == 0) {
//         darkColor();
//     } else if (sessionStorage.clickcount === undefined) {
//         darkColor();
//     } else if (sessionStorage.clickcount % 2 !== 0) {
//         lightColor();
//     }
//     console.log(sessionStorage.clickcount);
// };
// updateTampilan();
// // Dark Mode end

const hamburgerBtn = document.querySelector('.hamburger__box');
const hamburgerBox = document.querySelector('.hamburger__line__box');
const navItem = document.querySelector('.navbar__items');
hamburgerBtn.addEventListener('click', function() {
    // sisipkan kelas show ketika tombol hamburger di klik
    navItem.classList.toggle('show');
    // sisipkan kelas length ketika tombol hamburger di klik
    for(let line of hamburgerBox.children) {
        line.classList.toggle('length');
    }
});
hamburgerBtn.addEventListener('mouseover', function() {
    // sisipkan kelas length ketika tombol hamburger di mouseover
    for(let line of hamburgerBox.children) {
        line.classList.toggle('length');
    }
});
hamburgerBtn.addEventListener('mouseout', function() {
    for(let line of hamburgerBox.children) {
        line.classList.toggle('length');
    }
});