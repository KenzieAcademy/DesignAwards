var boxtop = 200;
var boxleft = 200;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var box = document.getElementById("box");

// var boxX = x;
// var boxY = y;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



// document.addEventListener('keydown', (event) => {
//     const keyName = event.key;
//     alert('keydown event\n\n' + 'key: ' + keyName);
// });



function keyDownHandler(e) {
    if (e.keyCode == 39) {
        document.getElementById("box").style.left = boxleft + "px";
        boxleft += 10;
        rightPressed = true;
        console.log("right Pressed");
    } else if (e.keyCode == 37) {
        document.getElementById("box").style.left = boxleft + "px";
        leftPressed = true;
        boxleft += -10;
        console.log("left Pressed");
    } else if (e.keyCode == 38) {
        document.getElementById("box").style.top = boxtop + "px";
        boxtop += -10;
        upPressed = true;
        console.log("up Pressed");
    } else if (e.keyCode == 40) {
        document.getElementById("box").style.top = boxtop + "px";
        boxtop += 10
        downPressed = true;
        console.log("down Pressed");
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    } else if (e.keyCode == 38) {
        upPressed = false;
    } else if (e.keyCode == 40) {
        downPressed = false;
    }
}

