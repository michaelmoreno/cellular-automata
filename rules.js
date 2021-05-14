
const activeRules = [];

const convertHTML = (bits) => {
  const converted = [];
  for (let i = 0; i < bits.length-1; i++) {
    converted[i] = bits[i].classList.contains('on') ? 1:0 
  }
  return converted;
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
  })
})

export function checkRules(neighborhood) {
  for (let i = 0; i < activeRules.length; i++) {
    // console.log(`n = ${neighborhood} aR = ${activeRules[i]}`);
    // console.log(activeRules);
    // console.log(` `);
    let pass = true;
    for (let n = 0; n < 3; n++) {
      // console.log(`${n} - ${neighborhood[n]} -------- ${activeRules[i][n]}`);
      if (neighborhood[n] != activeRules[i][n]) {
        pass = false;
        // console.log('fail!');
        break;
      }
    }
    if (pass) {
      return true;
    }
  }
}
