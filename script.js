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
    console.error('video elemet not found');
}
