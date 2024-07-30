const videos = [
    "./Assets/videos/127475-743515470 (1).mp4",
    "./Assets/videos/81467-575185262_small.mp4",
    "./Assets/videos/81763-577427912.mp4"
]

let currentVideoIndex = 0;
const videoElement = document.getElementById('slideshow-video');

if(videoElement){
    console.log('video element found')

function playNextVideo(){
    currentVideoIndex = (currentVideoIndex + 1)% videos.length;
    console.log('play next video: ${videos[currentVideoIndex]}');
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
}

videoElement.addEventListener('ended', playNextVideo);

window.onload = function(){
    console.log('window loaded')
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
};
}else{
    console.error('video elemet not found')
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.numb');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% of the element must be visible to trigger the animation
    };

    const startCounting = (entry) => {
        const counter = entry.target;
        counter.innerText = '0';
        const target = +counter.getAttribute('data-target');
        const updateCounter = () => {
            const count = +counter.innerText;
            const increment = target / 200; // Change 200 to control speed
            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 10); // Change 10 to control speed
            } else {
                counter.innerText = `${target}`; // Ensure the final value is correct
            }
        };
        updateCounter();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry);
                observer.unobserve(entry.target); // Stop observing after the animation has started
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});