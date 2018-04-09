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

Board.prototype.swapGems = function (board, gem1, gem2) {
  console.log(board);
  var newBoard = board.board.slice();
  var gem1col = gem1.col;
  var gem1row = gem1.row ;
  var gem2col = gem2.col;
  var gem2row = gem2.row;
  gem1.col = gem1col;
  gem1.row = gem1row;
  gem2.col = gem2col;
  gem2.row = gem2row;
  newBoard[gem1col][gem1row] = gem2;
  newBoard[gem2col][gem2row] = gem1;
  console.log(board);
  console.log(newBoard);
  return newBoard;
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
  board.swapGems(board, gemSwap1, gemSwap2);
});
