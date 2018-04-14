var osci;
var playing = false;
//variables ADSR
var attackLevel = 1.0;
var releaseLevel = 0;
var attackTime = 0.001;
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;
var env;

//variables colores rgb random
var randomColor;

var cols = 8;
var rows = 8;

function setup(){

	createCanvas(800, 800);

	for (var i = 0; i < cols; i++){
		for (var j = 0; j < rows; j++){
			var x = i * 100;
			var y = j * 100;
			drawn();
			stroke(10);
			rect(x , y, 90, 90);
		}
	}

	env = new p5.Env();
	env.setADSR(attackTime, decayTime, susPercent, releaseTime);
	env.setRange(attackLevel, releaseLevel);

	osci = new p5.Oscillator();
	osci.setType('triangle');
	osci.freq(0);
	osci.amp(env);
	osci.start();
}

function drawn(){
	randomColor = color(random(255),random(255),random(255));
	fill(randomColor);													 
}

function playMusic(sound){
	osci.freq(sound);
	env.play();
	setup();

	/*if(!playing){
			osci.freq(sound);
			//osci.amp(0.5, 0.05);
			env.play();
			playing = true;
			backgroundColor = color(0, 255, 255);
		}
		else{
			//osci.amp(0, 0.5);
			playing = false;
			backgroundColor = color(255, 0, 255);
		}*/
}


function mouseClicked(){	

	//Primera fila
	if(mouseX > 0 && mouseX < 90 && mouseY < 90 && mouseY > 0){
		playMusic(987.767); //B5
	}

	if(mouseX > 100 && mouseX < 190 && mouseY < 90 && mouseY > 0){
		playMusic(1108.731); //C#6
	}

	if(mouseX > 200 && mouseX < 290 && mouseY < 90 && mouseY > 0){
		playMusic(1244.508); //D#6
	}

	if(mouseX > 300 && mouseX < 390 && mouseY < 90 && mouseY > 0){
		playMusic(1318.510); //E6
	}

	if(mouseX > 400 && mouseX < 490 && mouseY < 90 && mouseY > 0){
		playMusic(1489.978); //F#6
	}

	if(mouseX > 500 && mouseX < 590 && mouseY < 90 && mouseY > 0){
		playMusic(1661.219); //G#6
	}

	if(mouseX > 600 && mouseX < 690 && mouseY < 90 && mouseY > 0){
		playMusic(1864.655); //A#6
	}

	if(mouseX > 700 && mouseX < 790 && mouseY < 90 && mouseY > 0){
		playMusic(1975.533); //B6
	}

	//segunda fila
	if(mouseX > 0 && mouseX < 90 && mouseY < 190 && mouseY > 100){
		playMusic(1046.502); //C6
	}

	if(mouseX > 100 && mouseX < 190 && mouseY < 190 && mouseY > 100){
		playMusic(1174.659); //D6
	}

	if(mouseX > 200 && mouseX < 290 && mouseY < 190 && mouseY > 100){
		playMusic(1318.510); //E6
	}

	if(mouseX > 300 && mouseX < 390 && mouseY < 190 && mouseY > 100){
		playMusic(1396.913); //F6
	}

	if(mouseX > 400 && mouseX < 490 && mouseY < 190 && mouseY > 100){
		playMusic(1567.982); //G6
	}

	if(mouseX > 500 && mouseX < 590 && mouseY < 190 && mouseY > 100){
		playMusic(1760.000); //A6
	}

	if(mouseX > 600 && mouseX < 690 && mouseY < 190 && mouseY > 100){
		playMusic(1975.533); //B6
	}

	if(mouseX > 700 && mouseX < 790 && mouseY < 190 && mouseY > 100){
		playMusic(2093.005); //C7
	}

	//Tercera fila
	if(mouseX > 0 && mouseX < 90 && mouseY < 290 && mouseY > 200){
		playMusic(493.883); //B4
	}

	if(mouseX > 100 && mouseX < 190 && mouseY < 290 && mouseY > 200){
		playMusic(554.364); //C#5
	}

	if(mouseX > 200 && mouseX < 290 && mouseY < 290 && mouseY > 200){
		playMusic(622.254); //D#5
	}

	if(mouseX > 300 && mouseX < 390 && mouseY < 290 && mouseY > 200){
		playMusic(659.255); //E5
	}

	if(mouseX > 400 && mouseX < 490 && mouseY < 290 && mouseY > 200){
		playMusic(739.989); //F#5
	}

	if(mouseX > 500 && mouseX < 590 && mouseY < 290 && mouseY > 200){
		playMusic(830.609); //G#5
	}

	if(mouseX > 600 && mouseX < 690 && mouseY < 290 && mouseY > 200){
		playMusic(932.328); //A#5
	}

	if(mouseX > 700 && mouseX < 790 && mouseY < 290 && mouseY > 200){
		playMusic(987.767); //B5
	}



	//Cuarta fila
	if(mouseX > 0 && mouseX < 90 && mouseY < 390 && mouseY > 300){
		playMusic(523.251); //C5
	}

	if(mouseX > 100 && mouseX < 190 && mouseY < 390 && mouseY > 300){
		playMusic(587.330); //D5
	}

	if(mouseX > 200 && mouseX < 290 && mouseY < 390 && mouseY > 300){
		playMusic(659.255); //E5
	}

	if(mouseX > 300 && mouseX < 390 && mouseY < 390 && mouseY > 300){
		playMusic(698.456); //F5
	}

	if(mouseX > 400 && mouseX < 490 && mouseY < 390 && mouseY > 300){
		playMusic(783.991); //G5
	}

	if(mouseX > 500 && mouseX < 590 && mouseY < 390 && mouseY > 300){
		playMusic(880.000); //A5
	}

	if(mouseX > 600 && mouseX < 690 && mouseY < 390 && mouseY > 300){
		playMusic(987.767); //B5
	}

	if(mouseX > 700 && mouseX < 790 && mouseY < 390 && mouseY > 300){
		playMusic(1046.502); //C6
	}

	//Quinta fila
	if(mouseX > 0 && mouseX < 90 && mouseY < 490 && mouseY > 400){
		playMusic(246.942); //B3
	}

	if(mouseX > 100 && mouseX < 190 && mouseY < 490 && mouseY > 400){
		playMusic(277.182); //C#4
	}

	if(mouseX > 200 && mouseX < 290 && mouseY < 490 && mouseY > 400){
		playMusic(311.127); //D#4
	}

	if(mouseX > 300 && mouseX < 390 && mouseY < 490 && mouseY > 400){
		playMusic(329.628); //E4
	}

	if(mouseX > 400 && mouseX < 490 && mouseY < 490 && mouseY > 400){
		playMusic(369.994); //F#4
	}

	if(mouseX > 500 && mouseX < 590 && mouseY < 490 && mouseY > 400){
		playMusic(415.305); //G#4
	}

	if(mouseX > 600 && mouseX < 690 && mouseY < 490 && mouseY > 400){
		playMusic(466.164); //A#4
	}

	if(mouseX > 700 && mouseX < 790 && mouseY < 490 && mouseY > 400){
		playMusic(493.883); //B4
	}	


	//Sexta fila

	if(mouseX > 0 && mouseX < 90 && mouseY < 590 && mouseY > 500){
		playMusic(261.626); //C4
	}

	if(mouseX > 100 && mouseX < 190 && mouseY < 590 && mouseY > 500){
		playMusic(293.665); //D4
	}

	if(mouseX > 200 && mouseX < 290 && mouseY < 590 && mouseY > 500){
		playMusic(329.628); //E4
	}

	if(mouseX > 300 && mouseX < 390 && mouseY < 590 && mouseY > 500){
		playMusic(349.228); //F4
	}

	if(mouseX > 400 && mouseX < 490 && mouseY < 590 && mouseY > 500){
		playMusic(391.995); //G4
	}

	if(mouseX > 500 && mouseX < 590 && mouseY < 590 && mouseY > 500){
		playMusic(440.000); //A4
	}

	if(mouseX > 600 && mouseX < 690 && mouseY < 590 && mouseY > 500){
		playMusic(493.883); //B4
	}

	if(mouseX > 700 && mouseX < 790 && mouseY < 590 && mouseY > 500){
		playMusic(523.251); //C5
	}	


	//Septima fila
	if(mouseX > 0 && mouseX < 90 && mouseY < 690 && mouseY > 600){
		playMusic(123.471); //B2
	}

	if(mouseX > 100 && mouseX < 190 && mouseY < 690 && mouseY > 600){
		playMusic(138.591); //C#3
	}

	if(mouseX > 200 && mouseX < 290 && mouseY < 690 && mouseY > 600){
		playMusic(155.563); //D#3
	}

	if(mouseX > 300 && mouseX < 390 && mouseY < 690 && mouseY > 600){
		playMusic(164.814); //E3
	}

	if(mouseX > 400 && mouseX < 490 && mouseY < 690 && mouseY > 600){
		playMusic(184.997); //F#3
	}

	if(mouseX > 500 && mouseX < 590 && mouseY < 690 && mouseY > 600){
		playMusic(207.652); //G#3
	}

	if(mouseX > 600 && mouseX < 690 && mouseY < 690 && mouseY > 600){
		playMusic(233.082); //A#3
	}

	if(mouseX > 700 && mouseX < 790 && mouseY < 690 && mouseY > 600){
		playMusic(246.942); //B3
	}	


	//Octava fila
	if(mouseX > 0 && mouseX < 90 && mouseY < 790 && mouseY > 700){
		playMusic(130.813); //C3
	}

	if(mouseX > 100 && mouseX < 190 && mouseY < 790 && mouseY > 700){
		playMusic(146.832); //D3
	}

	if(mouseX > 200 && mouseX < 290 && mouseY < 790 && mouseY > 700){
		playMusic(164.814); //E3
	}

	if(mouseX > 300 && mouseX < 390 && mouseY < 790 && mouseY > 700){
		playMusic(174.614); //F3
	}

	if(mouseX > 400 && mouseX < 490 && mouseY < 790 && mouseY > 700){
		playMusic(195.998); //G3
	}

	if(mouseX > 500 && mouseX < 590 && mouseY < 790 && mouseY > 700){
		playMusic(220.000); //A3
	}

	if(mouseX > 600 && mouseX < 690 && mouseY < 790 && mouseY > 700){
		playMusic(246.942); //B3
	}

	if(mouseX > 700 && mouseX < 790 && mouseY < 790 && mouseY > 700){
		playMusic(261.626); //C4
	}





	/*
	if(mouseX > 0 && mouseX < 90 && mouseY < 90 && mouseY > 0){
		if(!playing){
			osci.freq(700);
			osci.amp(0.5, 0.05);
			playing = true;
			backgroundColor = color(0, 255, 255);
		}
		else{
			osci.amp(0, 0.5);
			playing = false;
			backgroundColor = color(255, 0, 255);
		}
	}

	if(mouseX > 100 && mouseX < 190 && mouseY < 90 && mouseY > 0){
		if(!playing){
			osci.freq(2000);
			osci.amp(0.5, 0.05);
			playing = true;
			backgroundColor = color(0, 255, 255);
		}
		else{
			osci.amp(0, 0.5);
			playing = false;
			backgroundColor = color(255, 0, 255);
		}
	}
	*/
}

