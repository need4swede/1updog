// LIST OF IMAGES
imageList = [
    "./assets/images/marioworld1-bg.jpg",
    "./assets/images/spaceinvaders-bg.jpg"
]

// ITERATE THROUGH LIST
imageList.forEach(image => {
    preload(image)
});

// PRELOAD IMAGE
function preload(url) {
    new Image().src = url;
}