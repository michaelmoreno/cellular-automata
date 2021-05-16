import { fire, stopCycle } from './main.js';
import { combinations } from './combinations.js';

const rules = [
  [1,1,1],
  [1,1,0],
  [1,0,1],
  [1,0,0],
  [0,1,1],
  [0,1,0],
  [0,0,1],
  [0,0,0],
]

const activeRules = [];
let currentRule = 30;
let configuration = combinations[currentRule];

export function binaryToDecimal(byte) {
  let sum = 0;
  for (let i = 0, n = byte.length - 1; i < 8; i++, n--) {
    sum += byte[n] * 2 ** i;
  }
  return sum;
}

const updateRule = (i) => {
  if (i == 0)
    activeRules.length = 0;

  if (configuration[i])
    activeRules.push(rules[i])

  if (i == 7)
    currentRule = binaryToDecimal(configuration);
}

const boxes = document.querySelectorAll('.box');
const ruleDisplay = document.querySelector('#rule');

const updateUI = (i) => { 
  let state = boxes[i].children[3].classList;
  
  if (configuration[i])
    state.add('on')
  else
    state.remove('on');

  ruleDisplay.innerHTML = currentRule;
}

function update() {
  console.log(`update`);
  for (let i = 0; i < 8; i++) {
    updateRule(i)
    updateUI(i)
  }
  fire();
}

const toggleState = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
      configuration[i] = configuration[i] ? 0 : 1;
      stopCycle()
      update();
    });
  }
}

window.onload = function() {
  update();
  toggleState();
};

export function checkRules(neighborhood) {
  for (let i = 0; i < activeRules.length; i++) {
    let pass = true;
    for (let n = 0; n < 3; n++) {
      if (neighborhood[n] != activeRules[i][n]) {
        pass = false;
        break;
      }
    }
    if (pass) {
      return true;
    }
  }
}

export const cycleRule = () => {
  currentRule++;
  if (currentRule > 255)
    currentRule = 0;

  configuration = combinations[currentRule];
  update();
}