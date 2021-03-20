var cat, catImg, catImg2, catImg3;
var mouse, mouseImg, mouseImg2;
var garden, gardenImg;

function preload() {
    //load the images here
    catImg = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png")
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouseImg3 = loadAnimation("images/mouse4.png")
    gardenImg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500, 400)
    garden.addImage(gardenImg)

    cat = createSprite(800,600)
    cat.addAnimation(catImg)
    cat.scale = 0.2

    mouse = createSprite(200,600)
    mouse.addAnimation(mouseImg)
    mouse.scale = 0.2


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    if (cat.isTouching(mouse)) {
        cat.velocityX = 0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x = 300
        cat.scale = 0.2
        cat.changeAnimation("catLastImage")
        mouse.addAnimation("mouseLastImage", mouseImg3)
        mouse.scale = 0.15
        mouse.changeAnimation("mouseLastImage")
    }

    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouseTeasing", mouseImg2)
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay = 25
    }
  //For moving and changing animation write code here


}
