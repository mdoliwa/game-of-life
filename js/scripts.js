var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const columns = 16, rows = columns * 2;
console.log("document: ", document.documentElement.clientWidth, ' x ', document.documentElement.clientHeight);
console.log("window: ", window.innerWidth, ' x ', window.innerHeight);
console.log("body: ", document.body.clientWidth, ' x ', document.body.clientHeight);
var cellWidth = Math.round(Math.min(window.innerWidth / columns, window.innerHeight / rows));

console.log("width: ", cellWidth * rows, "height: ", cellWidth * columns);

canvas.height = cellWidth * rows;
canvas.width = cellWidth * columns;

console.log("cellWidth: ", cellWidth);

drawGrid();


function drawGrid() {
  const prevStrokeStyle = ctx.strokeStyle;

  ctx.strokeStyle = '#cbd5e0';

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



