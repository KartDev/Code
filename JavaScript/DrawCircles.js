/* 
https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/programming-transformations/pc/challenge-optical-illusion

Now, you will use the functions you just wrote to create an illusion with overlapping circles. 
One draws the illusion by drawing a large black circle at the center, then a slightly smaller white circle inside of that black circle, 
then a slightly smaller black circle inside of that white circle, and then a slighty smaller white circle inside of that black circle and so on.

For this challenge, use a while loop. Each iteration of the while loop should draw a black circle at the center of the screen, followed by a smaller white circle inside of it. 
To make the circles shrink in size, scale each circle by the factor scaleF using the scale command, and decrement scaleF by decreaseAmt after each circle is drawn.

Use the variable diameter for the unscaled size of the black and white circles. */


var diameter = 600;
var decreaseAmt = 0.02;
var scaleF = 1.0;

var drawWhiteCircle = function(diameter) {
    fill(255, 255, 255);
    ellipse(0, 0, diameter, diameter);
};

var drawBlackCircle = function(diameter) {
    fill(0, 0, 0);
    ellipse(0, 0, diameter, diameter);
};

background(255, 255, 255);

while (scaleF > 0) {
    //black circles
    pushMatrix();
    translate(200, 200);
    scale(scaleF);
    drawBlackCircle(diameter);
    scaleF -= decreaseAmt;
    popMatrix();

    //white circles
    pushMatrix();
    translate(200, 200);
    scale(scaleF);
    drawWhiteCircle(diameter);
    scaleF -= decreaseAmt;
    popMatrix();