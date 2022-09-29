// LIST OF IMAGES
imageList = [
    "./assets/images/mariobros-bg.jpg",
    "./assets/images/zelda-bg.jpg"
]

// ITERATE THROUGH LIST
imageList.forEach(image => {
    preload(image)
});

// PRELOAD IMAGE
function preload(url) {
    new Image().src = url;
}