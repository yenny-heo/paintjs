let line = new Array();

function stopPainting() {
  painting = false;
}

function onMouseDown(event) {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  } else painting = true;
}

function onMouseMove(event) {
  if (!filling) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      line = [];
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
      line.push({ x, y });
    }
  }
}

function onMouseUp(event) {
  history.push({
    line,
    color: ctx.strokeStyle,
    filling,
  });
  console.log(history);
  painting = false;
}

//우클릭 메뉴 안뜨게
function handleCM(event) {
  event.preventDefault();
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('contextmenu', handleCM);
}