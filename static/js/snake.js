let run = false;
let lastRenderTime_Snake = 0;
let snake = [[10, 10]];
let direction = "up";
let food = null;
const FPS = 150;
let ss_snake = "start";

function loose() {
  ss_snake = "start";
  lastRenderTime_Snake = 0;
  snake = [[10, 10]];
  direction = "up";
  food = null;
  run = false;
  document.getElementById("snake_start").innerHTML = "Start";
  alert("You lost!");
}

function update() {
  switch (direction) {
    case "up":
      snake.push([snake[snake.length - 1][0], snake[snake.length - 1][1] - 1]);
      snake.shift();
      break;
    case "down":
      snake.push([snake[snake.length - 1][0], snake[snake.length - 1][1] + 1]);
      snake.shift();
      break;
    case "left":
      snake.push([snake[snake.length - 1][0] - 1, snake[snake.length - 1][1]]);
      snake.shift();
      break;
    case "right":
      snake.push([snake[snake.length - 1][0] + 1, snake[snake.length - 1][1]]);
      snake.shift();
      break;
  }
  if ((snake[snake.length - 1][0] > 25) | (snake[snake.length - 1][0] < 0)) {
    loose();
  } else if (
    (snake[snake.length - 1][1] > 25) |
    (snake[snake.length - 1][1] < 0)
  ) {
    loose();
  }
  let x = snake[snake.length - 1][0];
  let y = snake[snake.length - 1][1];
  let snakeNoHead = snake.slice(0, snake.length - 1);
  if (snakeNoHead.length > 0) {
    snakeNoHead.forEach((el) => {
      if (el[0] == x && el[1] == y) {
        loose();
      }
    });
  }

  if (food == null) {
    let x = Math.floor(Math.random() * 23 + 1);
    let y = Math.floor(Math.random() * 23 + 1);
    food = [x, y];
  }
  if (
    snake[snake.length - 1][0] == food[0] &&
    snake[snake.length - 1][1] == food[1]
  ) {
    food = null;
    snake.unshift(snake[0]);
  }
}

function switchDirectionTouch(event) {
  const element = document.elementFromPoint(
    event.touches[0].clientX,
    event.touches[0].clientY
  );
  let gBCR = element.getBoundingClientRect();
  let snakeHeadPos = snake[snake.length - 1];
  let xTouch = event.touches[0].clientX;
  let yTouch = event.touches[0].clientY;
  let cells = 25;
  let posOLx = gBCR.x;
  let posOLy = gBCR.y;
  let gBRCsize = gBCR.width;
  let cellSize = gBRCsize / cells;

  let snakeHeadY = posOLy + (snakeHeadPos[1] - 1) * cellSize;
  let snakeHeadX = posOLx + (snakeHeadPos[0] - 1) * cellSize;
  console.log(snakeHeadY);
  console.log(snakeHeadX);

  console.log(yTouch);
  console.log(xTouch);

  let diffY = Math.abs(yTouch - snakeHeadY);
  let diffX = Math.abs(xTouch - snakeHeadX);
  if (diffY > diffX) {
    if ((direction == "down") | (direction == "up")) return;
    if (yTouch > snakeHeadY) {
      direction = "down";
    } else {
      direction = "up";
    }
  } else {
    if ((direction == "right") | (direction == "left")) return;
    if (xTouch > snakeHeadX) {
      direction = "right";
    } else {
      direction = "left";
    }
  }
}

function startup() {
  var el = document.getElementById("snake-container");
  el.addEventListener("touchstart", switchDirectionTouch, false);
}

function draw() {
  snake.forEach((element) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = element[1];
    snakeElement.style.gridColumnStart = element[0];
    snakeElement.style.backgroundColor = "white";
    document
      .getElementsByClassName("snake-container")[0]
      .appendChild(snakeElement);
  });

  if (food != null) {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food[1];
    foodElement.style.gridColumnStart = food[0];
    foodElement.style.backgroundColor = "green";
    document
      .getElementsByClassName("snake-container")[0]
      .appendChild(foodElement);
  }
}

function snake_main(currenTime) {
  if (run) {
    window.requestAnimationFrame(snake_main);
  }

  const milliSecondsSinceLastRender = currenTime - lastRenderTime_Snake;
  if (milliSecondsSinceLastRender < FPS) {
    return;
  }

  update();
  document.getElementsByClassName("snake-container")[0].innerHTML = "";
  draw();
  lastRenderTime_Snake = currenTime;
}

function snake_start() {
  document.getElementById("snake_start").innerHTML = "Stop";
  if (ss_snake == "stop") {
    snake_stop();
    return;
  }
  ss_snake = "stop";
  jump_stop();
  run_jump = false;
  run = true;
  window.requestAnimationFrame(snake_main);
}

function snake_stop() {
  document.getElementById("snake_start").innerHTML = "Start";
  ss_snake = "start";
  lastRenderTime_Snake = 0;
  snake = [[10, 10]];
  direction = "up";
  food = null;
  run = false;
  run = false;
}

document.addEventListener("DOMContentLoaded", startup);
