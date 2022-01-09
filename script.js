const container = document.querySelector('.container');

const unsplashUrl = 'https://source.unsplash.com/random/';

const rows = 10;

for (let i = 0; i < rows * 4; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashUrl}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`;
}

function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}
