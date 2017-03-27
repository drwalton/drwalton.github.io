"use strict";

var ball;
var stage;
var queue;
var mouseDown = false;

var canvasWidth = 100;
var canvasHeight = 100;

var clamp = function (val, min, max) {
    if (val < min) {
        val = min;
    }
    if (val > max) {
        val = max;
    }
    return val;
};

function main () {
    var cvs = document.getElementById("GravityStage");
    canvasWidth = cvs.getAttribute("width");
    canvasHeight = cvs.getAttribute("height");
    queue = new createjs.LoadQueue(true);
    queue.installPlugin(createjs.Sound);
    queue.on("complete", createStage, this);
    queue.loadFile({id: "ball", src: "ball.png"});
}

var createStage = function (event) {
    stage = new createjs.Stage("GravityStage");
    stage.on("mouseleave", function (event) {
        mouseDown = false;
    });
    stage.on("mousedown", function (event) {
        mouseDown = true;
    });
    stage.on("pressup", function (event) {
        mouseDown = false;
    });

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener(stage);

    var rect = new createjs.Shape();
    rect.graphics.beginFill("#050505").drawRect(0, 0, canvasWidth, canvasHeight);
    rect.x = rect.y = 0;
    stage.addChild(rect);

    //ball
    var ballIm = queue.getResult("ball");
    ball = new createjs.Bitmap(ballIm);
    ball.gravityLevel = 0.8;
    ball.elasticity = 0.5;
    ball.gravitate = function (cog) {
        var d = {
            x: (cog.x - (ball.x + ball.image.width/2)),
            y: (cog.y - (ball.y + ball.image.height/2))
        };
        var dist = Math.sqrt(d.x * d.x + d.y * d.y);
        ball.v.x += this.gravityLevel * d.x / dist;
        ball.v.y += this.gravityLevel * d.y / dist;
    };
    ball.applyDownGravity = function () {
        ball.v.y += this.downGravityLevel;
    };
    ball.update = function () {
        ball.x += ball.v.x;
        ball.y += ball.v.y;
    };
    ball.collideWalls = function () {
        if (this.x < 0 || this.x > canvasWidth - ball.image.width) {
            this.v.x = -this.elasticity * this.v.x;
            this.v.y *= 1 - this.wallFrictionLevel;
            this.x = clamp(this.x, 0, canvasWidth - ball.image.width);
        }
        if (this.y < 0 || this.y > canvasHeight - ball.image.height) {
            if (this.y > canvasHeight - ball.image.height && this.v.y <= this.downGravityLevel + this.downGravityLevel * 0.05) {
                //Stop ball from bouncing very small amounts on ground.
                this.v.y = 0;
            }
            this.v.y = -this.elasticity * this.v.y;
            this.v.x *= 1 - this.wallFrictionLevel;
            this.y = clamp(this.y, 0, canvasHeight - ball.image.height);
        }
    };
    stage.addChild(ball);
    ball.x = ball.y = 10;
    ball.v = {x: 1, y: 1};
    ball.a = {x: 0, y: 0};
    ball.downGravityLevel = 0.1;
    ball.wallFrictionLevel = 0.1;

    //Controls
    var gravitySlider = document.getElementById("gravity-range");
    var gravityPar = document.getElementById("gravity-val");
    gravitySlider.oninput = gravitySlider.onchange = function () {
        ball.gravityLevel = parseFloat(this.value);
        gravityPar.innerHTML = this.value;
    };

    var bouncinessSlider = document.getElementById("bounciness-range");
    var bouncinessPar = document.getElementById("bounciness-val");
    bouncinessSlider.oninput = bouncinessSlider.onchange = function () {
        ball.elasticity = parseFloat(this.value);
        bouncinessPar.innerHTML = this.value;
    };

    var downGravSlider = document.getElementById("down-grav-range");
    var downGravPar = document.getElementById("down-grav-val");
    downGravSlider.oninput = downGravSlider.onchange = function () {
        ball.downGravityLevel = parseFloat(this.value);
        downGravPar.innerHTML = this.value;
    };

    var wallFrictionSlider = document.getElementById("wall-friction-range");
    var wallFrictionPar = document.getElementById("wall-friction-val");
    wallFrictionSlider.oninput = wallFrictionSlider.onchange = function () {
        ball.wallFrictionLevel = parseFloat(this.value);
        wallFrictionPar.innerHTML = this.value;
    };

    createjs.Ticker.on("tick", update);
    update.counter = 0
};

function update(event) {
    ball.alpha = 0.4;
    if (stage.mouseInBounds) {
        if (mouseDown) {
            ball.gravitate({x: stage.mouseX, y: stage.mouseY});
            ball.alpha = 1.0;
        }
    }
    ball.applyDownGravity();
    ball.update();
    ball.collideWalls();

    stage.update();
    update.counter++;
}
