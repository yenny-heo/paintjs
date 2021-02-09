const mode = document.getElementById('jsMode');

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
