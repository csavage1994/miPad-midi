function play(x){
    var audio = document.getElementsByClassName(x)[0];
    audio.play();
}

function centerPadLights(a, b, c, d, e) {
	a.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		y.style.backgroundColor = "#007FFF";
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 50);
	});

	b.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#ff0000";
		}, 50);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 100);
	});

	c.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#007FFF";
		}, 150);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 200);
	});

	d.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#ff0000";
		}, 200);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 250);
	});

	e.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#007FFF";
		}, 300);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 350);
	});
}

function cornerPadLights(a, b, c, d, e) {
	a.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		y.style.backgroundColor = "#00ff00";
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 40);
	});

	b.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#00ff00";
		}, 80);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 120);
	});

	c.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#00ff00";
		}, 160);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 200);
	});

	d.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#00ff00";
		}, 240);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 280);
	});

	e.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#00ff00";
		}, 320);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 360);
	});
};

function crossPadLights(a, b, c, d) {
	a.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		y.style.backgroundColor = "#dc00f5";
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 50);
	});

	b.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#dc00f5";
		}, 100);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 150);
	});

	c.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#dc00f5";
		}, 200);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 250);
	});

	d.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#dc00f5";
		}, 300);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 350);
	});
};

function xPads(a, b, c) {
	a.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		y.style.backgroundColor = "#ff8300";
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 75);
	});

	b.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#ff8300";
		}, 125);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 200);
	});

	c.forEach(function(x) {
		var y = document.getElementsByClassName(x)[0];
		setTimeout(function() {
			y.style.backgroundColor = "#ff8300";
		}, 275);
		setTimeout(function() {
			y.style.backgroundColor = "#f0f8ff"; 
		}, 325);
	});
};

function borderPads_LR(a, b, c, d, e, color) {
	var aa = document.getElementsByClassName(a)[0];
	aa.style.backgroundColor = color;
	setTimeout(function() {
		aa.style.backgroundColor = "#f0f8ff"; 
	}, 25);

	var bb = document.getElementsByClassName(b)[0];
	setTimeout(function() {
		bb.style.backgroundColor = color;
	}, 50);
	setTimeout(function() {
		bb.style.backgroundColor = "#f0f8ff"; 
	}, 75);

	var cc = document.getElementsByClassName(c)[0];
	setTimeout(function() {
		cc.style.backgroundColor = color;
	}, 100);
	setTimeout(function() {
		cc.style.backgroundColor = "#f0f8ff"; 
	}, 125);

	var dd = document.getElementsByClassName(d)[0];
	setTimeout(function() {
		dd.style.backgroundColor = color;
	}, 150);
	setTimeout(function() {
		dd.style.backgroundColor = "#f0f8ff"; 
	}, 175);

	var ee = document.getElementsByClassName(e)[0];
	setTimeout(function() {
		ee.style.backgroundColor = color;
	}, 200);
	setTimeout(function() {
		ee.style.backgroundColor = "#f0f8ff"; 
	}, 225);
};

function borderPads_Center(a, b, c, d, e, f, g, color) {
	var aa = document.getElementsByClassName(a)[0];
	aa.style.backgroundColor = color;
	setTimeout(function() {
		aa.style.backgroundColor = "#f0f8ff"; 
	}, 50);

	var bb = document.getElementsByClassName(b)[0];
	setTimeout(function() {
		bb.style.backgroundColor = color;
	}, 100);
	setTimeout(function() {
		bb.style.backgroundColor = "#f0f8ff"; 
	}, 150);

	var cc = document.getElementsByClassName(c)[0];
	setTimeout(function() {
		cc.style.backgroundColor = color;
	}, 200);
	setTimeout(function() {
		cc.style.backgroundColor = "#f0f8ff"; 
	}, 250);

	var dd = document.getElementsByClassName(d)[0];
	setTimeout(function() {
		dd.style.backgroundColor = color;
	}, 300);
	setTimeout(function() {
		dd.style.backgroundColor = "#f0f8ff"; 
	}, 350);

	var ee = document.getElementsByClassName(e)[0];
	setTimeout(function() {
		ee.style.backgroundColor = color;
	}, 400);
	setTimeout(function() {
		ee.style.backgroundColor = "#f0f8ff"; 
	}, 450);

	var ff = document.getElementsByClassName(f)[0];
	setTimeout(function() {
		ff.style.backgroundColor = color;
	}, 500);
	setTimeout(function() {
		ff.style.backgroundColor = "#f0f8ff"; 
	}, 550);

	var gg = document.getElementsByClassName(g)[0];
	setTimeout(function() {
		gg.style.backgroundColor = color;
	}, 600);
	setTimeout(function() {
		gg.style.backgroundColor = "#f0f8ff"; 
	}, 650);
};
