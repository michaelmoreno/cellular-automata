import { fire } from './main.js';

function binaryToDecimal(byte) {
  let sum = 0;
  for (let i = 0, n = byte.length - 1; i < 8; i++, n--) {
    sum += byte[n] * 2 ** i;
  }
  document.querySelector('#code').innerHTML = sum;
  return sum;
}

const convertHTML = (bits) => {
  const converted = [];
  for (let i = 0; i < bits.length-1; i++) {
    converted[i] = bits[i].classList.contains('on') ? 1:0 
  }
  return converted;
}

const ruleCode = [];
const activeRules = [];

function resetRules() {
  ruleCode.length = 0;
  activeRules.length = 0;
  
  boxes.forEach(box => {
    let inputs = box.children;
    let output = box.children[3].classList;
    parseRule(inputs, output)
  })
  binaryToDecimal(ruleCode);
}

const parseRule = (inputs, output) => {
  ruleCode.push(output.contains('on') ? 1 : 0)
  if (output.contains('on'))
    activeRules.push(convertHTML(inputs))
}

const boxes = document.querySelectorAll('.box');
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