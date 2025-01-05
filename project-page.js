let currentSlide = 0;
let autoRotateInterval;
const slides= document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const rotateDelay = 5000;
const arrowCooldown = 1000;

function startAutoRotation(){

    if(autoRotateInterval) {
        clearInterval(autoRotateInterval);
    }

    autoRotateInterval = setInterval(async () => {
        await waitForVideoToFinish();
        moveSlide(1);
        console.log("Slide shift.")
    }, rotateDelay);
}

function stopAutoRotation(){
    clearInterval(autoRotateInterval);
}


function moveSlide(direction) {
    const currentVideo = slides[currentSlide].querySelector('video');
    if(currentVideo) {
        currentVideo.pause();
    }
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides){
        currentSlide = 0;
    }

    updateCarousel();

    const newVideo = slides[currentSlide].querySelector('video');
    if(newVideo) {
        newVideo.play();
    }
}

function updateCarousel(){
    const carousel = document.querySelector('#carousel');
    const offset = -currentSlide * 100;
    carousel.style.transform = `translate(${offset}%)`;

    startAutoRotation();
}

// Event listener for arrow buttons
document.querySelector('.prev').addEventListener('click', () => {
    stopAutoRotation();
    moveSlide(-1);
    setTimeout(startAutoRotation, arrowCooldown); // Resume auto-rotation after a brief delay
});

document.querySelector('.next').addEventListener('click', () => {
    stopAutoRotation();
    moveSlide(1);
    setTimeout(startAutoRotation, arrowCooldown); // Resume auto-rotation after a brief delay
});

// Function to start the auto-rotation on page load
window.addEventListener('load', () => {
    startAutoRotation();
});

async function waitForVideoToFinish(){
    const video = slides[currentSlide].querySelector('video');

    if(video) {
        return new Promise((resolve) => {
            video.onended = resolve; //Reolve the promise once the video has ended
        });
    } else {
        return Promise.resolve();
    }
}