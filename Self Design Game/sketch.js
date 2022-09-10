

function preload() {
soilder_img = loadImage("soilder.png")

gunshot = loadAnimation("gunshot1.png","gunshot2.png","gunshot3.png","gunshot4.png")

zombie_walk = loadAnimation("zombie_walk1.png","zombie_walk2.png","zombie_walk3.png","zombie_walk4.png","zombie_walk5.png","zombie_walk6.png","zombie_walk7.png","zombie_walk8.png")
}



function setup() {
  createCanvas(1000,500);
  
}

function draw() {
  background(0)

  drawSprites()
}
