/*
Bug Smasher
Philip Laxamana
COMP 229
Centennial College
*/

// Create the canvas
var canvas = document.createElement("canvas");
var resetSpeedBtn = document.getElementById("resetSpeed");
var resetScoreBtn = document.getElementById("resetScore");
var ctx = canvas.getContext("2d");
canvas.width = 728;
canvas.height = 484;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/A4/leafbg.jpg";


// bug image
var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
	bugReady = true;
};
bugImage.src = "images/A4/ladybug.png";

// Game objects
var bug = {x: 0, y: 0};
var bugSmashed = 0;
var delay = 4000;

// Mouse Controls
canvas.onmousedown = handleMouseDown;

//Handle Mouse Clicks
function handleMouseDown(e)
{
    var mouseX = e.clientX - ctx.canvas.offsetLeft;
    var mouseY = e.clientY - ctx.canvas.offsetTop;

    if (mouseX >= bug.x && mouseX < bug.x + 256 && mouseY >= bug.y && mouseY <= bug.y + 256)
    {
        update();
        bugSmashed++;
        delay -= 200;
        then = Date.now();
    }

}


//Handle Reset speed button
resetSpeedBtn.addEventListener('click', function (e) {
    delay = 4000;

});

//Handle Reset score button
resetScoreBtn.addEventListener('click', function (e) {
    bugSmashed = 0;

});


// udpate location of bug
var update = function () {
    bug.x = Math.random() * (canvas.width - 256);
    bug.y = Math.random() * (canvas.height - 256);
}


// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (bugReady) {
		ctx.drawImage(bugImage, bug.x, bug.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Bugs smashed: " + bugSmashed, 32, 32);
};

// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;
    if (delta > delay) {
        update();
        then = now;
    }

	render();
	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
update();
var then = Date.now();
main();