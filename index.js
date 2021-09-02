
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;

    this.days = this.selector.querySelector('[data-value="days"]'); 
    this.hours = this.selector.querySelector('[data-value="hours"]'); 
    this.mins = this.selector.querySelector('[data-value="mins"]'); 
    this.secs = this.selector.querySelector('[data-value="secs"]');
    
    this.id = null;
  }

  num(i) {
  return String(i).padStart(2, 0);
  }

  getTimeComponents(time) {
  const days = this.num(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.num(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.num(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.num(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
  }
  
  data(deltaTime){
    const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }

  timeLeft() {
    let  id = setInterval(() => {
      const now = Date.now();
      const deltaTime = this.targetDate - now;
      this.data(deltaTime);
    }, 1000);

    if (this.targetDate <= Date.now()) {
      clearInterval(id);
      this.days.textContent = '00';
      this.hours.textContent = '00';
      this.mins.textContent = '00';
      this.secs.textContent = '00';
    }
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});;
timer.timeLeft();
