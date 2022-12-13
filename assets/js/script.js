const container = document.querySelector('.container');
const pacman = document.querySelector('.pacman');

let y = 0;
let x = 0;

function moveDown() {
  y = y + 10;
  pacman.style.top = y + 'px';
}

function moveUp() {
  y = y - 10;
  pacman.style.top = y + 'px';
}

function moveLeft() {
  x = x - 10;
  pacman.style.left = x + 'px';
}

function moveRight() {
  x = x + 10;
  pacman.style.left = x + 'px';
}

function move(event) {
  if (event.keyCode === 38) {
    moveUp();
  } else if (event.keyCode === 40) {
    moveDown();
  } else if (event.keyCode === 37) {
    moveLeft();
  } else if (event.keyCode === 39) {
    moveRight();
  }
}

document.addEventListener('keydown', move);
