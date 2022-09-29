
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
    if (window.location.href.includes("https://www.1updog.com/")){
        window.location.href = `${(window.location.href).replace('https://www.1updog.com/', 'https://www.1updog.com/arcade.html')}`;
    }
    else {
        iframe = document.getElementsByClassName('iframe');
        iframe.src = "https://www.1updog.com/arcade.html"
    }
}