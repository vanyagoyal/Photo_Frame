function preload(){
    loadImage("https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
}

function setup(){
    canvas = createCanvas(700 , 500);
    canvas.position(400 , 250);
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function draw(){
    image(webcam , 140 , 80 , 300 , 250);

        
    fill(255 , 0 , 0);
    stroke(255 , 0 , 0);
    circle( 50 , 50 , 80);
    
        fill(0 , 255 , 0);
    stroke(0 , 255 , 0);
    rect(90, 35, 400 , 20);

    fill(255 , 0 , 0);
    stroke(255 , 0 , 0);
    circle( 530 , 50 , 80);
    
        fill(0 , 255 , 0);
    stroke(0 , 255 , 0);
    rect(90, 350, 400 , 20);

    fill(255 , 0 , 0);
    stroke(255 , 0 , 0);
    circle( 50 , 360 , 80);
    
        fill(0 , 255 , 0);
    stroke(0 , 255 , 0);
    rect(520, 90, 20 , 230);

    fill(255 , 0 , 0);
    stroke(255 , 0 , 0);
    circle( 530 , 360 , 80);
    
        fill(0 , 255 , 0);
    stroke(0 , 255 , 0);
    rect(40, 90, 20 , 230);
}