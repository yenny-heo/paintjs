const range = document.getElementById('jsRange');

//브러쉬 크기 변경
function handleRangeChange(event) {
  lineWidth = event.target.value;
  ctx.lineWidth = lineWidth;
}

if (range) {
  range.addEventListener('input', handleRangeChange);
}
