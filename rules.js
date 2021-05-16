import { fire } from './main.js';
import { combinations } from './cycle.js';

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

const updateRules = (i) => {
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
  for (let i = 0; i < 8; i++) {
    updateRules(i)
    updateUI(i)
  }
  fire();
}

const toggleState = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
      configuration[i] = configuration[i] ? 0 : 1;
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

let loop;
const cycleRules = (toggle) => {
  if (toggle) {
    loop = setInterval(function() {
      currentRule++;
      configuration = combinations[currentRule];
      update();
    }, 500)
  } else {
    clearInterval(loop)
  }
}

const cycleButton = document.querySelector('#toggle');
cycleButton.addEventListener('click', () => {
  if (cycleButton.innerHTML == '▶') {
    cycleButton.innerHTML = '❚❚';
    cycleRules(true);
  }
  else {
    cycleButton.innerHTML = '▶';
    cycleRules(false);
  }
})