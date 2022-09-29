
// INITIALIZE ELEMENTS
const text = document.getElementById('text');
let fade;

// RUN ON PAGELOAD
window.addEventListener("load", onPageLoad)

// TASKS
function onPageLoad(){
    fade = setTimeout(fade2black, 4000);
    arcade = setTimeout(loadArcade, 5500);
}

// LOAD FADE ANIMATION
function fade2black(){
    text.classList.add('fade')
}

// LOAD ARCADE PAGE
function loadArcade(){
    window.location.href = `${(window.location.href).replace('index.html', 'arcade.html')}`
}