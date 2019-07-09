noStroke();
background(0, 0, 0);
var r = 255;
var g = 90;
var b = 0;
fill(r, g, b);

for (var bar = 0; bar < 360; bar += 30) {
    pushMatrix();
    translate(200, 200);
    rotate(bar + 30);
    rect(0, 0, 150, 15);
    fill(r += 5, g -= 1, b += 20);
    r -= 10;
    g += 5;
    b += 20;
    popMatrix();
}

//draws a wheel out of bars with different colors, using for loop