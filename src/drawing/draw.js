let lines = new Array();

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
      lines = [];
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
      lines.push({ x, y });
    }
  }
}

function stopPainting(event) {
  if (lines.length > 0) {
    history.push({
      filling,
      lines,
      color: ctx.strokeStyle,
      lineWidth: ctx.lineWidth,
    });
  }
  if (history.length > 1) {
    buttonActive(undo);
  }
  painting = false;
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
