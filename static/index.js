window.onresize = function(event) {
    const screenHeight = window.innerHeight/2;
    const screenWidth= window.innerWidth/2;
    if (screenHeight > screenWidth){
        document.getElementById("main-container").setAttribute("style", `width:${screenWidth}px;height:${screenWidth}px`)
    }else{
        document.getElementById("main-container").setAttribute("style", `width:${screenHeight}px;height:${screenHeight}px`)
    }
};


window.onkeypress = function(event){
    if(event.key == "w"){
        if (direction == "down") return 
        direction = "up"
    }
    else if (event.key == "s"){
        if (direction == "up") return 
        direction = "down";
    }
    else if (event.key == "d"){
        if (direction == "left") return 
        direction = "right";
    }
    else if (event.key == "a"){
        if (direction == "right") return 
        direction = "left";
    }
    else if(event.key == "Enter"){
        enter_pressed(event);
    }
}

const screenHeight = window.innerHeight/2;
const screenWidth= window.innerWidth/2;
if (screenHeight > screenWidth){
    document.getElementById("main-container").setAttribute("style", `width:${screenWidth}px;height:${screenWidth}px`)
}else{
    document.getElementById("main-container").setAttribute("style", `width:${screenHeight}px;height:${screenHeight}px`)
}
