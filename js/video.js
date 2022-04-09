const player = document.querySelector('.video-player');
const wrapper = document.querySelector('.video-wrapper');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const volume = player.querySelector('.volume');
const volumeIcon = player.querySelector('.volume-icon');
const toggle = player.querySelector('.play');
const playBtn = player.querySelector('.play-btn');
const fullscreen = player.querySelector('.fullscreen');
const videoDots = document.querySelectorAll('.dots li');
const videoPrev = document.querySelector('.video-prev');
const videoNext = document.querySelector('.video-next');
let videoNum = 0;

function updateVideo(num) {
  video.currentTime = 0;
  video.src = `assets/video/video${videoNum}.mp4`;
  video.poster = `assets/video/poster${videoNum}.jpg`;
  video.pause();
  toggle.classList.remove('pause');
  playBtn.style.display = 'block';
}

videoDots.forEach((el, index) => el.addEventListener('click', function(event) {
	if(el === event.target) {
		videoNum = index;
    updateVideo(videoNum);
	}
}));

function getVideoNum(num) {
  if(videoNum + num < 0) {
    videoNum = 4;
  } else if(videoNum + num > 4) {
    videoNum = 0;
  } else {
    videoNum = videoNum + num;
  }
  updateVideo(videoNum);
}
videoPrev.addEventListener('click', () => getVideoNum(-1));
videoNext.addEventListener('click', () => getVideoNum(1));

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function toggleMute() {
  if(video.muted) {
    video.muted = false;
    volumeIcon.classList.remove('mute');
  } else {
    video.muted = true;
    volumeIcon.classList.add('mute');
  }
}
volumeIcon.addEventListener('click', toggleMute);

function updateButton() {
  if(this.paused) {
    toggle.classList.remove('pause');
    playBtn.style.display = 'block';
  } else {
    toggle.classList.add('pause');
    playBtn.style.display = 'none';
  }
}

function inputRange(input) {
  const value = input.value;  
  input.style.background = `linear-gradient(to right, #21C8FF 0%, #21C8FF ${value}%, #C8C8C8 ${value}%, #C8C8C8 100%)`;
}
progress.addEventListener('input', () => inputRange(progress));
volume.addEventListener('input', () => inputRange(volume));


function changeVolume() {
	video.volume = this.value / 100;  
  if(video.volume <= 0.01) {
    video.muted = true;
    volumeIcon.classList.add('mute');
  } else {
    video.muted = false;
    volumeIcon.classList.remove('mute');
  }
}
volume.addEventListener('input', changeVolume);

function changeProgress() {
	video.currentTime = this.value / 100 * video.duration;
  if(video.currentTime < video.duration) {
    video.play();
  }
}
progress.addEventListener('input', changeProgress);

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100 || 0;
  progress.value = percent;
  inputRange(progress);
}

function toggleFullScreen() {
  if(document.fullscreenElement) {
    document.exitFullscreen();
    wrapper.classList.remove('fullscreen');
    video.classList.remove('fullscreen');
  } else {
    player.requestFullscreen();
    wrapper.classList.add('fullscreen');
    video.classList.add('fullscreen');
  } 
}



fullscreen.addEventListener('click', toggleFullScreen);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton); 
video.addEventListener('timeupdate', handleProgress);
playBtn.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);