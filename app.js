const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

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

let painting = false;
let filling = false;

let history = new Array();
