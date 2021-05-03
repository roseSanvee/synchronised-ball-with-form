var Myball;
var database;
var  Myposition;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
     Myball= createSprite(250,250,10,10);
    Myball.shapeColor = "red";
    var Myballposition = database.ref('ball/position');
    Myballposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref('ball/position').set({
'x': Myposition.x+x,
'y':Myposition.y+y

   })
}
function readposition(data){
Myposition=data.val();
Myball.x=Myposition.x
Myball.y=Myposition.y
}
function showerror(){
console.log("ERROR");    
}