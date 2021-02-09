const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

let history = new Array();

let painting = false;
let filling = false;

const CANVAS_SIZE = 700;
const INITIAL_COLOR = '#2c2c2c';

const HIGHLIGHT_COLOR_SIZE = '70px';
const HIGHLIGHT_COLOR_RADIUS = '35px';

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
history.push({
  filling: true,
  color: ctx.fillStyle,
});

let color = INITIAL_COLOR;
let lineWidth = 5.0;

ctx.strokeStyle = color;
ctx.fillStyle = color;
ctx.lineWidth = lineWidth;
