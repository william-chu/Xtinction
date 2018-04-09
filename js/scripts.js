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
  // this.board= []
  // for (var i = 0; i < l; i++) {
  //   this.board.push([]);
  // }
  // return this.board;
  this.board = [[gem1, gem2, gem1], [gem2, gem1, gem2], [gem1, gem2, gem1]];
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
  // console.log(this.board);
};

Board.prototype.match = function () {
  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board.length; j++) {
      var column = this.board[i];
      if (i < this.board.length - 2) {
        var column1 = this.board[i + 1];
        var column2 = this.board[i + 2];
        if (column[j] === column1[j] && column[j] === column2[j]) {
          return true;
        }
      }
      if (column[j] === column[j + 1] && column[j] === column[j + 2] ) {
        return true;
      }
    }
  }
  return false;
};
Board.prototype.isValid = function () {
  var tempBoard = new Board();
  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board.length; j++) {
      tempBoard.board[i][j] = this.board[i][j];
    }
  }
  console.log(tempBoard);
  tempBoard.swapGems(gem1,gem2);
  return tempBoard.match();
};

// var gameBoard = new Board();
// gameBoard.isValid();
// // console.log(gameBoard.match());

// User Interface Logic

function drawBoard(board) {
  // debugger;
  for (var i = 0; i < board.board.length; i++) {
    for (var j = 0; j < board.board.length; j++) {
      var cellID = '#' + i + '-' + j;
      // console.log(board.board[i][j].type);
      if (board.board[i][j].type === 'blue') {
        $(cellID).empty().append('<img src="img/blue.png">');
       } else if (board.board[i][j].type === 'red') {
        $(cellID).empty().append('<img src="img/red.png">')
      }
    }
  }
}

var gemSwap1;
var gemSwap2;

function selectGem (board){
  $('.cell').click(function() {
    var userClick = $(this).attr('id');
    var gemCoords = userClick.split('-');
    var xCoord = parseInt(gemCoords[0]);
    var yCoord = parseInt(gemCoords[1]);
    gemSwap1 = board.board[xCoord][yCoord];
    console.log(gemSwap1);
    // $(this).removeClass('highlight');
    // $(this).addClass('highlight');
  });
}

$(document).ready(function(){
  var newBoard = new Board();


  // var gemSwap1 = new Gem ("red");
  // var gemSwap2 = new Gem ("blue");
  // gemSwap1.col = 0;
  // gemSwap2.col = 0;
  // gemSwap1.row = 0;
  // gemSwap2.row = 1;
  drawBoard(newBoard);
  selectGem(newBoard);
  // board.swapGems(gemSwap1, gemSwap2);
});
