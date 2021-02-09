const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const save = document.getElementById('jsSave');

const CANVAS_SIZE = 700;
const INITIAL_COLOR = '#2c2c2c';

const HIGHLIGHT_COLOR_SIZE = '70px';
const HIGHLIGHT_COLOR_RADIUS = '35px';

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

Array.from(colors)[0].style.width = HIGHLIGHT_COLOR_SIZE;
Array.from(colors)[0].style.height = HIGHLIGHT_COLOR_SIZE;
Array.from(colors)[0].style.borderRadius = HIGHLIGHT_COLOR_RADIUS;

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

function onMouseDown(event) {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  } else startPainting();
}

//우클릭 메뉴 안뜨게
function handleCM(event) {
  event.preventDefault();
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('contextmenu', handleCM);
}

//색깔 변경
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;

  Array.from(colors).forEach((color) => {
    color.style.width = '50px';
    color.style.height = '50px';
    color.style.borderRadius = '25px';
  });
  event.target.style.width = HIGHLIGHT_COLOR_SIZE;
  event.target.style.height = HIGHLIGHT_COLOR_SIZE;
  event.target.style.borderRadius = HIGHLIGHT_COLOR_RADIUS;
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

//mode toggle
function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = 'PAINT';
  } else {
    filling = true;
    mode.innerText = 'FILL';
  }
}

if (mode) {
  mode.addEventListener('click', handleModeClick);
}

//image save
function handleSaveClick() {
  const image = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'PaintJS[🎨]';
  link.click();
}

if (save) {
  save.addEventListener('click', handleSaveClick);
}
