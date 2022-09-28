
// INITIALIZE SWIPER

let swiper = new Swiper('.blog-slider', {
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

//////////////////// KEYBOARD NAVIGATION - START ////////////////////////////////

$("body").keydown(function(e) {
    if(e.keyCode == 38) { // top
        swiper.slidePrev();
    }
    else if(e.keyCode == 40) { // bottom
        swiper.slideNext();
    }
});

//////////////////// KEYBOARD NAVIGATION - END /////////////////////////////////



//////////////////// DISABLE MOUSE SCROLL - START /////////////////////////////

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
let keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

disableScroll()

//////////////////// DISABLE MOUSE SCROLL - END /////////////////////////////


//////////////////// READ CURRENT SLIDE - START /////////////////////////////

// GET INIT SLIDE
console.log(`Initial Slide: ${swiper.realIndex}`);
changeBackground(swiper.realIndex);

// DETECT SLIDE CHANGES
swiper.on('transitionEnd', function() {
    console.log('Slide Changed To:', swiper.realIndex);
    changeBackground(swiper.realIndex)
});

//////////////////// READ CURRENT SLIDE - END //////////////////////////////


//////////////////// UPDATE BACKGROUND - START /////////////////////////////

function changeBackground(slideIndex) {
  // SUPER MARIO BROS
  if (slideIndex === 0) {
      document.body.style.backgroundImage = "url(./assets/images/marioworld1-bg.jpg)";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
  }
  // SPACE INVADERS
  if (slideIndex === 1) {
      document.body.style.backgroundImage = "url(./assets/images/spaceinvaders-bg.jpg)";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
  }
}

//////////////////// UPDATE BACKGROUND - END //////////////////////////////


