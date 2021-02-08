const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

//색깔 변경
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColorClick),
);

//브러쉬 크기 변경

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

if (range) {
  range.addEventListener('input', handleRangeChange);
}

//mode
function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = 'FILL';
  } else {
    filling = true;
    mode.innerText = 'PAINT';
  }
}

if (mode) {
  mode.addEventListener('click', handleModeClick);
}
