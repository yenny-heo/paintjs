const undo = document.getElementById('undo');

buttonDisabled = (id) => {
  id.style.color = 'rgba(0, 0, 0, 0.3)';
  id.style.transform = 'none';
  id.style.cursor = 'not-allowed';
};

buttonActive = (id) => {
  id.style.color = 'rgba(0, 0, 0, 0.8)';
  id.style.transform = 'scale(0.98)';
  id.style.cursor = 'pointer';
};

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
        if (one.lines.length > 0) {
          ctx.moveTo(one.lines[0].x, one.lines[0].y);
          one.lines.forEach((line) => {
            ctx.lineTo(line.x, line.y);
            ctx.stroke();
          });
        }
      }
    });
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
    if (history.length <= 1) {
      buttonDisabled(undo);
    }
  }
}

if (undo) {
  undo.addEventListener('click', handleUndoClick);
  if (history.length <= 1) {
    buttonDisabled(undo);
  }
}
