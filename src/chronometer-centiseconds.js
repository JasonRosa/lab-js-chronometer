class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    if (printTimeCallback) printTimeCallback()
    }, 10);
  
  } 

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100 ) % 60;
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
   if (value < 10) {
    return `0${value}`;
   } else {
    return `${value}`;
   } 
  }

  stop() {
  clearInterval(this.intervalId);
  }

  reset() {
   this.currentTime = 0;
  }

  split() {
    let mm = this.computeTwoDigitNumber(this.getMinutes());
    let ss = this.computeTwoDigitNumber(this.getSeconds());
    let SS = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${mm}:${ss}.${SS}`
   }
  }
