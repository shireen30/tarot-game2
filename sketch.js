var bgImage;

var card1;
var yellow_cardImg;
var card1_btn,card2_btn,card3_btn;

function preload(){
bgImage=loadImage("assets/starry-sky.jpg");
yellow_cardImg=loadImage("assets/Yellow_card.svg.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  card1_btn=createImg("assets/Yellow_card.svg.png");
  card1_btn.position(100,80);
  card1_btn.size(200,300);
  card1_btn.mouseClicked(card1)


  card2_btn=createImg("assets/Blue_card.svg.png");
  card2_btn.position(230,80);
  card2_btn.size(200,300);
  card2_btn.mouseClicked(card2)
}

function draw() {
  background(0);
  image(bgImage,0,0)
  //drawSprites();


  }
  function card1(){
    alert("Justice!!! You have Chosen");
    card1_btn=createImg("assets/Justice.jpg");
    card1_btn.position(100,80);
    card1_btn.size(200,300);
  }
  function card2(){
    alert("World!!! You have Chosen");
    card2_btn=createImg("assets/world.jpg");
    card2_btn.position(230,80);
    card2_btn.size(200,300);
  }
