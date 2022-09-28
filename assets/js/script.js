var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
    invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});

// GET INIT SLIDE
console.log(`Initial Slide: ${swiper.realIndex}`);
changeBackground(swiper.realIndex);

// DETECT SLIDE CHANGES
swiper.on('transitionEnd', function() {
    console.log('Slide Changed To:', swiper.realIndex);
    changeBackground(swiper.realIndex)
});

function changeBackground(slideIndex) {
    if (slideIndex === 0) {
        document.body.style.background = "#dd0c04";
    }
    if (slideIndex === 1) {
        document.body.style.background = "#8067e5";
    }
}


