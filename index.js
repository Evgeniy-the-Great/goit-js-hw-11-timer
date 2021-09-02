const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

const targetDate = new Date('2021-08-03').getTime();

function num(i) {
  return String(i).padStart(2, 0);
}

let selector = null;


class CountdownTimer {
  timeLeft() {
    selector = setInterval(() => {
      const now = Date.now();
      const deltaTime = targetDate - now;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
  
      refs.days.textContent = days;
      refs.hours.textContent = num(hours);
      refs.mins.textContent = num(mins);
      refs.secs.textContent = num(secs);
    }, 1000);
    
    if (targetDate <= Date.now()) {
      clearInterval(selector);
      refs.days.textContent = '00';
      refs.hours.textContent = '00';
      refs.mins.textContent = '00';
      refs.secs.textContent = '00';
    }
  }
}

const timer = new CountdownTimer();
// const timeLeft();

function getTimeComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, secs };
}
