const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward = document.querySelector('#forward');
const $backward = document.querySelector('#backward');
const $progress = document.querySelector('#progress');

$play.addEventListener('click', handlePlay);
function handlePlay() {
  $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

$pause.addEventListener('click', handlePause);
function handlePause() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
}

$forward.addEventListener('click', handleForward);
function handleForward() {
  $video.currentTime += 10;
}

$backward.addEventListener('click', handleBackward);
function handleBackward() {
  $video.currentTime -= 10;
}

$video.addEventListener('loadedmetadata', handleLoaded);
function handleLoaded() {
  $progress.max = $video.duration;
}

$video.addEventListener('timeupdate', handleTimeUpdate);
function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  if ($video.currentTime === $video.duration) {
    $play.hidden = false;
    $pause.hidden = true;
  }
}

$progress.addEventListener('input', handleInput);
function handleInput() {
  $video.currentTime = $progress.value;
}