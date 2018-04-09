// Backend Logic
function Gem(type){
  this.type = type;
  this.pointVal = 50;
  this.col;
  this.row;
}

var gem1 = new Gem ("red");
var gem2 = new Gem ("blue");

function Board() {
  this.board = [[gem1, gem2, gem1],[gem2, gem1, gem2],[gem1, gem2, gem1]];
}

Board.prototype.genGem = function () {
};

Board.prototype.swapGems = function (gemInput1, gemInput2) {
  var gem1col = gemInput1.col;
  var gem1row = gemInput1.row;
  var gem2col = gemInput2.col;
  var gem2row = gemInput2.row;
  gemInput1.col = gem2col;
  gemInput1.row = gem2row;
  gemInput2.col = gem1col;
  gemInput2.row = gem1row;
  this.board[gem1col][gem1row] = gemInput2;
  this.board[gem2col][gem2row] = gemInput1;
  console.log(this.board);
};

// User Interface Logic
$(document).ready(function(){
  var board = new Board();
  var gemSwap1 = new Gem ("red");
  var gemSwap2 = new Gem ("blue");
  gemSwap1.col = 0;
  gemSwap2.col = 0;
  gemSwap1.row = 0;
  gemSwap2.row = 1;
  board.swapGems(gemSwap1, gemSwap2);
});
