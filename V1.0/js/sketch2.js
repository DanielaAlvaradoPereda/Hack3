var w;
var columns;
var rows;
var board;
var next;
var capture;
var polysynth;

function setup() {
  createCanvas(400, 400);
  w = 40;
  // calcular columnas y filas
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
	polysynth = new p5.PolySynth();
}

function draw() {
	image(capture,0,0,400, 400);
	filter(THRESHOLD);
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      // 0s en los bordes
      if (i == 0 || j == 0 || i == columns-1 || j == rows-1){
				board[i][j] = 0;
      // llenar el resto respecto a la cámara
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
	//for(var i = 0; i < 3; i++){
		generate();
	//}
	background(255);
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      if ((board[i][j] == 1)) fill(0);
      else fill(255); 
      stroke(0);
      rect(i*w, j*w, w-1, w-1);
	  //polysynth.play(j * columns + i,0.5,0,0.5);
    //polysynth.play(i*4,1,0,5);
    }
  }

}

// aplicar reglas
function generate() {

  // analizar vecinos
  for (var x = 1; x < columns - 1; x++) {
    for (var y = 1; y < rows - 1; y++) {
      // Add up all the states in a 3x3 surrounding grid
      var neighbors = 0;
      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }
      neighbors -= board[x][y];
			
      // reglas
      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
      else                                             next[x][y] = board[x][y]; // Stasis
    }
  }

  // intercambio
  var temp = board;
  board = next;
  next = temp;
}