var song ;
var slider;
var button;
var amp;
var volHistory=[];
function toggleSong(){
	if(song.isPlaying()){
		song.pause();
		$("#play").attr("src","img/play.png");
	}
	else{
		$("#play").attr("src","img/pausa.png");
		song.play();
	}
}

function preload(){
	song=loadSound("js/cancion.mp3");
}

function setup() {
  var canvas = createCanvas(windowWidth,(windowHeight/100)*70);
  canvas.parent('inicio');
  song.play();
  amp=new p5.Amplitude();
}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight/100)*70);
}

function draw() {
	background(29,28,38);
	var vol =amp.getLevel();
	volHistory.push(vol);
	stroke(189,17,78);
	noFill();
	beginShape();
	for(var i=0;i<volHistory.length;i++){
		var y=map(volHistory[i],0,1,height,0);
		vertex(i,y);
	}
	endShape();
	if(volHistory.length>width){
		volHistory.splice(0,1);
	}
	//ellipse(100,100,200, vol * 200);
}