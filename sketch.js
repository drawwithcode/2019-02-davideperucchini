// define the list of colors
var colorList;
// define the list of sizes
var sizeList;
var y = 0;
var x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  //set De Stijl primary colors
  colorList = ['#E70503',
    '#0300AD',
    '#FDDE06',
    '#050103',
    '#EAEFE9'
  ];

  //set only some sizes
  sizeList = [70,
    120,
    170,
    220
  ];

  strokeWeight(8);

  var _height = random(sizeList);
  var _width = random(sizeList);

  while (y < height) {
    x = 0;
    while (x < width) {
      fill(random(colorList));
      rect(x, y, _width, _height);
      x = x + _width;
      _width = random(sizeList);
    }
    y = y + _height;
    _height = random(sizeList);
  }

  //textbox
  push();
  fill('#050103');
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight - 100, windowWidth / 3, windowHeight / 12, 20);
  stroke('#EAEFE9');
  strokeWeight(2);
  noFill();
  rect(windowWidth / 2, windowHeight - 100, windowWidth / 3, windowHeight / 12, 20);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill('#EAEFE9');
  noStroke();
  textFont('Helvetica');
  text("click the canvas to generate a new Mondrian's artwork", windowWidth / 2, windowHeight - 100);
  pop();
}

function draw() {

  //click to refresh the page
  if (mouseIsPressed) {
    document.location.reload();
  }

  //responsive
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
