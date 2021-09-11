
/**
 * Controllable Sprite Animation Program
 * Gabriel Votaw
 * 2 February 2021
 */

var character=[];
var sprite=["splunkyGuy.png","Green.png","jungleWarrior.png","lime.png","robot.png"];
var numCharacters=10;

function preload(){
    for(var i=0;i<numCharacters;i++){
        character[i]=new Walker(random(sprite),random(640),random(480),random(3,9),random([-1,1]));
    }
}

function setup(){
    createCanvas(640,480);
    imageMode(CENTER);
}

function mousePressed(){
    for(var i=0;i<numCharacters;i++){
        character[i].grab(mouseX,mouseY);
    }
}

function mouseDragged(){
    for(var i=0;i<numCharacters;i++){
        character[i].drag(mouseX,mouseY);
    }
}

function mouseReleased(){
    for(var i=0;i<numCharacters;i++){
        character[i].drop();
    }
}

// function keyPressed(){
//     if(keyCode == RIGHT_ARROW){
//         for(var i=0;i<numCharacters;i++){
//             character[i].move(1);
//         }
//     }
//     if(keyCode == LEFT_ARROW){
//         for(var i=0;i<numCharacters;i++){
//             character[i].move(-1);
//         }
//     }
// }

// function keyReleased(){
//     if(keyCode == RIGHT_ARROW){
//         for(var i=0;i<numCharacters;i++){
//             character[i].stop();
//         }
//     }
//     if(keyCode == LEFT_ARROW){
//         for(var i=0;i<numCharacters;i++){
//             character[i].stop();
//         }
//     }
// }

function draw(){
    background(0,128,0);
    for(var i=0;i<numCharacters;i++){
        character[i].draw();
    }
}

function Walker(imageName,x,y,speed,moving){
    this.spriteSheet=loadImage(imageName);
    this.frame=0;
    this.x=x;
    this.y=y;
    this.moving=moving;
    this.facing=moving;
    this.speed=speed;

    this.draw = function(){
        push();
        translate(this.x,this.y);

        if(this.facing<0){
            scale(-1,1);
        }
        if(this.moving==0){
            image(this.spriteSheet,0,0,80,80,0,0,80,80);
        }
        else{    
            if(this.frame==0){
            image(this.spriteSheet,0,0,80,80,80,0,80,80);
            }
    
            if(this.frame==1){
                image(this.spriteSheet,0,0,80,80,160,0,80,80);
            }
    
            if(this.frame==2){
                image(this.spriteSheet,0,0,80,80,240,0,80,80);
            }
    
            if(this.frame==3){
                image(this.spriteSheet,0,0,80,80,320,0,80,80);
            }
    
            if(this.frame==4){
                image(this.spriteSheet,0,0,80,80,400,0,80,80);
            }
    
            if(this.frame==5){
                image(this.spriteSheet,0,0,80,80,480,0,80,80);
            }
    
            if(this.frame==6){
                image(this.spriteSheet,0,0,80,80,560,0,80,80);
            }
    
            if(this.frame==7){
                image(this.spriteSheet,0,0,80,80,640,0,80,80);
            }
    
            if(frameCount%4 == 0){
                this.frame = (this.frame+1)%8;
                this.x = this.x+this.moving*this.speed;
                if(this.x<30){
                    this.moving=1;
                    this.facing=1;
                }
                if(this.x>width-30){
                    this.moving=-1;
                    this.facing=-1;
                }
            }
        }  
        pop();

        this.move = function(direction){
            this.moving = direction;
            this.facing = direction;
        }

        this.stop = function(){
            this.moving = 0;
            this.frame = 3;
        }

        this.grab = function(x,y){
            if(this.x-40<x && x<this.x+40 && this.y-40<y && y<this.y+40){
                this.stop();
                this.mouseX=x;
                this.mouseY=y;
                this.initialX=this.x;
                this.initialY=this.y;
            }
        }

        this.drag = function(x,y){
            if(this.moving==0){
                this.x=(x-this.mouseX) + this.initialX;
                this.y=(y-this.mouseY) + this.initialY;
            }
        }

        this.drop = function(){
            this.move(this.facing);
        }
    }
}