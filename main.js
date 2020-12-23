canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
backgroundarray = ["mars.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
randomnumber = Math.floor(Math.random()*4);
var rover_width = 100 ;
var rover_height = 90 ;

rover_x = 10;
rover_y = 10;

background_image = backgroundarray[randomnumber];
rover_image = "rover.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    imgRoverTag = new Image();
    imgRoverTag.onload = uploadRover;
    imgRoverTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}
function uploadRover() {
    ctx.drawImage(imgRoverTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed=='38') {
        up();
        console.log("up");
    }
    if (keypressed=='40') {
        down();
        console.log("down");
    }
    if (keypressed=='37') {
        left();
        console.log("left");
    }
    if (keypressed=='39') {
        right();
        console.log("right");
    }
    if (keypressed=='80') {
        zoomin();
        console.log("zoom in");
    }
    if (keypressed=='77') {
        zoomout();
        console.log("zoom out");
    }

}
function up() {
    if (rover_y > 0) {
        rover_y = rover_y-10;
        console.log("The rovers X is = "+ rover_x +" and Y is = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if (rover_y < 500) {
        rover_y = rover_y+10;
        console.log("The rovers X is = "+ rover_x +" and Y is = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if (rover_x > 0) {
        rover_x = rover_x-10;
        console.log("The rovers X is = "+ rover_x +" and Y is = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if (rover_x < 700) {
        rover_x = rover_x+10;
        console.log("The rovers X is = "+ rover_x +" and Y is = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function zoomin() {
    rover_width = rover_width +10;
    rover_height = rover_height +10;
    uploadBackground();
    uploadRover();
}
function zoomout() {
    rover_width = rover_width -10;
    rover_height = rover_height -10;
    uploadBackground();
    uploadRover();
}

