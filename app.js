let canvas = document.getElementById("area");
let context = canvas.getContext("2d");
let box = 32;

function createArea(){
    context.fillStyle = "tan";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
createArea();