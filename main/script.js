let BG;
let BG1;
let BG2;
let BG3;
let robotpicture;
let paddle_width = 80;
let paddle_height = 30;
var robotlist = [];
var robotimer;


function preload() {
    BG = loadImage("images/trees1.png")
    BG1 = loadImage("images/trees2.png")
    BG2 = loadImage("images/trees3.png")
    BG3 = loadImage("images/trees4.png")
    robotpicture = loadImage("images/robot2.png")
}
function setup() {
    var canvas = createCanvas(windowWidth, windowWidth/3)
    canvas.parent("robotgame");
}
function play() {
robotlist = [];
clearTimeout(robotimer);
loop();
create_robots();
}
function draw() {
    background("white")
    image(BG, 0,0, windowWidth, windowWidth / 3);
    image(BG1, 0,0, windowWidth, windowWidth / 3);
    image(BG2, 0,0, windowWidth, windowWidth / 3);
    image(BG3, 0,0, windowWidth, windowWidth / 3);
    create_paddle(windowWidth)
    for (let robot of robotlist) {
        robot.move();
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowWidth / 3);
}
function create_paddle(windowWidth){
    fill("#32a89d");
    rect(mouseX, windowWidth/3-50, paddle_width, paddle_height, 20, 20, 0,0)
}
function create_robots(){
    let new_robot = new Robot();
    robotlist.unshift(new_robot);
    robotimer = setTimeout(create_robots, 2000)
}
class Robot {
    constructor(){
        this.Y = windowWidth / 3 / 2;
        this.X = 0;
        this.Xspeed = random(1,4);
        this.Yspeed = random(-2, -4);
        this.height = 60;
        this.width = 60;
        this.angle = 0;
    }
    move(windowWidth){
        this.X = this.X + this.Xspeed;
        this.Yspeed = this.Yspeed + 0.05
        if (this.Y + this.height / 2 > windowWidth / 3 - 50) {
            if (this.X > mouseX && this.X < mouseX + paddle_width) {
                this.Yspeed = -abs(this.Yspeed)
            }
        }
        this.Y = this.Y + this.Yspeed
        this.angle = this.angle + 1
        image(robotpicture, this.X, this.Y, 100, 100)
    }
}
