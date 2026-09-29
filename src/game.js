const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.width = 448;
canvas.height = 496;

function init() {
    draw('Ready!');
}

function draw(text) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FF0';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width/2, canvas.height/2);
}

init();