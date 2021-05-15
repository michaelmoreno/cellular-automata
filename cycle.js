// import { binaryToDecimal } from './rules.js' 
import { cycle } from './rules.js';

export const combinations = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 1, 1],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 1],
  [0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 1],
  [0, 0, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 1, 0, 1],
  [0, 0, 1, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 0, 1, 1],
  [0, 0, 1, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0, 1, 1, 0],
  [0, 0, 1, 1, 0, 1, 1, 1],
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 0, 1, 1],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 1],
  [0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1],
  [0, 1, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 1],
  [0, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 1],
  [0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1],
  [0, 1, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 1, 1, 0, 0, 1],
  [0, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 0, 1, 1],
  [0, 1, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 1],
  [0, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 1, 1],
  [0, 1, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 0, 1, 0, 1],
  [0, 1, 1, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 1, 1],
  [0, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 1],
  [0, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 0, 1, 1],
  [0, 1, 1, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 0, 1, 1],
  [0, 1, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1],
  [0, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 1],
  [0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 1],
  [0, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0],
  [1, 0, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 1, 1, 0],
  [1, 0, 0, 1, 0, 1, 1, 1],
  [1, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 1, 0, 1, 0],
  [1, 0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 0],
  [1, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 1, 1],
  [1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0],
  [1, 0, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 0, 0],
  [1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 1],
  [1, 1, 0, 0, 1, 1, 1, 0],
  [1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 1, 0, 0, 0, 0],
  [1, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 1, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 1, 0, 0],
  [1, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 0, 1, 1, 1, 1, 0],
  [1, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1, 0],
  [1, 1, 1, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 1, 0, 1],
  [1, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0],
  [1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 0, 0],
  [1, 1, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
]

// let errors = 0;
// for (let i = 0; i < combinations.length-1; i++) {
//   if (binaryToDecimal(combinations[i]) != binaryToDecimal(combinations[i+1])-1) {
//     errors++;
//     // console.log(binaryToDecimal(combinations[i]));
//     // console.log(binaryToDecimal(combinations[i+1]));
//     console.log(i);
//     console.log(combinations[i]);
//     console.log(combinations[i+1]);
//     console.log(' ');
//   }
// }
// console.log(`errors: ${errors}`);

const cycleButton = document.querySelector('#toggle');
cycleButton.addEventListener('click', () => {
  if (cycleButton.innerHTML == '▶') {
    cycleButton.innerHTML ='❚❚';
    cycle(true);
  }
  else {
    cycleButton.innerHTML ='▶';
    cycle(false);
  }

})