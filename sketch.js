//Create variables here
var dog, happyDog, dog1;
var database;
var foodS, foodStock;
var database;

function preload()
{
	//load images here
  dog1=loadImage("images/dogImg");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog=createSprites(800,200,150,150)
  dog.addImage(dog1)

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  Text("Note: Press UP_ARROW Key To Feed Drago Milk")
  textSize(25)
  fill("white")
  stroke(5)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}
