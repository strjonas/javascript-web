const gameField =
  "_____________________#______________________________________#__________________\
__________#____________________________________#_____________________________#________________________________\
_______#_________________________________________#_______________________________#_____________________________#_\
_____________________________#_______________________#__________________#__________________#_______________#__\
_________#__________#______#__________________#_______#_______#______#________#________________#____________";
var run_jump = false;

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
const field = document.getElementsByClassName("field")[0];
const fieldL = gameField.length - 21;

var lastRenderTime = 0;
var index = 0;

var mapindex = 0;
const mapLen = gameField.length;

function setGameField() {
  index += 1;
  var c = gameField.slice(index, index + 20);
  field.innerHTML = c;
  if (index > fieldL) index = 0;
}

var x_value;

function jump_update() {
    if (mapindex-1 >= mapLen){mapindex = 0}
    console.log(gameField[mapindex])
    if (gameField[mapindex] == "#"){
        x_value = 490;
        context.fillStyle = "#fff000"; // hex for red
        context.beginPath();
        context.rect(x_value, 400, rectangle.width, rectangle.height);
    }
    mapindex++;

}

function updateValue(){
    x_value--;
    
}

function enter_pressed(event) {}
var context;
var canvas;
canvas = document.querySelector("canvas");
context = canvas.getContext("2d");

const screenHeight = window.innerHeight / 2;
const screenWidth = window.innerWidth / 2;
if (screenHeight > screenWidth) {
  context.canvas.height = screenWidth;
  context.canvas.width = screenWidth;
} else {
  context.canvas.height = screenHeight;
  context.canvas.width = screenHeight;
}

rectangle = {
  height: 32,
  jumping: true,
  width: 32,
  x: 50,
  y: 100,
  y_velocity: 0,
};

controller = {
  up: false,
  keyListener: function (event) {
    var key_state = event.type == "keydown" ? true : false;

    if (event.keyCode == 38) {
      controller.up = key_state;
    }
  },
};

function jump_draw() {
  if (controller.up && rectangle.jumping == false) {
    rectangle.y_velocity -= 20;
    rectangle.jumping = true;
  }
  rectangle.y_velocity += 1.5; // gravity
  rectangle.y += rectangle.y_velocity;
  rectangle.y_velocity *= 0.9; // friction
  if (rectangle.y > 400 - 16 - 32) {
    rectangle.jumping = false;
    rectangle.y = 400 - 16 - 32;
    rectangle.y_velocity = 0;
  }

  context.fillStyle = "#232323";

  const screenHeight = window.innerHeight / 2;
  const screenWidth = window.innerWidth / 2;
  if (screenHeight > screenWidth) {
    context.fillRect(0, 0, screenWidth, screenWidth);
  } else {
    context.fillRect(0, 0, screenHeight, screenHeight);
  }

  context.fillStyle = "#ff0000"; // hex for red
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.fill();

  context.fillStyle = "#fff000"; // hex for red
  context.beginPath();
  context.rect(x_value, 350, rectangle.width, rectangle.height);
  context.fill();

}

function main(currenTime) {
  if (run_jump) {
    window.requestAnimationFrame(main);
  }
  const milliSecondsSinceLastRender = currenTime - lastRenderTime;
  if (milliSecondsSinceLastRender < 100) {
    return;
  }

  jump_update();

  lastRenderTime = currenTime;
}

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);

var loop;

function jump_start() {
  snake_stop()
  update_value_loop = setInterval(updateValue, 5);
  loop = setInterval(jump_draw, 50)
  window.requestAnimationFrame(main);
  run = false;
  run_jump = true;
}

function jump_stop(){
    clearInterval(loop);
    clearInterval(update_value_loop);
    run = false;
}

