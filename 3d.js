import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const backgroundColor = 0xffffff; // Set the background color
scene.background = new THREE.Color(backgroundColor);


function createSquareGrid(numCellsX, numCellsY, cellSize, color = 0xffffff) {
    const lines = [];

    const halfWidth = (numCellsX * cellSize) / 2;
    const halfHeight = (numCellsY * cellSize) / 2;

    // Create the grid's vertical lines
    for (let x = -halfWidth; x <= halfWidth; x += cellSize) {
        lines.push(
            new THREE.Vector3(x, 0, -halfHeight),
            new THREE.Vector3(x, 0, halfHeight)
        );
    }
    // Create the grid's horizontal lines
    for (let z = -halfHeight; z <= halfHeight; z += cellSize) {
        lines.push(
            new THREE.Vector3(-halfWidth, 0, z),
            new THREE.Vector3(halfWidth, 0, z)
        );
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(lines);
    const material = new THREE.LineBasicMaterial({ color });
    const grid = new THREE.LineSegments(geometry, material);
    return grid;
}

const NUM_CELLS_X = 50;
const NUM_CELLS_Y = 10;
const CELL_SIZE = 5;
const GRID_WIDTH = NUM_CELLS_X * CELL_SIZE;
const GRID_HEIGHT = NUM_CELLS_Y * CELL_SIZE;
const HALF_GRID_WIDTH = GRID_WIDTH / 2;
const HALF_GRID_HEIGHT = GRID_HEIGHT / 2;
const GRID_COLOUR = 0xdddddd;

const top_grid1 = createSquareGrid(NUM_CELLS_X, NUM_CELLS_Y, CELL_SIZE, GRID_COLOUR);
const top_grid2 = createSquareGrid(NUM_CELLS_X, NUM_CELLS_Y, CELL_SIZE, GRID_COLOUR);
const bot_grid1 = createSquareGrid(NUM_CELLS_X, NUM_CELLS_Y, CELL_SIZE, GRID_COLOUR);
const bot_grid2 = createSquareGrid(NUM_CELLS_X, NUM_CELLS_Y, CELL_SIZE, GRID_COLOUR);

top_grid1.position.set(HALF_GRID_WIDTH, 15, -40);
top_grid2.position.set(-HALF_GRID_WIDTH, 15, -40);

bot_grid1.position.set(HALF_GRID_WIDTH, -15, -40);
bot_grid2.position.set(-HALF_GRID_WIDTH, -15, -40);

top_grid1.rotation.x = Math.PI;
top_grid2.rotation.x = Math.PI;
bot_grid1.rotation.x = Math.PI;
bot_grid2.rotation.x = Math.PI;

scene.add(top_grid1, top_grid2, bot_grid1, bot_grid2);

function animate() {
    requestAnimationFrame(animate);
  
    // scroll both grids to the left
    const speed = 0.005;
    top_grid1.position.x -= speed;
    top_grid2.position.x -= speed;
    bot_grid1.position.x -= speed;
    bot_grid2.position.x -= speed;

    if (top_grid1.position.x <= -GRID_WIDTH) {
        top_grid1.position.x = GRID_WIDTH; // reset position of grid1
    }
    if (top_grid2.position.x <= -GRID_WIDTH) {
        top_grid2.position.x = GRID_WIDTH; // reset position of grid2
    }
    if (bot_grid1.position.x <= -GRID_WIDTH) {
        bot_grid1.position.x = GRID_WIDTH; // reset position of bot_grid1
    }
    if (bot_grid2.position.x <= -GRID_WIDTH) {
        bot_grid2.position.x = GRID_WIDTH; // reset position of bot_grid2
    }

    renderer.render(scene, camera);
}

animate();

window.addEventListener('scroll', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('orientationchange', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});