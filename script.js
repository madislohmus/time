var c = document.getElementById("clock");
var size = c.width;
var radius = size / 2;
var ctx = c.getContext("2d");

// second hand
var s = document.createElement('canvas');
s.width = 0.8 * radius;
s.height = 0.1 * radius;
var secondHandWidth = 0.007 * radius;
var crescentStart = 0.16 * s.width;
var crescentHeight = 0.5 * s.height;
sctx = s.getContext('2d');
sctx.beginPath();
sctx.moveTo(0.2 * s.width, s.height / 2 - secondHandWidth / 4);
sctx.lineTo(0.5 * s.width, s.height / 2 - secondHandWidth / 2);
sctx.lineTo(s.width * 0.99, s.height / 2);
sctx.lineTo(0.5 * s.width, s.height / 2 + secondHandWidth / 2);
sctx.lineTo(0.2 * s.width, s.height / 2 + secondHandWidth / 4);
sctx.closePath();
sctx.fill();
sctx.stroke();

sctx.beginPath();
sctx.moveTo(crescentStart, s.height / 2 - crescentHeight / 2);
sctx.bezierCurveTo(crescentStart + crescentHeight, s.height / 2 - crescentHeight / 2, crescentStart + crescentHeight, s.height / 2 + crescentHeight / 2, crescentStart, s.height / 2 + crescentHeight / 2);
sctx.bezierCurveTo(crescentStart + 3 * crescentHeight / 4, s.height / 2 + crescentHeight / 2, crescentStart + 3 * crescentHeight / 4, s.height / 2 - crescentHeight / 2, crescentStart, s.height / 2 - crescentHeight / 2);
sctx.closePath();
sctx.fill();
sctx.stroke();

// minute hand
var m = document.createElement('canvas');
m.width = 0.7 * radius;
m.height = 0.1 * radius;
var minuteHandWidth = 0.015 * radius;
var circleRadius = 0.015 * radius;
mctx = m.getContext('2d');
mctx.beginPath();
mctx.moveTo(0, m.height / 2 - minuteHandWidth / 4);
mctx.lineTo(0.4 * m.width, m.height / 2 - minuteHandWidth / 2);
mctx.lineTo(m.width * 0.85, m.height / 2 - minuteHandWidth / 6);
mctx.lineTo(m.width * 0.85, m.height / 2 + minuteHandWidth / 6);
mctx.lineTo(0.4 * m.width, m.height / 2 + minuteHandWidth / 2);
mctx.lineTo(0, m.height / 2 + minuteHandWidth / 4);
mctx.closePath();
mctx.fill();
mctx.stroke();

mctx.beginPath();
mctx.lineWidth = 2;
mctx.moveTo(m.width * 0.85 + circleRadius * 2, m.height / 2);
mctx.arc(m.width * 0.85 + circleRadius, m.height / 2, circleRadius, 0, 2 * Math.PI);
mctx.stroke();

mctx.beginPath();
mctx.moveTo(m.width * 0.85 + circleRadius * 2, m.height / 2 - minuteHandWidth * 0.1);
mctx.lineTo(m.width * 0.95, m.height / 2);
mctx.lineTo(m.width * 0.85 + circleRadius * 2, m.height / 2 + minuteHandWidth * 0.1);
mctx.closePath();
mctx.fill();
mctx.stroke();

// hour hand
var h = document.createElement('canvas');
h.width = 0.55 * radius;
h.height = 0.1 * radius;
var hourHandWidth = 0.015 * radius;
var circleRadius = 0.015 * radius;
hctx = h.getContext('2d');
hctx.beginPath();
hctx.moveTo(0, h.height / 2 - hourHandWidth / 4);
hctx.lineTo(0.3 * h.width, h.height / 2 - hourHandWidth / 2);
hctx.lineTo(h.width * 0.7, h.height / 2 - hourHandWidth / 6);
hctx.lineTo(h.width * 0.7, h.height / 2 + hourHandWidth / 6);
hctx.lineTo(0.3 * h.width, h.height / 2 + hourHandWidth / 2);
hctx.lineTo(0, h.height / 2 + hourHandWidth / 4);
hctx.closePath();
hctx.fill();
hctx.stroke();

hctx.beginPath();
hctx.lineWidth = 2;
hctx.moveTo(h.width * 0.7 + circleRadius * 2, h.height / 2);
hctx.arc(h.width * 0.7 + circleRadius, h.height / 2, circleRadius, 0, 2 * Math.PI);
hctx.stroke();

hctx.beginPath();
hctx.moveTo(h.width * 0.7 + circleRadius * 2, h.height / 2 - hourHandWidth * 0.1);
hctx.lineTo(h.width * 0.9, h.height / 2);
hctx.lineTo(h.width * 0.7 + circleRadius * 2, h.height / 2 + hourHandWidth * 0.1);
hctx.closePath();
hctx.fill();
hctx.stroke();


function clock() {
	ctx.clearRect(0, 0, c.width, c.height);
	
	ctx.beginPath();
	ctx.arc(radius, radius, radius * 0.9, 0, 2 * Math.PI);
	ctx.fillStyle = "#ffffee";
	ctx.fill();
	ctx.moveTo(radius + 0.6 * radius, radius);
	ctx.arc(radius, radius, radius * 0.6, 0, 2 * Math.PI);
	ctx.moveTo(radius + 0.62 * radius, radius);
	ctx.arc(radius, radius, radius * 0.62, 0, 2 * Math.PI);
	ctx.moveTo(radius + 0.85 * radius, radius);
	ctx.arc(radius, radius, radius * 0.85, 0, 2 * Math.PI);
	ctx.moveTo(radius + 0.87 * radius, radius);
	ctx.arc(radius, radius, radius * 0.87, 0, 2 * Math.PI);
	for (i = 0; i < 60; i++) {
		var angle = 2 * Math.PI * i / 60.0 - Math.PI / 2.0;
		ctx.moveTo(radius + 0.6 * radius * Math.cos(angle), radius + 0.6 * radius * Math.sin(angle));
		ctx.lineTo(radius + 0.62 * radius * Math.cos(angle), radius + 0.62 * radius * Math.sin(angle));
		ctx.moveTo(radius + 0.85 * radius * Math.cos(angle), radius + 0.85 * radius * Math.sin(angle));
		ctx.lineTo(radius + 0.87 * radius * Math.cos(angle), radius + 0.87 * radius * Math.sin(angle));
	}
	ctx.stroke();
	
	ctx.beginPath();
	ctx.lineWidth = 2.5;
	for (i = 0; i < 12; i++) {
		var angle = 2 * Math.PI * i / 12.0 - Math.PI / 2.0;
		ctx.moveTo(radius + 0.6 * radius * Math.cos(angle), radius + 0.6 * radius * Math.sin(angle));
		ctx.lineTo(radius + 0.62 * radius * Math.cos(angle), radius + 0.62 * radius * Math.sin(angle));
		ctx.moveTo(radius + 0.83 * radius * Math.cos(angle), radius + 0.83 * radius * Math.sin(angle));
		ctx.lineTo(radius + 0.87 * radius * Math.cos(angle), radius + 0.87 * radius * Math.sin(angle));
	}	
	ctx.stroke();
	ctx.lineWidth = 1;
	
	ctx.beginPath();
	ctx.arc(radius, radius, radius * 0.02, 0, 2 * Math.PI);
	ctx.fillStyle = "#000000";
	ctx.fill();
	ctx.stroke();

	ctx.save();
	var numbers = ["I", "II", "III", "IV", "V", "VI", "VII", "IIX", "IX", "X", "XI", "XII"];
	var digitSize = size / 6;
	var compress = 2;
	for (i = 0; i < 12; i++){
		var digit = document.createElement('canvas');
		digit.width = digitSize;
		digit.height = digitSize;
		dctx = digit.getContext('2d');
		dctx.font = (digitSize / 2) + "px Times New Roman";
		dctx.textAlign = "center";
		dctx.fillText(numbers[i],digitSize / 2, digitSize / 2);
		ctx.translate(c.width / 2, c.height / 2);
		ctx.rotate(2 * Math.PI * (i+1) / 12);
		ctx.beginPath();
		ctx.drawImage(digit, radius * 0.85 * Math.cos(-Math.PI / 2) - digitSize / 2 / compress, radius * 0.85 * Math.sin(-Math.PI / 2), digitSize / compress, digitSize);
		ctx.stroke();
		ctx.translate(-c.width / 2, -c.height / 2);
		ctx.restore();
		ctx.save();
	}
	
	ctx.restore();

	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var handWidth = radius * 0.005;
	
	hours = hours % 12;
	hours = hours + minutes / 60.0 + seconds / 3600.0;
	hours = 2 * Math.PI * hours / 12.0 - Math.PI / 2;
	minutes = minutes + seconds / 60.0;
	minutes = 2 * Math.PI * minutes / 60.0 - Math.PI / 2;
	seconds = 2 * Math.PI * seconds / 60.0 - Math.PI / 2;
	
	// hour hand
	ctx.save();
	ctx.translate(c.width / 2, c.height / 2);
	ctx.rotate(hours);
	ctx.beginPath();
	ctx.drawImage(h, 0, -h.height/2, h.width, h.height);
	ctx.stroke();
	ctx.translate(-c.width / 2, -c.height / 2);
	ctx.restore();

	// minute hand
	ctx.save();
	ctx.translate(c.width / 2, c.height / 2);
	ctx.rotate(minutes);
	ctx.beginPath();
	ctx.drawImage(m, 0, -m.height/2, m.width, m.height);
	ctx.stroke();
	ctx.translate(-c.width / 2, -c.height / 2);
	ctx.restore();
	
	// second hand
	ctx.save();
	ctx.translate(c.width / 2, c.height / 2);
	ctx.rotate(seconds);
	ctx.beginPath();
	ctx.drawImage(s, -0.2 * radius, -s.height/2, s.width, s.height);
	ctx.stroke();
	ctx.translate(-c.width / 2, -c.height / 2);
	ctx.restore();
}

