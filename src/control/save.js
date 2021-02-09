const save = document.getElementById('jsSave');

//image save
function handleSaveClick() {
  const image = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'PaintJS[🎨]';
  link.click();
}

if (save) {
  save.addEventListener('click', handleSaveClick);
}
