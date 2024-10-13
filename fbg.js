// Get the video element and control elements
const video = document.getElementById('my-video');
const playPauseButton = document.getElementById('play-pause');
const volumeBar = document.getElementById('volume-bar');
const muteButton = document.getElementById('mute');
const timeDisplay = document.getElementById('time-display');

// Play/Pause functionality
playPauseButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Update time display as the video plays
video.addEventListener('timeupdate', function() {
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}`;
});

// Volume control
volumeBar.addEventListener('input', function() {
    video.volume = volumeBar.value;
});

// Mute/Unmute functionality
muteButton.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        video.muted = true;
        muteButton.textContent = 'Unmute';
    }
});
