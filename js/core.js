onLoad = function() {
	function setPixel(imageData, x, y, r, g, b, a) {
	    index = (x + y * imageData.width) * 4;
		imageData.data[index+0] = r;
		imageData.data[index+1] = g;
		imageData.data[index+2] = b;
		imageData.data[index+3] = a;
	}

	updateFunc = function() {
		if (numSteps > 0) {
			for (i = 0; i < 10000; i++) {
				var data = update();
				setPixel(imageData, data[0], data[1], data[2], data[3], data[4], 255); // 255 opaque
			}
		c.putImageData(imageData, 0, 0);
		}
		else {
			clearInterval(updateVar);
		}	
		numSteps --;
	}

	element = document.getElementById("canvas1");
	c = element.getContext("2d");

	// read the width and height of the canvas
	width = element.width;
	height = element.height;

	// create a new pixel array
	imageData = c.createImageData(width, height);

	init();
	var numSteps = NUM_STEPS;
	var updateVar = setInterval(updateFunc, TIME_STEP);

}
