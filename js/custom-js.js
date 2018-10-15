$(document).ready(function(){
	
	function draw_shape(){
		var mycanvas=document.getElementById("canvas");  
		var canvas_2d=mycanvas.getContext('2d');  
		canvas_2d.fillStyle='rgb(0,0,255)';   
		canvas_2d.fillRect(30,30,300,300);             
		canvas_2d.fillStyle='rgba(0,255,0,0.5)';    
		canvas_2d.fillRect(90,90,300,300);      
		canvas_2d.fillStyle='rgba(255,0,0,0.25)';    
		canvas_2d.fillRect(150,150,300,300);
	}
	draw_shape();
	
	
	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	function draw() {
	  var ctx = document.getElementById('canvas1').getContext('2d');

	  var sin = Math.sin(Math.PI/6);
	  var cos = Math.cos(Math.PI/6);
	  ctx.translate(200, 200);
	  var c = 0;
	  for (var i=0; i <= 12; i++) {
		c = Math.floor(255 / 12 * i);
		ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
		ctx.fillRect(0, 0, 100, 10);
		ctx.transform(cos, sin, -sin, cos, 10, 10);
	  }
	  
	  ctx.setTransform(-1, 0, 0, 1, 100, 100);
	  ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
	  ctx.fillRect(0, 50, 100, 100);
	}
	draw();
	
	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	function draw_path(){
		var ctx = document.getElementById('canvas2').getContext('2d');
		ctx.strokeStyle = "red";
		ctx.fillStyle = "green";
		
		ctx.beginPath();
		
		ctx.arc(180,180,70,0,Math.PI*2,true);
		ctx.moveTo(230,180);
		ctx.arc(180,180,50,0,Math.PI,false);
		ctx.moveTo(155,150);
		ctx.arc(150,150,5,0,Math.PI*2,true);
		ctx.moveTo(215,150);
		ctx.arc(210,150,5,0,Math.PI*2,true);
		ctx.fillText("Happy", 165, 270);
		ctx.stroke();
	}
	draw_path();
	
	
	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	
	function clock(){
	  var now = new Date();
	  var ctx = document.getElementById('canvas3').getContext('2d');
	  ctx.save();
	  ctx.clearRect(0,0,150,150);
	  ctx.translate(75,75);
	  ctx.scale(0.4,0.4);
	  ctx.rotate(-Math.PI/2);
	  ctx.strokeStyle = "black";
	  ctx.fillStyle = "white";
	  ctx.lineWidth = 8;
	  ctx.lineCap = "round";

	  // Hour marks
	  ctx.save();
	  for (var i=0;i<12;i++){
		ctx.beginPath();
		ctx.rotate(Math.PI/6);
		ctx.moveTo(100,0);
		ctx.lineTo(120,0);
		ctx.stroke();
	  }
	  ctx.restore();

	  // Minute marks
	  ctx.save();
	  ctx.lineWidth = 5;
	  for (i=0;i<60;i++){
		if (i%5!=0) {
		  ctx.beginPath();
		  ctx.moveTo(117,0);
		  ctx.lineTo(120,0);
		  ctx.stroke();
		}
		ctx.rotate(Math.PI/30);
	  }
	  ctx.restore();
	 
	  var sec = now.getSeconds();
	  var min = now.getMinutes();
	  var hr  = now.getHours();
	  hr = hr>=12 ? hr-12 : hr;

	  ctx.fillStyle = "black";

	  // write Hours
	  ctx.save();
	  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
	  ctx.lineWidth = 14;
	  ctx.beginPath();
	  ctx.moveTo(-20,0);
	  ctx.lineTo(80,0);
	  ctx.stroke();
	  ctx.restore();

	  // write Minutes
	  ctx.save();
	  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
	  ctx.lineWidth = 10;
	  ctx.beginPath();
	  ctx.moveTo(-28,0);
	  ctx.lineTo(112,0);
	  ctx.stroke();
	  ctx.restore();
	 
	  // Write seconds
	  ctx.save();
	  ctx.rotate(sec * Math.PI/30);
	  ctx.strokeStyle = "#D40000";
	  ctx.fillStyle = "#D40000";
	  ctx.lineWidth = 6;
	  ctx.beginPath();
	  ctx.moveTo(-30,0);
	  ctx.lineTo(83,0);
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.arc(0,0,10,0,Math.PI*2,true);
	  ctx.fill();
	  ctx.beginPath();
	  ctx.arc(95,0,10,0,Math.PI*2,true);
	  ctx.stroke();
	  ctx.fillStyle = "rgba(0,0,0,0)";
	  ctx.arc(0,0,3,0,Math.PI*2,true);
	  ctx.fill();
	  ctx.restore();

	  ctx.beginPath();
	  ctx.lineWidth = 14;
	  ctx.strokeStyle = '#325FA2';
	  ctx.arc(0,0,142,0,Math.PI*2,true);
	  ctx.stroke();
	  ctx.restore();
	  window.requestAnimationFrame(clock);
	}
	window.requestAnimationFrame(clock);
	
	
	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	
	
	function anim_border(){
		var canvas4 = document.getElementById("canvas4");
		var offset = 0,i = 15;
		if(canvas4.getContext){
			var can2d = canvas4.getContext("2d");
			
		}else{
			canvas4.html("Your browser does'nt support canvas");
		}
		function draw(){
			can2d.clearRect(0, 0, canvas4.width, canvas4.height);
			can2d.setLineDash([i,4]);
			can2d.lineDashOffset = -offset;
			//can2d.strokeRect(10,10,canvas4.width-20,canvas4.height-20);
			can2d.font = "200px serif";
			can2d.textBaseline = "hanging";
			can2d.lineWidth=2;
			can2d.font = "300px serif";
			can2d.shadowColor = "rgba(0,0,0,0.12)";
			can2d.shadowOffsetX = 5;
			can2d.shadowOffsetY = 3;
			can2d.shadowBlur = 0;
			var gradient = can2d.createLinearGradient(0, 0, 200, 150);
			gradient.addColorStop(0, "blue");
			gradient.addColorStop(1, "red");
			can2d.strokeStyle = gradient;
			can2d.strokeText("K", 10, 50);
		}
		function march(){
			offset++;
			if(offset > i*i){
				offset = 0;
			}
			draw();
			setTimeout(march,100);			
		}
		march();
	}
	anim_border();
	
	
	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	
	function draw_arc() {
	  var canvas = document.getElementById('canvas5');
	  if (canvas.getContext){
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.arc(200, 200, 200, 0, Math.PI*1.75, true);
		ctx.lineTo(200, 200);
		ctx.closePath();
		ctx.fill();
		
		/*for(var i=0;i<4;i++){
		  for(var j=0;j<3;j++){
			ctx.beginPath();
			var x = 25+j*50; // x coordinate
			var y = 25+i*50; // y coordinate
			var radius = 20; // Arc radius
			var startAngle = 0; // Starting point on circle
			var endAngle = Math.PI+(Math.PI*j)/2; // End point on circle
			var anticlockwise = i%2==0 ? false : true; // clockwise or anticlockwise

			ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

			if (i>1){
			  ctx.fill();
			} else {
			  ctx.stroke();
			}
		  }
		}*/
	  }
	}
	draw_arc();
	
	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	function space(){
		var sun = new Image();
		var moon = new Image();
		var earth = new Image();
		function init(){
		  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
		  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
		  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
		  window.requestAnimationFrame(draw);
		}

	function draw() {
		var ctx = document.getElementById('canvas6').getContext('2d');

		ctx.globalCompositeOperation = 'destination-over';
		ctx.clearRect(0,0,500,500); // clear canvas

		ctx.fillStyle = 'rgba(0,0,0,0.4)';
		ctx.strokeStyle = 'rgba(0,153,255,0.6)';
		ctx.save();
		ctx.translate(250,250);

		// Earth
		var time = new Date();
		ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
		ctx.translate(105,0);
		ctx.fillRect(0,-12,50,24); // Shadow
		ctx.drawImage(earth,-12,-12);

		// Moon
		ctx.save();
		ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
		ctx.translate(0,28.5);
		ctx.drawImage(moon,-3.5,-3.5);
		ctx.restore();

		ctx.restore();

		ctx.beginPath();
		ctx.arc(250,250,105,0,Math.PI*2,false); // Earth orbit
		ctx.stroke();

		ctx.drawImage(sun,0,0,500,500);

		window.requestAnimationFrame(draw);
		}

		init();
	}
	space();
	
	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	

	function loader(){
		var canvas = document.getElementById("canvas7");
		var ctx = canvas.getContext("2d");
		var W = canvas.width;
		var H = canvas.height;
		var degrees = 0;
		var new_degrees = 0;
		var difference = 0;
		var color = "lightgreen"; 
		var bgcolor = "#222";
		var animation_loop, redraw_loop;

		/* function init()
		{
			ctx.clearRect(0, 0, W, H);
			ctx.beginPath();			
			ctx.strokeStyle = bgcolor;
			ctx.lineWidth = 50;
			ctx.arc(W/2, H/2, 150, 0, Math.PI*3, true);
			ctx.stroke();
			var radians = degrees * Math.PI / 180;
			ctx.beginPath();
			ctx.strokeStyle = color;
			ctx.lineWidth = 50;
			ctx.arc(W/2, H/2, 150, 0 - 180*Math.PI/180, radians - 180*Math.PI/180, false); 
			ctx.stroke();
			ctx.save();
			ctx.translate(canvas.width / 2, canvas.height / 2);
			ctx.rotate((radians - 90*Math.PI/90)-Math.PI/2);
			ctx.fillStyle = 'red';
			ctx.beginPath();
			ctx.moveTo(0, -25);
			ctx.lineTo(6, 0);
			ctx.lineTo(0, 167);
			ctx.lineTo(-6, 0);
			ctx.lineTo(0, -25);
			ctx.fill();
			ctx.restore();		
		} */
		
		
		function init()
		{
			ctx.clearRect(0, 0, W, H);
			ctx.beginPath();			
			ctx.strokeStyle = bgcolor;
			ctx.lineWidth = 50;
			ctx.arc(W/2, H/2, 150, 0, Math.PI*2, true);
			ctx.stroke();
			var radians = degrees * Math.PI / 48;
			ctx.beginPath();
			var gradient = ctx.createLinearGradient(0, 0, 230, 130);
			gradient.addColorStop(0, "red");
			gradient.addColorStop(0.5, "yellow");
			gradient.addColorStop(1, "orange");
			ctx.strokeStyle = gradient;
			ctx.lineWidth = 50;
			ctx.arc(W/2, H/2, 150, 0, radians - Math.PI/45, false); 
			ctx.stroke();
			ctx.save();		
		}
		
		function draw()
		{
			if(typeof animation_loop != undefined) clearInterval(animation_loop);
			new_degrees = Math.round(50);
			difference = new_degrees - degrees;
			animation_loop = setInterval(animate_to, 2000/difference);
		}
		
		function animate_to()
		{
			if(degrees == new_degrees) 
				clearInterval(animation_loop);			
			if(degrees < new_degrees)
				degrees++;
			else
				degrees--;
				
			init();
		}

		draw();
		//redraw_loop = setInterval(draw, 2000);
	}
	loader();

	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

	
	function particless(){		
		var canvas = document.getElementById("canvas8"),
        ctx = canvas.getContext('2d'),
		particles = [],
		patriclesNum = 50,
				   w = 500,
				   h = 500,
			  colors = ['red','green','orange','blue','blue'];
		 
		canvas.width = $(document).width();
		canvas.height = $('.section').height();
		w = canvas.width,
		h = canvas.height;
		//canvas.style.left = (window.innerWidth - 500)/2+'px';

		if(window.innerHeight>500)
		//canvas.style.top = (window.innerHeight - 500)/2+'px';
		  
		function Factory(){  
		  this.x =  Math.round( Math.random() * w);
		  this.y =  Math.round( Math.random() * h);
		  this.rad = Math.round( Math.random() * 1) + 1;
		  this.rgba = colors[ Math.round( Math.random() * 3) ];
		  this.vx = Math.round( Math.random() * 3) - 1.5;
		  this.vy = Math.round( Math.random() * 3) - 1.5;
		}
		   
		function draw(){
		  ctx.clearRect(0, 0, w, h);
		  ctx.globalCompositeOperation = 'lighter';
		  for(var i = 0;i < patriclesNum; i++){
			var temp = particles[i];
			var factor = 1;
			 
			for(var j = 0; j<patriclesNum; j++){
			  
			   var temp2 = particles[j];
			   ctx.linewidth = 0.5;
			  
			   if(temp.rgba == temp2.rgba && findDistance(temp, temp2)<50){
				  ctx.strokeStyle = temp.rgba;
				  ctx.beginPath();
				  ctx.moveTo(temp.x, temp.y);
				  ctx.lineTo(temp2.x, temp2.y);
				  ctx.stroke();
				  factor++;
			   }
			}
			
			ctx.fillStyle = temp.rgba;
			ctx.strokeStyle = temp.rgba;
			
			ctx.beginPath();
			ctx.arc(temp.x, temp.y, temp.rad*factor, 0, Math.PI*2, true);
			ctx.fill();
			ctx.closePath();
			
			ctx.beginPath();
			ctx.arc(temp.x, temp.y, (temp.rad+5)*factor, 0, Math.PI*2, true);
			ctx.stroke();
			ctx.closePath();
			
			temp.x += temp.vx;
			temp.y += temp.vy;
			
			if(temp.x > w)temp.x = 0;
			if(temp.x < 0)temp.x = w;
			if(temp.y > h)temp.y = 0;
			if(temp.y < 0)temp.y = h;
		  }
		}

		function findDistance(p1,p2){  
		  return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
		}

		window.requestAnimFrame = (function(){
		  return  window.requestAnimationFrame       ||
				  window.webkitRequestAnimationFrame ||
				  window.mozRequestAnimationFrame    ||
				  function( callback ){
					window.setTimeout(callback, 1000 / 60);
				  };
		})();

		(function init(){
		  for(var i = 0; i < patriclesNum; i++){
			particles.push(new Factory);
		  }
		})();

		(function loop(){
		  draw();
		  requestAnimFrame(loop);
		})();
	
	}
	particless();

	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	
	function animate_item(){
		var x =  0;
		var y = 100;
		var speed = 5;

		function animate() {
			reqAnimFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

			reqAnimFrame(animate);
			x += speed;
			if(x <= 0 || x >= $(document).width()){
				speed = -speed;
			}
			draw();
		}

		function draw() {
			var canvas  = document.getElementById("canvas9");
			var context = canvas.getContext("2d");			
			canvas.width = $(document).width();
			canvas.height = $('.section').height();
			context.fillStyle = "orange";
			context.beginPath();
			context.arc(x,y,50,0,5*Math.PI);
			context.fill();
		}

		animate();
	}	
	animate_item();
	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	
	var Gear = function(x, y, connectionRadius, teeth, fillStyle, strokeStyle) {
		// Gear parameters
		this.x = x;
		this.y = y;
		//this.connectionRadius = connectionRadius;
		this.teeth = teeth;

		// Render parameters
		this.fillStyle = fillStyle;
		this.strokeStyle = strokeStyle;

		// Calculated properties
		this.diameter = teeth * 4; // Each touth is built from two circles of connectionRadius
		//console.log(this.diameter);
		this.radius = this.diameter / (2 * Math.PI); // D = 2 PI r

		// Animation properties
		this.phi0 = 0; // Starting angle
		this.angularSpeed = 0; // Speed of rotation in degrees per second
		this.createdAt = new Date(); // Timestamp
	}


	Gear.prototype.render = function (context) {
		// Update rotation angle
		var ellapsed = new Date() - this.createdAt;
		var phiDegrees = this.angularSpeed * (ellapsed / 50000);
		var phi = this.phi0 + phiDegrees; // Current angle

		// Set-up rendering properties
		context.fillStyle = this.fillStyle;
		context.strokeStyle = this.strokeStyle;
		context.lineCap = 'round';
		context.lineWidth = 1;

		// Draw gear body
		context.beginPath();
		for (var i = 0; i < this.teeth * 2; i++) {
			var alpha = 2 * Math.PI * (i / (this.teeth * 2)) + phi;
			// Calculate individual touth position
			var x = this.x + Math.cos(alpha) * this.radius;
			var y = this.y + Math.sin(alpha) * this.radius;
			// Draw a half-circle, rotate it together with alpha
			// On every odd touth, invert the half-circle
			context.arc(x, y, this.connectionRadius, -Math.PI / 2 + alpha, Math.PI / 2 + alpha, i % 2 == 0);
		}
		context.fill();
		context.stroke();

		// Draw center circle
		context.beginPath();
		context.arc(this.x, this.y, this.connectionRadius, 0, 2 * Math.PI, true);
		context.fill();
		context.stroke();
	}

	var canvas = document.getElementById('canvas10');
	var context = canvas.getContext('2d');
	var W = canvas.width;
	var H = canvas.height;
	var gear = new Gear(W / 2, H / 2, 5, 12, "white", "rgba(61, 142, 198, 1)");
	gear.angularSpeed = 36;
	setInterval(function () {
		canvas.width = canvas.width;
		gear.render(context);
	}, 20);
	
	/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

	
	/*function draw(){
		var a = document.getElementById("canvas11");
		var b = a.getContext("2d");
		a.width = $(document).width();
		a.height = $('.section').height()+1000;
		//b.font = '40pt Calibri';
		
		b.font = 'italic small-caps 40pt Calibri';
		b.fillStyle = 'purple';
		b.fillText('Hello World!', 0, 100);
	
		
		b.beginPath();
		b.moveTo(0, 200);//start point
		b.lineTo(200, 200);
		b.lineJoin = 'round';
		b.lineTo(280, 300);
		b.lineJoin = 'round';
		b.lineTo(320, 300);
		b.lineJoin = 'round';
		b.lineTo(500, 400);
		b.lineJoin = 'round';
		b.arc(500+150, 400, 150, 1.5 * Math.PI, 2 * Math.PI, false);
		b.quadraticCurveTo(800, 600, 1200, 300);
		b.bezierCurveTo(1400, 150, 1300, 400, 1500, 250);
		b.lineTo(1700, 250);
			
		b.shadowColor = '#999';
		b.shadowBlur = 20;
		b.shadowOffsetX = 5;
		b.shadowOffsetY = 15;
			
		b.lineCap = 'round';
		b.lineWidth = 10;
		b.strokeStyle="#333";
		b.stroke();
	}
		
	window.requestAnimationFrame(draw);*/
	
	



function anim_border(){
		
			var canvas4 = document.getElementById("canvas11");
			var ctx = canvas4.getContext("2d");
			function resize(){
				if($(window).width()>767){
					canvas4.width = $(document).width();
				}else{
					canvas4.width = $(window).width();
				}
			}
			resize();
			
			canvas4.height = $('.section').height();
			// set starting values
			var fps = 60;
			var percent = 0
			var direction = 1;

			// start the animation
			animate();

			function animate() {

				// set the animation position (0-100)
				percent += direction;
				if (percent < 0) {
					percent = 0;
					direction = 1;
				};
				if (percent > 500) {
					percent = 500;
					direction = 0;
					//percent = 0;
					setTimeout(function () {
						percent = 0;					
						direction = 1;
					}, 600);
					
				};

				draw(percent);

				// request another frame
				setTimeout(function () {
					requestAnimationFrame(animate);
				}, 1000 / fps);
			}

			// draw the current frame based on sliderValue
			function draw(sliderValue) {

				// redraw path
				ctx.clearRect(0, 0, canvas4.width, canvas4.height);
				ctx.lineWidth = 10;
				
				ctx.beginPath();
				ctx.setLineDash([0, 0]);
				ctx.moveTo(0, 200);//start point
				ctx.lineTo(200, 200);
				ctx.lineJoin = 'round';
				ctx.lineTo(280, 300);
				ctx.lineJoin = 'round';
				ctx.lineTo(320, 300);
				ctx.lineJoin = 'round';
				ctx.lineTo(500, 400);
				ctx.lineJoin = 'round';
				//ctx.arc(500+150, 400, 150, 1.5 * Math.PI, 2 * Math.PI, false);
				ctx.quadraticCurveTo(600, 200, 1200, 300);
				ctx.bezierCurveTo(1400, 150, 1300, 400, 1500, 250);
				ctx.lineTo(1700, 250);
					
 				ctx.shadowColor = '#ccc';
				ctx.shadowBlur = 20;
				ctx.shadowOffsetX = 5;
				ctx.shadowOffsetY = 20; 
					
				ctx.lineCap = 'round';				
				ctx.strokeStyle="#333";
				ctx.stroke();

				// draw the tracking rectangle
				var xy;

				if (sliderValue < 50) {
					var percent = sliderValue/50;
					xy = getLineXYatPercent({x: 0,y: 200}, {x: 200,y: 200}, percent);
				} else if (sliderValue < 100) {
					var percent = (sliderValue-50)/50;
					xy = getLineXYatPercent({x: 200,y: 200}, {x: 280,y: 300}, percent);
				} else if (sliderValue < 150) {
					var percent = (sliderValue-100)/50;
					xy = getLineXYatPercent({x: 280,y: 300}, {x: 320,y: 300}, percent);
				} else if (sliderValue < 200) {
					var percent = (sliderValue-150)/50;
					xy = getLineXYatPercent({x: 320,y: 300}, {x: 500,y: 400}, percent);
				} else if (sliderValue < 300) {
					var percent = (sliderValue-200)/100;
					xy = getQuadraticBezierXYatPercent({x: 500,y: 400}, {x: 600,y: 200}, {x: 1200,y: 300}, percent);
				} else if (sliderValue < 400) {
					var percent = (sliderValue-300)/100;
					xy = getCubicBezierXYatPercent({x: 1200,y: 300}, {x: 1400,y: 150}, {x: 1300,y: 400}, {x: 1500,y: 250}, percent);
				} else {
					var percent = (sliderValue-400)/100;
					xy = getLineXYatPercent({x: 1500,y: 250}, {x: 1700,y: 250}, percent);					
				}
				//drawRect(xy, "red");
				drawDot(xy, "red");
			}


			// draw tracking rect at xy
			/*function drawRect(point, color) {
				ctx.fillStyle = "red";
				ctx.strokeStyle = "red";
				//ctx.lineWidth = 5;
				ctx.beginPath();
				ctx.rect(point.x, point.y, 10, 10);
				ctx.fill();
				ctx.stroke();
				
			}*/

			// draw tracking dot at xy
			function drawDot(point, color) {
				ctx.fillStyle = color;
				ctx.fillStyle = "yellow";
				ctx.strokeStyle = "red";
				ctx.lineWidth = 1;
				ctx.setLineDash([5, 8]);
				ctx.beginPath();
				ctx.arc(point.x, point.y, 5, 0, Math.PI * 2, false);
				ctx.moveTo(0, 0);
				ctx.lineTo(point.x, point.y);
				//ctx.closePath();
				ctx.fill();
				ctx.stroke();
			}

			// line: percent is 0-1
			function getLineXYatPercent(startPt, endPt, percent) {
				var dx = endPt.x - startPt.x;
				var dy = endPt.y - startPt.y;
				var X = startPt.x + dx * percent;
				var Y = startPt.y + dy * percent;
				return ({
					x: X,
					y: Y
				});
			}

			// quadratic bezier: percent is 0-1
			function getQuadraticBezierXYatPercent(startPt, controlPt, endPt, percent) {
				var x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
				var y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
				return ({
					x: x,
					y: y
				});
			}
			// cubic bezier percent is 0-1
			function getCubicBezierXYatPercent(startPt, controlPt1, controlPt2, endPt, percent) {
				var x = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
				var y = CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
				return ({
					x: x,
					y: y
				});
			}
			// cubic helper formula at percent distance
			function CubicN(pct, a, b, c, d) {
				var t2 = pct * pct;
				var t3 = t2 * pct;
				return a + (-a * 3 + pct * (3 * a - a * pct)) * pct + (3 * b + pct * (-6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 + d * t3;
			}	

			$(window).resize(function(){
				resize();
			});			
		}
		anim_border();
		
		
		
		function animm(){
			var start = null;
			var element = document.getElementById("canvas12");
			element.style.position = 'absolute';

			function step(timestamp) {
			  if (!start) start = timestamp;
			  var progress = timestamp - start;
			  element.style.left = Math.min(progress/10, 200) + "px";
			  if (progress < 2000) {
				window.requestAnimationFrame(step);
			  }
			}

			window.requestAnimationFrame(step);
		}
		animm();
		

});