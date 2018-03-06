/** 
 * @param {Snake Object}  s => snake
*/
var s;

/** 
 * @param {}  scl => scale
*/
var scl =20;

var food;

function setup() {
    //createCanvas(600,600);
    let cnv = createCanvas(600, 600);
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
    cnv.parent('canva');

    s = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);
    
    if(s.eat(food)) {
        pickLocation();
    }
    s.counter();
    s.death();
    s.update();
    s.show();
    //food color
    fill(255, 0, 50);
    rect(food.x, food.y, scl, scl);
}
function keyPressed() {
    if(keyCode === UP_ARROW) {
        s.dir(0,-1);
    }
    else if(keyCode === DOWN_ARROW) {
        s.dir(0,1);
    }
    else if(keyCode === RIGHT_ARROW) {
        s.dir(1,0);
    }
    else if(keyCode === LEFT_ARROW) {
        s.dir(-1,0);
    }
}
