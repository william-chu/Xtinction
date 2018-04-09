// Backend Logic
function Gem(type){
  this.type = type;
  this.pointVal = 50;
}

var gem1 = new Gem ("red");
var gem2 = new Gem ("blue");

function Board() {
  // this.board= []
  // for (var i = 0; i < l; i++) {
  //   this.board.push([]);
  // }
  // return this.board;
  this.board = [[gem1, gem2, gem1], [gem1, gem1, gem2], [gem2, gem2, gem1]];
}

Board.prototype.genGem = function () {

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
  var columnBoard = Object.assign({}, this);
  console.log(columnBoard);
  // columnBoard.swapGems();
  this.match();
};



var gameBoard = new Board();
gameBoard.isValid();
console.log(gameBoard.match());

// User Interface Logic
$(document).ready(function(){

});
