const gameField = "_____________#____________#_________#_______#__________";
var run_jump = false;
var VELOCITY = 5;
var map_vel = 80;

const B_COLOR = "#232323";

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
  if (index > fieldL) {
    index = 0;
    VELOCITY += 1;
    map_vel -= 5;
  }
}

class enemys {
  constructor(x, y, x_vel, radius, color) {
    this.x = x;
    this.y = y;
    this.x_vel = x_vel;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
  }
  update() {
    this.x -= this.x_vel;
  }
}

let enemyList = [];

function new_enemy() {
  let oneortwo = Math.round(Math.random() * 3);
  let size = Math.round(Math.random() * 10 + 10);
  const ene = new enemys(
    510,
    oneortwo == 1 ? context.canvas.height - 150 : context.canvas.height - 100,
    VELOCITY,
    size,
    size,
    "yellow"
  );
  enemyList.push(ene);
}

function jump_update() {
  if (mapindex - 1 >= mapLen) {
    mapindex = 0;
  }
  if (gameField[mapindex] == "#") {
    new_enemy();
  }
  mapindex++;
}

var context;
var canvas;
canvas = document.querySelector("canvas");
context = canvas.getContext("2d");

rectangle = {
  radius: 20,
  jumping: true,
  x: 50,
  y: context.canvas.height - 100,
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
window.addEventListener('touchstart', function(e){
  alert("touched");
}, false)

function jump_draw() {
  if (controller.up && rectangle.jumping == false) {
    rectangle.y_velocity -= 25;
    rectangle.jumping = true;
  }
  rectangle.y_velocity += 0.8; // gravity
  rectangle.y += rectangle.y_velocity;
  rectangle.y_velocity *= 0.9; // friction
  if (rectangle.y > context.canvas.height - 50 - 16 - 32) {
    rectangle.jumping = false;
    rectangle.y = context.canvas.height - 50 - 16 - 32;
    rectangle.y_velocity = 0;
  }
  context.fillStyle = B_COLOR;

  context.fillRect(0, 0, context.canvas.height, context.canvas.height);

  context.fillStyle = "#ff0000"; // hex for red
  context.beginPath();
  context.arc(
    rectangle.x,
    rectangle.y,
    rectangle.radius,
    0,
    Math.PI * 2,
    false
  );
  context.fill();
  let newArr = [];
  context.fillStyle = "#fff000";
  if (enemyList.length > 0) {
    enemyList.forEach((ene) => {
      if (ene.x > -30) newArr.push(ene);
      const dist = Math.hypot(ene.x - rectangle.x, ene.y - rectangle.y);
      if (dist - ene.radius - rectangle.radius < 1) {
        ene.update();
        ene.draw();
        newArr = [];
        youLoose();
        return;
      }
      ene.update();
      ene.draw();
    });
  }

  enemyList = newArr;
}

function youLoose() {
  jump_stop();
  alert("You lost!");
}

function main(currenTime) {
  if (run_jump) {
    window.requestAnimationFrame(main);
  }
  const milliSecondsSinceLastRender = currenTime - lastRenderTime;
  if (milliSecondsSinceLastRender < map_vel) {
    return;
  }
  if (run_jump) {
    jump_update();
  }

  lastRenderTime = currenTime;
}

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);

var loop;

let ss = "start";

function jump_start() {
  if (ss == "stop") {
    jump_stop();
    return;
  }
  document.getElementById("jump_start").innerHTML = "Stop";
  ss = "stop";
  VELOCITY = 5;
  snake_stop();
  loop = setInterval(jump_draw, 10);
  window.requestAnimationFrame(main);
  run = false;
  run_jump = true;
}

function jump_stop() {
  ss = "start";
  document.getElementById("jump_start").innerHTML = "Start";
  clearInterval(loop);
  enemyList = [];
  run_jump = false;
  VELOCITY = 5;
  map_vel = 80;
  lastRenderTime = 0;
  index = 0;
  context.fillStyle = B_COLOR;
  context.fillRect(0, 0, context.canvas.height, context.canvas.height);
  rectangle.x = 50;
  rectangle.y = context.canvas.height - 100;
  mapindex = 0;
  run_jump = false;
}
