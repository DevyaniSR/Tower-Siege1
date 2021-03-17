const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block;
var polygonImage

function preload(){
    polygonImage = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,390,900,20)
    stand1 = new Ground(390,300,250,10)
    stand2 = new Ground(700,200,200,10)

    block1 = new Block(330,235,30,40)
    block2 = new Block(360,235,30,40)
    block3 = new Block(390,235,30,40)
    block4 = new Block(420,235,30,40)
    block5 = new Block(450,235,30,40)
    block6 = new Block(360,195,30,40)
    block7 = new Block(390,195,30,40)
    block8 = new Block(420,195,30,40)
    block9 = new Block(390,155,30,40)

    block10= new Block(640,175,30,40)
    block11= new Block(670,175,30,40)
    block12= new Block(700,175,30,40)
    block13= new Block(730,175,30,40)
    block14= new Block(760,175,30,40)
    block15= new Block(670,135,30,40)
    block16= new Block(700,135,30,40)
    block17= new Block(730,135,30,40)
    block18= new Block(700,95,30,40)

    ball=Bodies.circle(50,200,20)
    World.add(world,ball)
    slingShot= new SlingShot(ball,{x:100,y:200})
}

function draw(){
    background("skyblue");
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();
    
    fill("pink")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("yellow")
    block6.display();
    block7.display();
    block8.display();
    fill("pink")
    block9.display();

    fill("yellow")
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    fill("pink")
    block15.display();
    block16.display();
    block17.display();
    fill("yellow")
    block18.display();
    
    imageMode(CENTER)
    image(polygonImage,ball.position.x,ball.position.y,40,40)
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}