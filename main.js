import { boxes, checkRules } from './rules.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const sizer = () => [canvas.width, canvas.height] = [window.innerWidth, window.innerHeight];
sizer();
// window.addEventListener('resize', sizer);
const slider = document.querySelector('.slider');

let startX;
let startY;
let cellSize;
let xQuotient;
let yQuotient;
let init;
let steps;

function setup() {
  startX = 0;
  startY = 0;
  cellSize = parseInt(slider.value**2)
  xQuotient = Math.floor(canvas.width/cellSize);
  yQuotient = Math.floor(canvas.height/cellSize);
  init = new Array(xQuotient).fill(0);
  init[Math.floor(init.length/2)] = 1;
  steps = 0;
}

const drawCell = () => {
  ctx.beginPath();
  ctx.rect(startX, startY, cellSize, cellSize);
}

function timeStep(last) {
  let next = new Array(xQuotient).fill(0);
  for (let i = 0; i < last.length; i++) {
    drawCell();
    let leftNeighbor = last[i-1] != undefined ? last[i-1]:last[last.length-1];
    let rightNeighbor = last[i+1] != undefined ? last[i+1]:last[last[0]];
    let neighborhood = [leftNeighbor, last[i], rightNeighbor];
    
    if (checkRules(neighborhood)) {
      ctx.fill();
      next[i] = 1;
    }
    startX += cellSize;
  }
  startY += cellSize;
  startX = 0;
  
  steps++
  if (steps < yQuotient)
    timeStep(next);
}

export function fire() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setup();
  timeStep(init);
}
fire();


slider.addEventListener('input', () => {
  fire();
})











// let cells = [0,1,0,0,1,0,0,0,0];
// // for (let i = 0; i < 9; 1++) {
// //   cells.push 
// // }

// const length = canvas.width / cells.length;
// console.log(length);

// ctx.strokeStyle = 'black';
// ctx.fillStyle = 'black';
// let steps = 0;

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
//   steps++
//   requestAnimationFrame(render);
// }

// render();