import { boxes } from './rules.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// canvas.style.backgroundColor = 'black';
const sizer = () => [canvas.width, canvas.height] = [window.innerWidth, window.innerHeight];
sizer();
// window.addEventListener('resize', sizer);

let startX = 0, startY = 0;
let size = 50;
let xQuotient = Math.floor(canvas.width/size);
let yQuotient = Math.floor(canvas.height/size);
const n = xQuotient;
const init = new Array(n).fill(0);
init[Math.round(init.length/2)] = 1;
let count = 0;

const drawCell = () => {
  ctx.beginPath();
  ctx.rect(startX, startY, size, size);
  // ctx.stroke();
}


console.log(`init: ${init} ${init.length}`);
function timeStep (last) {
  let next = new Array(n).fill(0);
  for (let i = 0; i < last.length; i++) {
    let leftNeighbor = last[i-1] != undefined ? last[i-1]:last[last.length-1];
    let rightNeighbor = last[i+1] != undefined ? last[i+1]:last[last[0]];
    drawCell();
    if (!(leftNeighbor == rightNeighbor)) {
      ctx.fill();
      next[i] = 1;
      // next[i+1] = 1;
    }
    startX += size;
  }
  // console.log(`next: ${next} ${next.length}`);
  
  
  count++
  startY += size;
  startX = 0;
  if (count < yQuotient)
    timeStep(next);
}

timeStep(init);














// let cells = [0,1,0,0,1,0,0,0,0];
// // for (let i = 0; i < 9; 1++) {
// //   cells.push 
// // }

// const length = canvas.width / cells.length;
// console.log(length);

// ctx.strokeStyle = 'black';
// ctx.fillStyle = 'black';
// let count = 0;

// let startX = 0;
// let startY = 0;
// function render() {
//   // ctx.clearRect(0, 0, canvas.width, canvas.height);
//   startX = 0;
//   var copy = cells;
//   console.log(copy);
//   for (let i = 0; i < cells.length; i++) {
//     ctx.beginPath();
//     ctx.rect(startX, startY, length, 30);
//     ctx.closePath();
//     ctx.stroke();
//       if (!(cells[i-1] == cells[i+1])) {
//         ctx.fill();
//         copy[i] = 1;
//       } else {
//         copy[i] = 0
//       }
//       startX += length;
//     }
//     cells = copy;
//   startY += 30;
//   count++
//   requestAnimationFrame(render);
// }

// render();