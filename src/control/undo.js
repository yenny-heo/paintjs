const undo = document.getElementById('undo');

function handleUndoClick(event) {
  if (history.length > 1) {
    history.pop();
    history.forEach((one) => {
      if (one.filling) {
        ctx.fillStyle = one.color;
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      } else {
        ctx.strokeStyle = one.color;
        ctx.lineWidth = one.lineWidth;
        ctx.beginPath();
        ctx.moveTo(one.lines[0].x, one.lines[0].y);
        one.lines.forEach((line) => {
          ctx.lineTo(line.x, line.y);
          ctx.stroke();
        });
      }
    });
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
  }
}

if (undo) {
  undo.addEventListener('click', handleUndoClick);
}
