//I followed this tutorial: https://www.youtube.com/watch?v=S1TQCi9axzg

var symbolSize = 18;
var streams = [];

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 30));
  this.speed = random(5, 20);

  this.generateSymbols = function(x,y) {
    var first=round(random(0,4))==1;
    for (var i = 0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(x, y, this.speed, first);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbolSize;
      first= false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(180, 255, 180);
      } else {
        fill(0, 255, 70);
      }
      text(symbol.value, symbol.x, symbol.y); //function that displays the symbol.
      symbol.rain();
      symbol.setToRandomSymbol(); //randomize the symbol when it falls down.
    });
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  var x=0;
  for (var i=0; i<= width/symbolSize; i++) {
    var stream =new Stream();
    stream.generateSymbols(
      x,
      random(-1000, 0)
    );
    streams.push(stream);
    x += symbolSize;
  }
  textSize(symbolSize);
}

function draw() {
  background(0, 150); //redraw the background every frame to avoid the trail. There is a sort of transparency because opacity is set at 150. This means that some of the previous frames still show through.
  streams.forEach(function(stream) {
    stream.render();
  });
}

function Symbol(x, y, speed, first) {
  this.x = x;
  this.y = y;
  this.value; //variable to hold the symbol itself
  this.speed = speed;
  this.switchInterval = round(random(2, 20));
  this.first = first;

  this.setToRandomSymbol = function() { //function that sets later the value
    if (frameCount % this.switchInterval == 0) { //% is an operator that performs division and returns the remainder. This line basically says whenever the switch interval divides evenly into the frame count then execute it.
      this.value = String.fromCharCode(
        0x30A0 + round(random(0, 96)) //in Katakana Unicode there are 96 available characters. The Katakana blocks starts encoding 0x30A0 which translates numerically to 1,2,4,4,8, which will then be added to a random whole number between 0 and 96. The number that results from this addiction will be passed into this function from CharCode and finally converted into a string.
      );
    }

  }

  this.rain = function() { //function that increments the Y position according to the speed.
    if (this.y >= height) { //it means when the symbol reaches the bottom of the page
      this.y = 0;
    } else {
      this.y += this.speed;
    }
  }

  // function Stream() {
  //   this.symbols = [];
  //   this.totalSymbols = round(random(5, 30));
  //   this.speed = random(5, 20);
  //
  //   this.generateSymbols = function(x,y) {
  //     for (var i = 0; i <= this.totalSymbols; i++) {
  //       symbol = new Symbol(x, y, this.speed);
  //       symbol.setToRandomSymbol();
  //       this.symbols.push(symbol);
  //       y -= symbolSize;
  //     }
  //   }
  //
  //   this.render = function() {
  //     this.symbols.forEach(function(symbol) {
  //       fill(0, 255, 70);
  //       text(symbol.value, symbol.x, symbol.y); //function that displays the symbol.
  //       symbol.rain();
  //       symbol.setToRandomSymbol(); //randomize the symbol when it falls down.
  //     });
  //   }
  // }

}
