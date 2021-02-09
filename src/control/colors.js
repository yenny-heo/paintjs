const colors = document.getElementsByClassName('jsColor');

Array.from(colors)[0].style.width = HIGHLIGHT_COLOR_SIZE;
Array.from(colors)[0].style.height = HIGHLIGHT_COLOR_SIZE;
Array.from(colors)[0].style.borderRadius = HIGHLIGHT_COLOR_RADIUS;

//색깔 변경
function handleColorClick(event) {
  color = event.target.style.backgroundColor;
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
