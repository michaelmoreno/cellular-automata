import { checkRules } from './rules.js';
import { cycleRule } from './rules.js';
import { cycle } from './interface.js';

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
  ctx.clearRect(0, startY, canvas.width, cellSize);

  let next = new Array(xQuotient).fill(0);
  for (let i = 0; i < last.length; i++) {
    drawCell();
    let leftNeighbor = last[i - 1] != undefined ? last[i - 1] : last[last.length - 1];
    let rightNeighbor = last[i + 1] != undefined ? last[i + 1] : last[last[0]];
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
  return next;
}

function render() {
  init = timeStep(init)
  if (steps <= yQuotient)
    requestAnimationFrame(render)
    
  else if (cycle)
    cycleRule()
}

export function fire() {
  cancelAnimationFrame(render)
  setup();
  render();
}