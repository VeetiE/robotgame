let BG;
let BG1;
let BG2;
let BG3;
let robotpicture;
let paddle_width = 80;
let paddle_height = 30;
var robotlist = [];


function preload() {
    BG = loadImage("images/trees1.png")
    BG1 = loadImage("images/trees2.png")
    BG2 = loadImage("images/trees3.png")
    BG3 = loadImage("images/trees4.png")
    robotpicture = loadImage("images/robot.png")
}
function setup() {
    var canvas = createCanvas(windowWidth, windowWidth/3)
    canvas.parent("robotgame");
}
function draw() {
    background("white")
    image(BG, 0,0, windowWidth, windowWidth / 3);
    image(BG1, 0,0, windowWidth, windowWidth / 3);
    image(BG2, 0,0, windowWidth, windowWidth / 3);
    image(BG3, 0,0, windowWidth, windowWidth / 3);
    create_paddle(windowWidth)
}
function windowResized() {
    resizeCanvas(windowWidth, windowWidth / 3);
}
function create_paddle(windowWidth){
    fill("#32a89d");
    rect(mouseX, windowWidth/3-50, paddle_width, paddle_height, 20, 20, 0,0)
}
class Robot {
    constructor(){
        this.Y = windowWidth / 3 / 2;
        this.X = 0;
        this.speed = random(1,4)
    }
    move(){
        this.X = this.X + this.speed
        image(robotpicture, this.X, this.Y, 30, 30)
    }
}
function create_robots(){
    let new_robot = new Robot();
    robotlist.unshift(new_robot);
    
}
