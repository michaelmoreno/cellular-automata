import { currentRule, cycleRule } from './rules.js';
import { fire } from './main.js';

document.onkeydown = (e) => {
  const enter = e.which === 13;
  const ruleFocused = document.activeElement.id === 'rule'

  if (enter && ruleFocused) {
    e.preventDefault();
    let input = document.activeElement;
    let value = input.innerHTML;
    const isNum = /^\d+$/.test(value);
    const inRange = value > -1 && value < 256;
    const diff = value - currentRule;

    
    if (isNum & inRange)
      cycleRule(diff)
    else
      input.innerHTML = currentRule;
    stopCycle();
  }
}

export let cycle = false;
export const stopCycle = () => {
  cycle = false;
  cycleButton.innerHTML = '<i class="fas fa-play"></i>';
};

const cycleButton = document.querySelector('#toggle');
cycleButton.addEventListener('click', () => {
  if (cycleButton.innerHTML == '<i class="fas fa-play"></i>') {
    cycleButton.innerHTML = '<i class="fas fa-pause"></i>';
    cycle = true;
    cycleRule();
  }
  else {
    stopCycle()
  }
})

const forwardButton = document.querySelector('#forward');
forwardButton.addEventListener('click', () => {
  stopCycle();
  cycleRule();
})

const backwardButton = document.querySelector('#backward');
backwardButton.addEventListener('click', () => {
  stopCycle();
  cycleRule(-1);
})

const slider = document.querySelector('.slider');
slider.addEventListener('input', () => {
  fire();
})