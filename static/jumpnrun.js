const gameField = "_____________________#______________________________________#__________________\
__________#____________________________________#_____________________________#________________________________\
_______#_________________________________________#_______________________________#_____________________________#_\
_____________________________#_______________________#__________________#__________________#_______________#__\
_________#__________#______#__________________#_______#_______#______#________#________________#____________";
var run_jump = false;

var jumping = false;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const field = document.getElementsByClassName("field")[0];
const fieldL = gameField.length-21;

var lastRenderTime = 0;
var index = 0;

function setGameField(){
    index += 1;
    var c =  gameField.slice(index, index+20);
    field.innerHTML = c;
    if(index > fieldL) index = 0;    
}

function jump_update(){
     
}

var draw_interval;

function enter_pressed(event){
    if (jumping) return
    jumping = true;
    counter = 24;
    differ = -1;
    draw_interval = setInterval(jump_draw, 150)

}

canvas = document.querySelector("canvas");

var counter = 24;
var differ = -1;

function jump_draw(){
    console.log(canvas.style.gridRowStart)
    
    canvas.style.gridRowStart = counter;
    counter += differ;
    if (counter <= 20) {
        differ = 1;
        sleep(1000);
    }
    if (counter == 24) {
        canvas.style.gridRowStart = 24;
        jumping = false;
        clearInterval(draw_interval);
        return;
    }
    
}

function main(currenTime){
    if(run_jump){
        window.requestAnimationFrame(main);
    }
    const milliSecondsSinceLastRender = ( currenTime - lastRenderTime)
    if (milliSecondsSinceLastRender < 1000){return}   
   
    //setGameField()
    jump_update()
    //jump_draw()

    lastRenderTime = currenTime;
    
}

function jump_start(){
    run = false;
    run_jump = true;
    window.requestAnimationFrame(main);
}

