const player = document.getElementById('player');
const output = document.getElementById('output');
const container = document.getElementById('game-container');
let playerX = 0;
let playerY = 0;
const speed = 10; // Kecepatan pergerakan

function updatePlayerPosition() {
  player.style.left = playerX + 'px';
  player.style.top = playerY + 'px';
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      playerY -= speed;
      break;
    case 'ArrowDown':
      playerY += speed;
      break;
    case 'ArrowLeft':
      playerX -= speed;
      break;
    case 'ArrowRight':
      playerX += speed;
      break;
  }

  // Batasi pergerakan dalam area container
  playerX = Math.max(0, Math.min(playerX, container.clientWidth - player.clientWidth));
  playerY = Math.max(0, Math.min(playerY, container.clientHeight - player.clientHeight));

  updatePlayerPosition();
  output.textContent = `Posisi: X=${playerX}, Y=${playerY}`;
});

// Inisialisasi posisi awal
updatePlayerPosition();