function setup(){
    let c= createCanvas(windowWidth,windowHeight);
    c.position(0,0);
    clear();
}

function draw(){
    
    stroke(0);
    strokeWeight(4);
    if(mouseIsPressed){
        line(mouseX,mouseY,pmouseX,pmouseY);
    }
}