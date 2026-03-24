const videoEl = document.getElementById("main-video");
const player = document.querySelector(".player");

function playVideo(videoUrl) {
  videoEl.src = videoUrl;
  player.classList.remove("hidden");
}

function closePlayer() {
  videoEl.pause();
  player.classList.add("hidden");
}