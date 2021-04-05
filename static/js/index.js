window.onresize = function (event) {
  
  const screenHeight = window.innerHeight / 2;
  const screenWidth = window.innerWidth / 2;
  if(window.innerWidth < 1150){
    if(window.innerWidth > window.innerHeight){
      context.canvas.height = window.innerHeight*0.8 ;
    context.canvas.width = window.innerHeight*0.8 ;
    document
      .getElementById("main-container")
      .setAttribute("style", `width:${window.innerHeight*0.8}px;height:${window.innerHeight*0.8}px`);
    document
      .getElementById("snake-container")
      .setAttribute("style", `width:${window.innerHeight*0.8}px;height:${window.innerHeight*0.8}px`);
    document
      .getElementById("jumpnrun-container")
      .setAttribute("style", `width:${window.innerHeight*0.8}px;height:${window.innerHeight*0.8}px`);
    return 
    }else{
      context.canvas.height = window.innerWidth*0.8 ;
      context.canvas.width = window.innerWidth*0.8 ;
      document
        .getElementById("main-container")
        .setAttribute("style", `width:${window.innerWidth*0.8}px;height:${window.innerWidth*0.8}px`);
      document
        .getElementById("snake-container")
        .setAttribute("style", `width:${window.innerWidth*0.8}px;height:${window.innerWidth*0.8}px`);
      document
        .getElementById("jumpnrun-container")
        .setAttribute("style", `width:${window.innerWidth*0.8}px;height:${window.innerWidth*0.8}px`);
      return 
    }
    
  }
  if (screenHeight > screenWidth) {
    context.canvas.height = screenWidth;
    context.canvas.width = screenWidth;
  } else {
    context.canvas.height = screenHeight;
    context.canvas.width = screenHeight;
  }
  if (screenHeight > screenWidth) {
    document
      .getElementById("main-container")
      .setAttribute("style", `width:${screenWidth}px;height:${screenWidth}px`);
    document
      .getElementById("snake-container")
      .setAttribute("style", `width:${screenWidth}px;height:${screenWidth}px`);
    document
      .getElementById("jumpnrun-container")
      .setAttribute("style", `width:${screenWidth}px;height:${screenWidth}px`);
  } else {
    document
      .getElementById("main-container")
      .setAttribute(
        "style",
        `width:${screenHeight}px;height:${screenHeight}px`
      );
    document
      .getElementById("snake-container")
      .setAttribute(
        "style",
        `width:${screenHeight}px;height:${screenHeight}px`
      );
    document
      .getElementById("jumpnrun-container")
      .setAttribute(
        "style",
        `width:${screenHeight}px;height:${screenHeight}px`
      );
  }
};

window.onkeypress = function (event) {
  if (event.key == "w") {
    if (direction == "down") return;
    direction = "up";
  } else if (event.key == "s") {
    if (direction == "up") return;
    direction = "down";
  } else if (event.key == "d") {
    if (direction == "left") return;
    direction = "right";
  } else if (event.key == "a") {
    if (direction == "right") return;
    direction = "left";
  } else if (event.key == "Enter") {
    enter_pressed(event);
  }
};

function firstLoad(){
  
  const screenHeight = window.innerHeight / 2;
  const screenWidth = window.innerWidth / 2;
  if(window.innerWidth < 1150){
    if(window.innerHeight > window.innerWidth){
      context.canvas.height = window.innerWidth*0.8 ;
      context.canvas.width = window.innerWidth*0.8 ;
      document
        .getElementById("main-container")
        .setAttribute("style", `width:${window.innerWidth*0.8}px;height:${window.innerWidth*0.8}px`);
      document
        .getElementById("snake-container")
        .setAttribute("style", `width:${window.innerWidth*0.8}px;height:${window.innerWidth*0.8}px`);
      document
        .getElementById("jumpnrun-container")
        .setAttribute("style", `width:${window.innerWidth*0.8}px;height:${window.innerWidth*0.8}px`);
      return
    }else{
      context.canvas.height = window.innerHeight*0.8 ;
      context.canvas.width = window.innerHeight*0.8 ;
      document
        .getElementById("main-container")
        .setAttribute("style", `width:${window.innerHeight*0.8}px;height:${window.innerHeight*0.8}px`);
      document
        .getElementById("snake-container")
        .setAttribute("style", `width:${window.innerHeight*0.8}px;height:${window.innerHeight*0.8}px`);
      document
        .getElementById("jumpnrun-container")
        .setAttribute("style", `width:${window.innerHeight*0.8}px;height:${window.innerHeight*0.8}px`);
      return
    }


  }
  if (screenHeight > screenWidth) {
    context.canvas.height = screenWidth;
    context.canvas.width = screenWidth;
  } else {
    context.canvas.height = screenHeight;
    context.canvas.width = screenHeight;
  }
  if (screenHeight > screenWidth) {
    document
      .getElementById("main-container")
      .setAttribute("style", `width:${screenWidth}px;height:${screenWidth}px`);
    document
      .getElementById("snake-container")
      .setAttribute("style", `width:${screenWidth}px;height:${screenWidth}px`);
    document
      .getElementById("jumpnrun-container")
      .setAttribute("style", `width:${screenWidth}px;height:${screenWidth}px`);
  } else {
    document
      .getElementById("main-container")
      .setAttribute(
        "style",
        `width:${screenHeight}px;height:${screenHeight}px`
      );
    document
      .getElementById("snake-container")
      .setAttribute(
        "style",
        `width:${screenHeight}px;height:${screenHeight}px`
      );
    document
      .getElementById("jumpnrun-container")
      .setAttribute(
        "style",
        `width:${screenHeight}px;height:${screenHeight}px`
      );
  }
}

firstLoad();
