const canv = document.getElementById("particlesCanvas");
const ctx = canv.getContext("2d");

const radius = 50;
const rSquared = radius*radius;

const cellSize = 5;
const squareSize = 1;

ctx.fillStyle = "black";

for (let deltaX = -radius; deltaX <= radius; deltaX += cellSize) {
    for (let deltaY = -radius; deltaY <= radius; deltaY += cellSize) {
       if(deltaX*deltaX + deltaY*deltaY > rSquared) continue; 

        let x = canv.width / 2 + deltaX;
        let y = canv.height / 2 + deltaY;
        ctx.fillRect(x + cellSize*(1-squareSize), y + cellSize*(1-squareSize), cellSize*(2*squareSize-1), cellSize*(2*squareSize-1));
    }
}