const startingMinutes = 1 / 6;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
  // const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // countdownEl.innerHTML = `${minutes}: ${seconds}`;
  countdownEl.setAttribute("value", 'VỀ TRANG CHỦ (' + `${seconds}` + 's)');

  if (time !== 0) {
    time--;
  }
}
