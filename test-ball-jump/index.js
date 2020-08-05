let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");


let ball = new Image();
let bg = new Image();
let fg = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();

ball.src = "images/ball.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";



let gap = 85;
let constant;

let bX = 45;
let bY = 100;

let gravity = 1.5;

let score = 0;



document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 25;
}



let pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};



function draw(){
    
    ctx.drawImage(bg,0,0);
    
    
    for(var i = 0; i < pipe.length; i++){
        
        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
             
        pipe[i].x--;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            }); 
        }

        
        
        if( bX + ball.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+ball.height >= pipe[i].y+constant) || bY + ball.height >=  cvs.height - fg.height){
            location.reload(); 
        }
        
        if(pipe[i].x == 5){
            score++;
           
        }
        
        
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    
    ctx.drawImage(ball,bX,bY);
    
    bY += gravity;
    
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Level : "+score,10,cvs.height-20);
    
    requestAnimationFrame(draw);
    
}

draw();
























