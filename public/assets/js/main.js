
// setting up canvas and constants
const rows = 25;
const columns = 25;
const cell_size = 20; // 20x20 grid

const c = document.querySelector('canvas');
const c_i = document.querySelector('#cell-index');
const ctx = c.getContext('2d');

var mouse = { x: undefined, y: undefined, isClicked: false };
var grid, swatch;

const def_color_array = ["#FF2424", "#FFE924", "#3BC10C", "#24A3FF", "#7724FF", "#000000"];

/// MOUSE INPUT SECTION
c.addEventListener("mousemove", (e) => {
	// mouse_coordinate - element_position_offset - border_width
	var windowW = window.innerWidth;
	var windowH = window.innerHeight;
	mouse.x = e.clientX - (windowW - 1244) / 2 - c.offsetLeft - 7;
	mouse.y = e.clientY - (windowH - 752) / 2 - 172 - 7 - 8;
});
c.addEventListener("mousedown", (e) => mouse.isClicked = true);
c.addEventListener("mouseup", (e) => mouse.isClicked = false);
/// MOUSE INPUT SECTION

// Initialization
function init() {
	grid = new Grid(rows, columns, cell_size);
	swatch = new Swatch(def_color_array);
	swatch.setSwatchView();

	// setup code here
	animate();
}

// animation loop
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, rows * cell_size, columns * cell_size);
	grid.update(mouse, ctx)
}


function clear() {
	grid = new Grid(rows, columns, cell_size);
	ctx.clearRect(0, 0, rows * cell_size, columns * cell_size);
	grid.clear(ctx)
}

init();

function displayCellIndex(x, y) {
	c_i.innerHTML = x + ", " + y;
}