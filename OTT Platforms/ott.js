// Sample movie data
const movies = {
    trending: [
        { title: 'Movie 1', poster: 'Poster1.jpg' },
        { title: 'Movie 2', poster: 'Poster2.jpg' },
        { title: 'Movie 3', poster: 'Poster3.jpg' },
        { title: 'Movie 4', poster: 'Poster4.jpg' },
        { title: 'Movie 5', poster: 'Poster5.webp'},
    // Add 10+ more
    ],
    originals: [
        { title: 'Original 1', poster: 'Poster1.jpg' },
        { title: 'Original 2', poster: 'Poster2.jpg' },
        { title: 'Original 3', poster: 'Poster4.jpg' },
        // Add more
    ]
};

// Populate carousels
function populateCarousel(id, data) {
    const container = document.getElementById(id);
    data.forEach(movie => {
        const poster = document.createElement('img');
        poster.src = movie.poster;
        poster.alt = movie.title;
        poster.className = 'poster';
        poster.onclick = () => alert(`Play ${movie.title}`);
        container.appendChild(poster);
    });
}

populateCarousel('trending', movies.trending);
populateCarousel('originals', movies.originals);

// Carousel scroll functions
function scrollLeft(id) {
    document.getElementById(id).scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(id) {
    document.getElementById(id).scrollBy({ left: 300, behavior: 'smooth' });
}

// Dropdown toggle
document.querySelector('.dropbtn').onclick = (e) => {
    e.stopPropagation();
    document.querySelector('.dropdown-content').classList.toggle('show');
};
const video = document.getElementById('player');
const playPauseBtn = document.getElementById('playPause');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const timeDisplay = document.getElementById('time');

playPauseBtn.addEventListener('click', () => {
  if (video.paused) { video.play(); playPauseBtn.textContent = 'Pause'; } 
  else { video.pause(); playPauseBtn.textContent = 'Play'; }
});

video.addEventListener('timeupdate', () => {
  const pct = (video.currentTime / video.duration) * 100;
  progress.style.width = pct + '%';
  timeDisplay.textContent = formatTime(video.currentTime) + ' / ' + formatTime(video.duration);
});

progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  video.currentTime = pct * video.duration;
});

function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return mins + ':' + secs;
}

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