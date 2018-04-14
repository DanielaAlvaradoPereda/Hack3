var w;
var columns;
var rows;
var board;
var next;
var capture;
var attackLevel = 1.0;
var releaseLevel = 0;
var attackTime = 0.001;
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;
var env;
var notes = [[987.767, 1108.731, 1244.508, 1318.510, 1489.978, 1661.219, 1864.655, 1975.533],
             [1046.502, 1174.659, 1318.510, 1396.913, 1567.982, 1760.000, 1975.533, 2093.005],
             [493.883, 554.364, 622.254, 659.255, 739.989, 830.609, 932.328, 987.767],
             [523.251, 587.330, 659.255, 698.456, 783.991, 880.000, 987.767, 1046.502],
             [246.942, 277.182, 311.127, 329.628, 369.994, 415.305, 466.164, 493.883],
             [261.626, 293.665, 329.628, 349.228, 391.995, 440.000, 493.883, 523.251],
             [123.471, 138.591, 155.563, 164.814, 184.997, 207.652, 233.082, 246.942],
             [130.813, 146.832, 164.814, 174.614, 195.998, 220.000, 246.942, 261.626]];

function setup() {
  // ajustes


  var canvas = createCanvas(400, 400);
  canvas.parent('contenedor');
  canvas.position((windowWidth/100)*35, (windowHeight/100)*40);
  
  frameRate(5);

  // variables
  w = 40;
  columns = floor(width/w);
  rows = floor(height/w);

  // tablero actual
  board = new Array(columns);
  for (var i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  } 

  // siguiente tablero
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
  // camara
  capture = createCapture(VIDEO);
  capture.size(400, 400);
  capture.hide();
  
  // player
  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);
  osci = new p5.Oscillator();
  osci.setType('sawtooth');
  osci.amp(env);
  osci.start();
}

function playMusic(note){
  osci.freq(note);
  env.play();
}

function draw() {
  // imagen de camara
  image(capture,0,0,400, 400);
  filter(THRESHOLD);

  // llenar tablero
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      if (i == 0 || j == 0 || i == columns-1 || j == rows-1){
        board[i][j] = 0;
      }else{
        arr = get(i*w + w/2, j*w + w/2);
        if(arr[0] == 0 && arr[1] == 0 && arr[2] == 0){
          board[i][j] = 0;
        }else{
          board[i][j] = 1;
        }
      }
      next[i][j] = 0;
    }
  }

    // dibujar tablero
    generate();
    background(255);
    var rColor = color(random(256),random(256),random(256));
    for ( var i = 0; i < columns;i++) {
      for ( var j = 0; j < rows;j++) {
        if ((board[i][j] == 1)){
          fill(rColor);
          if(i > 0 && i < 9 && j > 0 && j < 9){
            playMusic(notes[j - 1][i - 1]);
          }
        }
        else{
          if (i == 0 || j == 0 || i == columns-1 || j == rows-1){
            fill(0);
          }
          else{
            fill(255);
          }
        } 
        stroke(0);
        rect(i*w, j*w, w-1, w-1);
      }
    }
}

// aplicar reglas
function generate() {

  // analizar vecinos
  for (var x = 1; x < columns - 1; x++) {
    for (var y = 1; y < rows - 1; y++) {
      var neighbors = 0;
      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }
      neighbors -= board[x][y];
      
      // reglas
      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;
      else                                             next[x][y] = board[x][y];
    }
  }

  // intercambio
  var temp = board;
  board = next;
  next = temp;
}