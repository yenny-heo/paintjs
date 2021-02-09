const range = document.getElementById('jsRange');

//브러쉬 크기 변경
function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
  console.log(ctx);
}

if (range) {
  range.addEventListener('input', handleRangeChange);
}
