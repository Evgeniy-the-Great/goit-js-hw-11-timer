const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

const targetDate = new Date('2022-01-22').getTime();

function num(i) {
  return String(i).padStart(2, 0);
}


function timeLeft() {
  const now = Date.now();
  const time = targetDate - now;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  refs.days.textContent = days;
  refs.hours.textContent = num(hours);
  refs.mins.textContent = num(mins);
  refs.secs.textContent = num(secs);
}
timeLeft();

const id = setInterval(timeLeft, 1000);
