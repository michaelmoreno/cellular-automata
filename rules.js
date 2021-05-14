import { fire } from './main.js';

const activeRules = [];

const convertHTML = (bits) => {
  const converted = [];
  for (let i = 0; i < bits.length-1; i++) {
    converted[i] = bits[i].classList.contains('on') ? 1:0 
  }
  return converted;
}

const setRules = (state, inputs) => {
  activeRules.length = 0;
  if (state.contains('on')) {
    activeRules.push(convertHTML(box.children))
  }
}
const resetRules = () => {
  activeRules.length = 0;

  boxes.forEach(box => {
    let state = box.children[3].classList;
    if (state.contains('on')) {
      activeRules.push(convertHTML(box.children));
    }
  })
}

export const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  let state = box.children[3].classList;
  if (state.contains('on')) {
    activeRules.push(convertHTML(box.children))
  }
  
  box.addEventListener('click', () => {
    if (state.contains('on'))
      state.remove('on')
    else
      state.add('on')
    
    resetRules();
    fire();
  })
})


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
