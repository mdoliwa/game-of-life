var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const columns = 16, rows = columns * 2;
var cellWidth = Math.round(Math.min(window.innerWidth / columns, window.innerHeight / rows)) - 1;

canvas.height = cellWidth * rows;
canvas.width = cellWidth * columns;

console.log("cellWidth: ", cellWidth);

drawGrid();
drawSingleGrid();
drawMenu();


function drawGrid() {
  const prevStrokeStyle = ctx.strokeStyle;

  ctx.strokeStyle = '#e2e8f0';

  for (var i = 0; i < columns + 1; i++) {
    ctx.beginPath();
    ctx.moveTo(i * cellWidth, 0);
    ctx.lineTo(i * cellWidth, rows * cellWidth);
    ctx.stroke();
		ctx.closePath();
  }

  for (var j = 0; j < rows + 1; j++) {
    ctx.beginPath();
    ctx.moveTo(0, j * cellWidth);
    ctx.lineTo(columns * cellWidth, j * cellWidth);
    ctx.stroke();
		ctx.closePath();
  }

  ctx.strokeStyle = prevStrokeStyle;
}

function drawSingleGrid() {
  const prevStrokeStyle = ctx.strokeStyle;

  ctx.strokeStyle = '#a0aec0';

	for (var i = 0; i < columns + 1; i++) {
		ctx.beginPath();
		ctx.moveTo(i * cellWidth, 0);
		ctx.lineTo(i * cellWidth, rows / 2 * cellWidth);
		ctx.stroke();
		ctx.closePath();
	}

	for (var j = 0; j < rows / 2 + 1; j++) {
		ctx.beginPath();
		ctx.moveTo(0, j * cellWidth);
		ctx.lineTo(columns * cellWidth, j * cellWidth);
		ctx.stroke();
		ctx.closePath();
	}

  ctx.strokeStyle = prevStrokeStyle;
}

function drawMenu() {
	var menu = document.getElementById("menu");

	menu.style.top = '0px'; //canvas.height / 4 - menu.offsetHeight / 2 + 'px';
	menu.style.left = '0px'; //canvas.width / 2 - menu.offsetWidth / 2 + 'px';
	menu.style.width = canvas.width + 'px';
	menu.style.height = cellWidth * rows + 'px'
}



