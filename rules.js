import { fire } from './main.js';
import { combinations } from './cycle.js';
const ruleCode = [];
const activeRules = [];

const boxes = document.querySelectorAll('.box');

let currentRule = 30;
let configuration = combinations[currentRule];

const convertHTML = (bits) => {
  const converted = [];
  for (let i = 0; i < bits.length - 1; i++) {
    converted[i] = bits[i].classList.contains('on') ? 1 : 0
  }
  return converted;
}


const parseRule = (inputs, output) => {
  ruleCode.push(output.contains('on') ? 1 : 0)
  if (output.contains('on'))
    activeRules.push(convertHTML(inputs))
}

let loop;
export const cycle = (toggle) => {
  if (toggle) {
    loop = setInterval(function() {
      currentRule++;
      configuration = combinations[currentRule]
      updateUI(configuration);
      resetRules();
      fire();
    }, 500)
  }
  else {
    clearInterval(loop);
  }
}

const updateUI = (configuration) => { // maybe don't need to pass config as param
  for (let i = 0; i < boxes.length; i++) {
    let state = boxes[i].children[3].classList;

    if (configuration[i])
      state.add('on')
    else
      state.remove('on');
  }
}

updateUI(configuration);

export function binaryToDecimal(byte) {
  let sum = 0;
  for (let i = 0, n = byte.length - 1; i < 8; i++, n--) {
    sum += byte[n] * 2 ** i;
  }
  document.querySelector('#code').innerHTML = sum;
  return sum;
}

function resetRules() {
  ruleCode.length = 0;
  activeRules.length = 0;
  
  boxes.forEach(box => {
    let inputs = box.children;
    let output = box.children[3].classList;
    parseRule(inputs, output)
  })
  currentRule = binaryToDecimal(ruleCode);
}


boxes.forEach(box => {
  let inputs = box.children;
  let output = box.children[3].classList;

  parseRule(inputs, output)
  
  box.addEventListener('click', () => {
    if (output.contains('on'))
    output.remove('on')
    else
    output.add('on')
    
    resetRules();
    fire();
  })
})
binaryToDecimal(ruleCode); 


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

