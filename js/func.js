var NUM_STEPS = 1000;
var TIME_STEP = 1;

init = function() {

}

update = function() {
	// draw random dots
	x = Math.random() * width | 0; // |0 to truncate to Int32
	y = Math.random() * height | 0;
	r = Math.random() * 256 | 0;
	g = Math.random() * 256 | 0;
	b = Math.random() * 256 | 0;
	return [x,y,r,g,b];
}

