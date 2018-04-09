// Backend Logic
function Gem(type){
  this.type = type;
  this.pointVal = 50;
}

var gem1 = new Gem ("red");
var gem2 = new Gem ("blue");

function Board() {
  this.col1 = [gem1, gem2, gem1];
  this.col2 = [gem2, gem1, gem2];
  this.col3 = [gem1, gem2, gem1];
}

Board.prototype.genGem = function () {

};

// User Interface Logic
$(document).ready(function(){

});
