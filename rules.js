export const boxes = document.querySelectorAll('.box');

const activeRules = [];

const convertHTML = (bits) => {
  const converted = [];
  for (let i = 0; i < bits.length-1; i++) {
    converted[i] = bits[i].classList.contains('on') ? 1:0 
  }
  console.log(converted);
  return converted;
}

boxes.forEach(box => {
  if (box.children[3].classList.contains('on')) {
    activeRules.push(convertHTML(box.children))
  }
    
  box.addEventListener('click', () => {
    let state = box.children[3].classList;

    if (state.contains('on'))
      state.remove('on')
    else
      state.add('on')
  })
})

export function checkRules(neighborhood) {
}

console.log(activeRules);