var player = 1;

var gameMap = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
};

function gameWin(who) {
  sleep(200).then(() => {
    alert(`Player ${who} won!`);
    sleep(300).then(() => {
      for (let i = 1; i < 10; i++) {
        gameMap[i] = `${i}`;
        document.getElementsByClassName(`button${i}`)[0].innerHTML = `${i}`;
        document.getElementsByClassName(`button${i}`)[0].style.backgroundColor =
          "#C3E0E5";
      }
    });
  });
}

function checkWin() {
  if (gameMap[1] == "X" && gameMap[2] == "X" && gameMap[3] == "X") {
    document.getElementsByClassName(`button${1}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${2}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${3}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("X");
  } else if (gameMap[4] == "X" && gameMap[5] == "X" && gameMap[6] == "X") {
    document.getElementsByClassName(`button${4}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${5}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${6}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("X");
  } else if (gameMap[7] == "X" && gameMap[8] == "X" && gameMap[9] == "X") {
    document.getElementsByClassName(`button${7}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${8}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${9}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("X");
  } else if (gameMap[1] == "X" && gameMap[5] == "X" && gameMap[9] == "X") {
    document.getElementsByClassName(`button${1}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${5}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${9}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("X");
  } else if (gameMap[7] == "X" && gameMap[5] == "X" && gameMap[3] == "X") {
    document.getElementsByClassName(`button${7}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${5}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${3}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("X");
  } else if (gameMap[1] == "X" && gameMap[4] == "X" && gameMap[7] == "X") {
    document.getElementsByClassName(`button${1}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${4}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${7}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("X");
  } else if (gameMap[2] == "X" && gameMap[5] == "X" && gameMap[8] == "X") {
    document.getElementsByClassName(`button${2}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${5}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${8}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("X");
  } else if (gameMap[3] == "X" && gameMap[6] == "X" && gameMap[9] == "X") {
    document.getElementsByClassName(`button${3}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${6}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${9}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("X");
  } else if (gameMap[1] == "O" && gameMap[2] == "O" && gameMap[3] == "O") {
    document.getElementsByClassName(`button${1}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${2}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${3}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("O");
  } else if (gameMap[4] == "O" && gameMap[5] == "O" && gameMap[6] == "O") {
    document.getElementsByClassName(`button${4}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${5}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${6}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("O");
  } else if (gameMap[7] == "O" && gameMap[8] == "O" && gameMap[9] == "O") {
    document.getElementsByClassName(`button${7}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${8}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${9}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("O");
  } else if (gameMap[1] == "O" && gameMap[5] == "O" && gameMap[9] == "O") {
    document.getElementsByClassName(`button${1}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${5}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${9}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("O");
  } else if (gameMap[7] == "O" && gameMap[5] == "O" && gameMap[3] == "O") {
    document.getElementsByClassName(`button${7}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${5}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${3}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("O");
  } else if (gameMap[1] == "O" && gameMap[4] == "O" && gameMap[7] == "O") {
    document.getElementsByClassName(`button${1}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${4}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${7}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("O");
  } else if (gameMap[2] == "O" && gameMap[5] == "O" && gameMap[8] == "O") {
    document.getElementsByClassName(`button${2}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${5}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${8}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("O");
  } else if (gameMap[3] == "O" && gameMap[6] == "O" && gameMap[9] == "O") {
    document.getElementsByClassName(`button${3}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${6}`)[0].style.backgroundColor =
      "#e2d046";
    document.getElementsByClassName(`button${9}`)[0].style.backgroundColor =
      "#e2d046";
    gameWin("O");
  } else {
    for (let i = 1; i < 10; i++) {
      if (gameMap[i] == `${i}`) {
        return;
      }
    }
    alert(`Draw!`);
    for (let i = 1; i < 10; i++) {
      gameMap[i] = `${i}`;
      document.getElementsByClassName(`button${i}`)[0].innerHTML = `${i}`;
      document.getElementsByClassName(`button${i}`)[0].style.backgroundColor =
        "#C3E0E5";
    }
  }
}

function buttonClick(button) {
  if ((gameMap[button] == "X") | (gameMap[button] == "O")) {
    alert("Invalid Input!");
    return;
  }
  gameMap[button] = player == 1 ? "X" : "O";
  document.getElementsByClassName(`button${button}`)[0].innerHTML =
    player == 1 ? "X" : "O";
  document.getElementsByClassName(`button${button}`)[0].style.backgroundColor =
    player == 1 ? "#5885AF" : "#274472";
  player = player * -1;
  checkWin();
}
