var gl;
var shaderProgram;
var vertPosAttribLoc;
var quadBuffer;
var offset = [ 0.0, 0.0 ];
var offsetSpeed = [ 1.0 / 640, 1.0 / 480];
var scale = 4.0;
var maxIters = 20;
var c = [ 0.1, 0.65 ];
var colorMode = 0;

var offsetLoc;
var scaleLoc;
var maxItersLoc;
var cLoc;
var aspectLoc;
var aspect = 640.0 / 480.0;
var clickX, clickY;
var clickOffset = [0.0, 0.0];

function mouseDrag(event) {
	var x = event.clientX - clickX;
	var y = event.clientY - clickY;
	offset[0] = clickOffset[0] - x * offsetSpeed[0] * scale;
	offset[1] = clickOffset[1] + y * offsetSpeed[1] * scale;
	gl.uniform2fv(offsetLoc, new Float32Array(offset));
	render();
}

function main() {
	var canvas = document.getElementById('Canvas');
	gl = initWebGL(canvas);
	offsetSpeed = [1.0 / canvas.width, 1.0 / canvas.height];
	aspect = (canvas.width + 0.0) / (canvas.height + 0.0);

	if(!gl) return;

	gl.clearColor(1.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	var vertShader = getShader(gl, 'shader-vs', gl.VERTEX_SHADER);
	var fragShader = getShader(gl, 'shader-fs', gl.FRAGMENT_SHADER);

	shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertShader);
	gl.attachShader(shaderProgram, fragShader);

	gl.linkProgram(shaderProgram);

	if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		console.log('Unable to link: ' + gl.getProgramInfoLog(shaderProgram));
	}

	gl.useProgram(shaderProgram);
	
	offsetLoc = gl.getUniformLocation(shaderProgram, "offset");
	scaleLoc = gl.getUniformLocation(shaderProgram, "scale");
	maxItersLoc = gl.getUniformLocation(shaderProgram, "maxIters");
	aspectLoc = gl.getUniformLocation(shaderProgram, "aspect");
	colorModeLoc = gl.getUniformLocation(shaderProgram, "colorMode");
	cLoc = gl.getUniformLocation(shaderProgram, "c");

	gl.uniform2fv(offsetLoc, new Float32Array(offset));
	gl.uniform1f(scaleLoc, scale);
	gl.uniform1i(maxItersLoc, maxIters);
	gl.uniform1f(aspectLoc, aspect);
	gl.uniform2fv(cLoc, new Float32Array(c));
	gl.uniform1i(colorModeLoc, colorMode);

	var cxSlider = document.getElementById("c-x-range");
	cxSlider.oninput = function() {
		c[0] = parseFloat(this.value);
		document.getElementById("titleh1").innerHTML =
			"Julia Set of Z<sup>2</sup> + C where C = " + c[0] + " + " + c[1] + "i";
		gl.uniform2fv(cLoc, new Float32Array(c));
		render();
	}
	var cySlider = document.getElementById("c-y-range");
	cySlider.oninput = function() {
		c[1] = parseFloat(this.value);
		document.getElementById("titleh1").innerHTML =
			"Julia Set of Z<sup>2</sup> + C where C = " + c[0] + " + " + c[1] + "i";
		gl.uniform2fv(cLoc, new Float32Array(c));
		render();
	}
	canvas.addEventListener("mousedown", function (event) {
		clickX = event.clientX;
		clickY = event.clientY;
		clickOffset[0] = offset[0];
		clickOffset[1] = offset[1];
		canvas.addEventListener("mousemove", mouseDrag, false);
	}, false);
	canvas.addEventListener("mouseup", function (event) {
		canvas.removeEventListener("mousemove", mouseDrag);
	}, false);

	var zoomSlider = document.getElementById("zoom-range");
	zoomSlider.oninput = function() {
		scale = 4.0 / parseFloat(this.value);
		gl.uniform1f(scaleLoc, scale);
		render();
	}
	var maxItersSlider = document.getElementById("maxiters-range");
	maxItersSlider.oninput = function() {
		maxIters = parseInt(this.value);
		gl.uniform1i(maxItersLoc, maxIters);
		render();
	}
	var colorModeSlider = document.getElementById("colormode-range");
	colorModeSlider.oninput = function() {
		mode = parseInt(this.value);
		gl.uniform1i(colorModeLoc, mode);
		render();
	}
	
	vertPosAttribLoc = gl.getAttribLocation(shaderProgram, 'vPos');
	gl.enableVertexAttribArray(vertPosAttribLoc);

	quadBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
	var vertices = [
		1.0, 1.0, 0.0,
		-1.0, 1.0, 0.0,
		1.0, -1.0, 0.0,
		-1.0, -1.0, 0.0
	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	gl.vertexAttribPointer(vertPosAttribLoc, 3, gl.FLOAT, false, 0, 0);

	document.getElementById("titleh1").innerHTML =
		"Julia Set of Z<sup>2</sup> + C where C = " + c[0] + " + " + c[1] + "i";
	render();
}

function initWebGL(canvas) {
	gl = null;
	gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	return gl;
}

function getShader(gl, id, type) {
	var shaderScript = document.getElementById(id);
	var source = shaderScript.text;
	var shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.log('An error occurred compiling the shaders: ' +
			gl.getShaderInfoLog(shader));
		console.log('Shader id: ' + id);
		console.log('Shader source: ' + source);
		gl.deleteShader(shader);
		return null;
	}
	return shader;
}

function render() {
	gl.disable(gl.DEPTH_TEST);
	gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}



