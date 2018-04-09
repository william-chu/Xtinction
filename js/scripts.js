// Backend Logic
function Gem(type){
  this.type = type;
  this.pointVal = 50;
}

var gem1 = new Gem ("red");
var gem2 = new Gem ("blue");

function Board() {
  this.board = [[gem1, gem2, gem1], [gem1, gem1, gem2], [gem2, gem2, gem1]];
}

Board.prototype.genGem = function () {

};

Board.prototype.match = function () {
  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board.length; j++) {
      var temp = this.board[i];
      if (i < this.board.length - 2) {
        var temp1 = this.board[i + 1];
        var temp2 = this.board[i + 2];
        if (temp[j] === temp1[j] && temp[j] === temp2[j]) {
          return true;
        }
      }
      if (temp[j] === temp[j + 1] && temp[j] === temp[j + 2] ) {
        return true;
      }
    }
  }
  return false;
};

Board.prototype.isValid = function () {
  var tempBoard = Object.assign({}, this);
  console.log(tempBoard);
  // tempBoard.swapGems();
  this.match();
};



var gameBoard = new Board();
gameBoard.isValid();
console.log(gameBoard.match());

// User Interface Logic
$(document).ready(function(){

});
