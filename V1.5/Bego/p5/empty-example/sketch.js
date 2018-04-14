var song ;
var slider;
var button;
var amp;
var volHistory=[];
function toggleSong(){
	if(song.isPlaying()){
		song.pause();
	}
	else{
		song.play();
	}
}

function preload(){
	song=loadSound("cancion.mp3");
}

function setup() {
  createCanvas(600,1200);
  button=createButton('toggle'); //lo que se escribe en el boton 
  button.mousePressed(toggleSong);
  song.play();
  amp=new p5.Amplitude();
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